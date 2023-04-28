import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { changeSaleStateById } from "../../../api/api-product";

const ManageProductListItem = (props) => {
  const {
    _id,
    seq,
    imgUrl,
    name,
    price,
    type,
    saleState,
    inventory,
    createdAt,
    updatedAt,
  } = props.product;

  const [isChecked, setIsChecked] = useState(props.isCheckAll);
  const [newSaleState, setNewSaleState] = useState(saleState);

  // 부모 컴포넌트에서 모든 체크, 모든 체크 해제 어떤 값을내리냐에따라 이 컴포넌트의 체크여부 상태를 업데이트함
  useEffect(() => {
    setIsChecked(props.isCheckAll);
  }, [props.isCheckAll]);

  const queryClient = useQueryClient();
  // 상품 체크 핸들러 (부모컴포넌트의 체크된 제품ID들 배열 상태를 업데이트함)
  const inputCheckHandler = (e) => {
    if (!isChecked) {
      setIsChecked(true);
      let copiedArr = [...props.checkedProductIds];
      copiedArr.push(_id);
      props.setCheckedProductIds(copiedArr);
    } else {
      setIsChecked(false);
      let copiedArr = [...props.checkedProductIds];
      copiedArr.forEach((productId) => {
        if (productId === _id) {
          copiedArr.splice(_id, 1);
        }
      });
      console.log(copiedArr);
      props.setCheckedProductIds(copiedArr);
    }
  };
  // 판매상태 변경 핸들러 (바뀐 판매상태를 백엔드에 상품 id값과 같이 전송)
  const saleStateChangeHandler = async (e) => {
    const saleState = e.target.value;
    setNewSaleState(saleState);
    if (window.confirm(`제품의 상태를 ${e.target.value}로 변경하시겠습니까?`)) {
      try {
        const result = await changeSaleStateById(_id, saleState);
        queryClient.invalidateQueries(["products", _id, saleState]);
      } catch (error) {
        console.log(error);
        return;
      }
    }
    alert("제품의 상태가 변경되었습니다.");
  };

  return (
    <li className="flex text-center items-center border-b border-color2 w-full py-1 gap-3 text-sm">
      <input type="checkbox" onChange={inputCheckHandler} checked={isChecked} />
      <span className="w-10 ">{seq}</span>
      <span className="w-10 flex justify-center items-center">
        <img className="h-10" src={imgUrl} alt={name} />
      </span>
      <span className="grow">
        <Link className="underline" to={`/product/${_id}`}>
          {name}
        </Link>
      </span>

      <span className="w-24 ">{price.toLocaleString()}원</span>
      <span className="w-20 ">{type}</span>
      <select
        className="border border-color2 rounded h-7 w-16"
        value={newSaleState}
        onChange={saleStateChangeHandler}
      >
        <option value="판매중">판매중</option>
        <option value="품절">품절</option>
        <option value="숨김">숨김</option>
      </select>
      <span className="w-16 ">{inventory}</span>
      <span className="w-32 ">{createdAt?.slice(0, 10)}</span>
      <span className="w-32 ">{updatedAt?.slice(0, 10)}</span>
      <Link to={`/manage/edit_product/${_id}`} className="w-20 ">
        수정하기
      </Link>
    </li>
  );
};

export default ManageProductListItem;
