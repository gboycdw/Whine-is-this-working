import axios from "axios";
import { useState } from "react";
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

  const [isChecked, setIsChecked] = useState(false);

  const inputCheckHandler = (e) => {
    console.log(props.checkedProductIds);
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

  const saleStateChangeHandler = (e) => {
    const saleState = e.target.value;
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
      <input type="checkbox" onClick={inputCheckHandler} />
      <span class="w-10 ">{no}</span>
      <span class="w-10 flex justify-center items-center">
        <img class="h-10" src={imgUrl} alt={name} />
      </span>
      <span class="grow ">{name}</span>
      <span class="w-24 ">{price.toLocaleString()}원</span>
      <span class="w-20 ">{category}</span>
      <select
        class="border h-7 w-16"
        value={saleState}
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
