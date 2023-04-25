import { Link } from "react-router-dom";

const ManageOrderListItem = (props) => {
  const {
    id,
    no,
    userId,
    orderName,
    orderPrice,
    deliveryState,
    request,
    orderDate,
  } = props.order;

  console.log(props.order);

  const orderStateChangeHandler = () => {};

  return (
    <li class="flex text-center items-center border-b border-color2 w-full py-1 gap-3 text-sm">
      {/* <input type="checkbox" onClick={inputCheckHandler} checked={isChecked} /> */}
      <span class="w-24 ">{no}</span>
      <span class="w-24 ">{userId}</span>
      <span class="w-24 ">{orderName}</span>
      <span class="w-24 ">{orderPrice}원</span>
      <select
        class="border h-7 w-20"
        value={deliveryState}
        onChange={orderStateChangeHandler}
      >
        <option value="상품준비중">상품준비중</option>
        <option value="배송준비중">배송준비중</option>
        <option value="배송중">배송중</option>
        <option value="배송완료">배송완료</option>
      </select>

      <span class="flex-grow ">{request}</span>
      <span class="w-32 ">{orderDate}</span>
      <Link to={`/manage/order_manage/${id}`} class="w-20 ">
        주문관리
      </Link>
    </li>
  );
};

export default ManageOrderListItem;
