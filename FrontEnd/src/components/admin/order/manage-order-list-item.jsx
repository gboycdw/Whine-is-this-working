import { useEffect } from "react";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { changeShippingStatusByOrderIndex } from "../../../api/api-order";

const ManageOrderListItem = (props) => {
  const {
    totalPayPrice,
    orderIndex,
    buyer,
    buyerEmail,
    shippingRequest,
    shippingStatus,
    createdAt,
  } = props.order;

  const queryClient = useQueryClient();

  const [newShippingStatus, setNewShippingStatus] = useState(shippingStatus);
  const [isChecked, setIsChecked] = useState(props.isCheckAll);

  useEffect(() => {
    setIsChecked(props.isCheckAll);
  }, [props.isCheckAll]);

  const orderStateChangeHandler = async (e) => {
    if (window.confirm(`주문 상태를 ${e.target.value}로 변경하시겠습니까?`)) {
      setNewShippingStatus(e.target.value);
      try {
        await changeShippingStatusByOrderIndex(orderIndex, e.target.value);
        queryClient.invalidateQueries(["orders"], orderIndex);
      } catch (error) {
        return;
      }
    }
    alert(`주문 상태가 ${e.target.value}로 변경되었습니다.`);
  };

  const inputCheckHandler = (e) => {
    if (!isChecked) {
      setIsChecked(true);
      let copiedArr = [...props.checkedOrderIndexes];
      copiedArr.push(orderIndex);
      props.setCheckedOrderIndexes(copiedArr);
    } else {
      setIsChecked(false);
      let copiedArr = [...props.checkedOrderIndexes];
      copiedArr.forEach((order_Index) => {
        if (order_Index === orderIndex) {
          copiedArr.splice(orderIndex, 1);
        }
      });
      console.log(copiedArr);
      props.setCheckedOrderIndexes(copiedArr);
    }
  };

  return (
    <li className="flex text-center items-center border-b border-color2 w-full h-12 py-1 gap-3 text-sm">
      <input type="checkbox" onChange={inputCheckHandler} checked={isChecked} />
      <span className="w-24 ">{orderIndex.slice(0, 10)}</span>
      <span className="w-24 ">{buyerEmail.split("@")[0]}</span>
      <span className="w-24 ">{buyer}</span>
      <span className="w-24 ">{totalPayPrice}원</span>
      <select
        className="border h-7 w-24 border-color2"
        value={newShippingStatus}
        onChange={orderStateChangeHandler}
      >
        <option value="상품준비중">상품준비중</option>
        <option value="배송준비중">배송준비중</option>
        <option value="배송중">배송중</option>
        <option value="배송완료">배송완료</option>
      </select>

      <span className="flex-grow ">{shippingRequest}</span>
      <span className="w-32 ">{createdAt.slice(0, 10)}</span>
      <Link to={`/manage/order_manage/${orderIndex}`} className="w-20 ">
        주문관리
      </Link>
    </li>
  );
};

export default ManageOrderListItem;
