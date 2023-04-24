import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageProductListItem = (props) => {
  const {
    id,
    no,
    imgUrl,
    name,
    price,
    category,
    saleState,
    inventory,
    registerDay,
    editDay,
  } = props.product;

  const [isChecked, setIsChecked] = useState(props.isCheckAll);
  const [newSaleState, setNewSaleState] = useState(saleState);

  // 부모 컴포넌트에서 모든 체크, 모든 체크 해제 어떤 값을내리냐에따라 이 컴포넌트의 체크여부 상태를 업데이트함
  useEffect(() => {
    setIsChecked(props.isCheckAll);
  }, [props.isCheckAll]);

  // 상품 체크 핸들러 (부모컴포넌트의 체크된 제품ID들 배열 상태를 업데이트함)
  const inputCheckHandler = (e) => {
    if (!isChecked) {
      setIsChecked(true);
      let copiedArr = [...props.checkedProductIds];
      copiedArr.push(id);
      props.setCheckedProductIds(copiedArr);
    } else {
      setIsChecked(false);
      let copiedArr = [...props.checkedProductIds];
      copiedArr.forEach((productId) => {
        if (productId === id) {
          copiedArr.splice(id, 1);
        }
      });
      props.setCheckedProductIds(copiedArr);
    }
  };

  // 판매상태 변경 핸들러 (바뀐 판매상태를 백엔드에 상품 id값과 같이 전송)
  const saleStateChangeHandler = (e) => {
    const saleState = e.target.value;
    setNewSaleState(saleState);
    axios.post(
      "url주소",
      {
        id,
        saleState, // 체크된 상품들의 id 배열을 엑시오스로 넘겨줌
      },
      {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
  };

  return (
    <li class="flex text-center items-center border-b border-color2 w-full py-1 gap-3 text-sm">
      <input type="checkbox" onClick={inputCheckHandler} checked={isChecked} />
      <span class="w-10 ">{no}</span>
      <span class="w-10 flex justify-center items-center">
        <img class="h-10" src={imgUrl} alt={name} />
      </span>
      <span class="grow ">{name}</span>
      <span class="w-24 ">{price.toLocaleString()}원</span>
      <span class="w-20 ">{category}</span>
      <select
        class="border border-color2 rounded h-7 w-16"
        value={newSaleState}
        onChange={saleStateChangeHandler}
      >
        <option value="판매중">판매중</option>
        <option value="품절">품절</option>
        <option value="숨김">숨김</option>
      </select>
      <span class="w-16 ">{inventory}</span>
      <span class="w-32 ">{registerDay}</span>
      <span class="w-32 ">{editDay}</span>
      <Link to={`/manage/edit_product/${id}`} class="w-20 ">
        수정하기
      </Link>
    </li>
  );
};

export default ManageProductListItem;
