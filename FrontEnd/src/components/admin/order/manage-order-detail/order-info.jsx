import { useState } from "react";
import { useQueryClient } from "react-query";
import { changeShippingStatusByOrderIndex } from "../../../../api/api-order";

const OrderInfo = (props) => {
  const {
    orderIndex,
    createdAt,
    shippingStatus,
    buyer,
    buyerPhoneNumber,
    buyerEmail,
  } = props.order;

  const queryClient = useQueryClient();
  const [newShippingStatus, setNewShippingStatus] = useState(shippingStatus);

  const shippingStatusChangeHandler = async (e) => {
    setNewShippingStatus(e.target.value);
    try {
      const result = await changeShippingStatusByOrderIndex(
        orderIndex,
        e.target.value
      );
      queryClient.invalidateQueries(["orders"], orderIndex);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col flex-grow">
      <h3 className="px-4 py-2 text-lg">주문정보</h3>
      <div className="flex border-t">
        <ul className="flex flex-col border-t border-color2">
          <li className="flex h-12 border-b border-color2 items-center">
            <div className="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span className="px-4">주문번호</span>
            </div>
            <div className="flex w-80 h-full items-center">
              <span className="px-4">{orderIndex}</span>
            </div>
          </li>
          <li className="flex h-12 border-b border-color2 items-center">
            <div className="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span className="px-4">주문일자</span>
            </div>
            <div className="flex w-80 h-full items-center">
              <span className="px-4">{createdAt.slice(0, 10)}</span>
            </div>
          </li>
          <li className="flex h-12 border-b border-color2 items-center">
            <div className="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span className="px-4">주문상태</span>
            </div>
            <div className="flex w-80 h-full items-center px-4">
              <select
                className="p-1 border border-color2 rounded"
                value={newShippingStatus}
                onChange={shippingStatusChangeHandler}
              >
                <option value="결제확인">결제확인</option>
                <option value="상품준비중">상품준비중</option>
                <option value="배송준비중중">배송준비중</option>
                <option value="배송중">배송중</option>
                <option value="배송완료">배송완료</option>
                <option value="취소">취소</option>
              </select>
            </div>
          </li>
          <li className="flex h-12 border-b border-color2 items-center">
            <div className="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span className="px-4">주문자</span>
            </div>
            <div className="flex w-80 h-full items-center">
              <span className="px-4">{buyer}</span>
            </div>
          </li>

          <li className="flex h-12 border-b border-color2 items-center">
            <div className="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span className="px-4">연락처</span>
            </div>
            <div className="flex w-80 h-full items-center">
              <span className="px-4">{buyerPhoneNumber}</span>
            </div>
          </li>
          <li className="flex h-12 border-b border-color2 items-center">
            <div className="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span className="px-4">이메일</span>
            </div>
            <div className="flex w-80 h-full items-center">
              <span className="px-4">{buyerEmail}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderInfo;
