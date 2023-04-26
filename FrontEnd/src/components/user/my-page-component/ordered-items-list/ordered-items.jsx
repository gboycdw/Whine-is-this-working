import { useContext, useEffect, useState } from "react";
import OrderedItem from "./ordered-item";
import { Link } from "react-router-dom";

const orderDetailEnter = "주문상세보기>";
const orderOptions = ["주문취소", "교환/환불", "리뷰작성", "배송조회"];
const OrderedItems = ({
  // map 으로 items 뿌리는 함수.
  orderedItemsId,
  dateOfOrder,
  shippingState,
}) => {
  const orderedItem = [
    {
      orderedItemId: "1",
    },
    {
      orderedItemId: "2",
    },
    {
      orderedItemId: "3",
    },
    {
      orderedItemId: "4",
    },
    {
      orderedItemId: "5",
    },
  ];

  return (
    <div class="w-[100%]  border-2 border-c3 rounded-xl mb-[20px]">
      <div class="flex justify-between">
        <div class="m-[20px] text-xl">{dateOfOrder} 주문</div>
        <Link to="/" class="m-[20px] text-c4 text-xl">
          {orderDetailEnter}
        </Link>
      </div>
      <div class="m-[20px] border-2 border-c1 rounded-xl mt-[0px]">
        <div class="flex justify-between">
          <div class="text-2xl m-[20px]">{shippingState}</div>
          {shippingState === "배송준비중" ? (
            <button class="text-xl border-[1px] border-c1 w-[100px] h-[40px] m-[20px] ">
              {orderOptions[0]}
            </button>
          ) : shippingState === "배송완료" ? (
            <div>
              <button class="text-xl border-[1px] border-c1 w-[100px] h-[40px] m-[20px] ">
                {orderOptions[1]}
              </button>
              <button class="text-xl border-[1px] border-c1 w-[100px] h-[40px] m-[20px] ">
                {orderOptions[2]}
              </button>
            </div>
          ) : (
            <button class="text-xl border-[1px] border-c1 w-[100px] h-[40px] m-[20px] ">
              {orderOptions[3]}
            </button>
          )}
        </div>
        <div class="mb-[20px]">
          <div class=" flex justify-center items-center ">
            <div class="w-[90%] h-[90%] ">
              <div>
                {orderedItem.map((orderedItem) => (
                  <OrderedItem orderedItemId={orderedItem.orderedItemId} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedItems;
