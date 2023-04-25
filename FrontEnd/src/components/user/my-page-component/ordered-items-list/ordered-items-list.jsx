import { useContext, useEffect, useState } from "react";
import OrderedItems from "./ordered-items";
import { Link } from "react-router-dom";

const OrderedItemsList = () => {
  const orderedItemsData = [
    {
      orderedItemsId: "1",
      dateOfOrder: "2023.4.29",
      shippingState: "배송준비중",
    },
    {
      orderedItemsId: "2",
      dateOfOrder: "2023.4.25",
      shippingState: "배송중",
    },
    {
      orderedItemsId: "3",
      dateOfOrder: "2023.3.3",
      shippingState: "배송완료",
    },
    {
      orderedItemsId: "4",
      dateOfOrder: "2022.12.23",
      shippingState: "배송완료",
    },
    {
      orderedItemsId: "5",
      dateOfOrder: "2022.10.17",
      shippingState: "배송완료",
    },
  ];
  const orderDetailenter = "주문상세보기>";
  const OrderedItemsListUp = ({
    orderedItemsId,
    dateOfOrder,
    shippingState,
  }) => {
    return (
      <div class="w-[100%]  border-2 border-c3 rounded-xl mb-[20px]">
        <div class="flex justify-between">
          <div class="m-[20px] text-xl">{dateOfOrder} 주문</div>
          <Link to="/" class="m-[20px] text-c4 text-xl">
            {orderDetailenter}
          </Link>
        </div>
        <div class="m-[20px] border-2 border-c1 rounded-xl mt-[0px]">
          <div class="flex justify-between">
            <div class="text-2xl m-[20px]">{shippingState}</div>
            <button class="text-xl border-[1px] border-c1 w-[100px] h-[40px] m-[20px] ">
              주문취소
            </button>
          </div>
          <div>
            <OrderedItems />
          </div>
        </div>
      </div>
    );
  };
  const [dateOfOrder, setDateOfOrder] = useState("");
  return (
    <>
      <div class=" flex justify-center items-center ">
        <div class="w-[80%] h-[80%] ">
          <div class="h-[15%]">
            <h1 class="text-3xl mb-[10%]">주문 내역</h1>
          </div>
          <div>
            {orderedItemsData.map((index) => (
              <OrderedItemsListUp
                dateOfOrder={index.dateOfOrder}
                shippingState={index.shippingState}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderedItemsList;
