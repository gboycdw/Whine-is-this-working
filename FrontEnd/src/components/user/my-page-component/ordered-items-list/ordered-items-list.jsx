import { useContext, useEffect, useState } from "react";
import OrderedItems from "./ordered-items";
import { Link } from "react-router-dom";
import Pagination from "../../product/pagination";

const OrderedItemsList = () => {
  const limit = 5;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const orderedItemsData = [
    {
      orderedItemsId: "1acascascsac",
      dateOfOrder: "2023.4.29",
      shippingState: "배송준비중",
      orderedItems: [
        {
          orderedItemId: "1",
          productName: "17th Rayen Francho Cielf IV 480ml",
          productNums: 2,
          imgUrl:
            "https://cdn.pixabay.com/photo/2013/07/12/16/28/wine-150955_960_720.png",
        },
        {
          orderedItemId: "2",
          productName: "17th Rayen Francho Cielf IV 480ml",

          productNums: 2,
          imgUrl:
            "https://cdn.pixabay.com/photo/2013/07/12/16/28/wine-150955_960_720.png",
        },
        {
          orderedItemId: "3",
          productName: "17th Rayen Francho Cielf IV 480ml",

          productNums: 2,
          imgUrl:
            "https://cdn.pixabay.com/photo/2013/07/12/16/28/wine-150955_960_720.png",
        },
        {
          orderedItemId: "4",
          productName: "17th Rayen Francho Cielf IV 480ml",

          productNums: 2,
          imgUrl:
            "https://cdn.pixabay.com/photo/2013/07/12/16/28/wine-150955_960_720.png",
        },
        {
          orderedItemId: "5",
          productName: "17th Rayen Francho Cielf IV 480ml",

          productNums: 2,
          imgUrl:
            "https://cdn.pixabay.com/photo/2013/07/12/16/28/wine-150955_960_720.png",
        },
      ],
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
      dateOfOrder: "2022.3.17",
      shippingState: "배송완료",
    },
    {
      orderedItemsId: "6",
      dateOfOrder: "2023.2.12",
      shippingState: "배송완료",
    },
    {
      orderedItemsId: "7",
      dateOfOrder: "2022.1.22",
      shippingState: "배송완료",
    },
    {
      orderedItemsId: "8",
      dateOfOrder: "2021.4.3",
      shippingState: "배송완료",
    },
  ];
  const orderDetailEnter = "주문상세보기>";
  const orderOptions = ["주문취소", "교환/환불", "리뷰작성", "배송조회"];
  const OrderedItemsListUp = ({
    // map 으로 items 뿌리는 함수.
    orderedItemsId,
    dateOfOrder,
    shippingState,
  }) => {
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
            {orderedItemsData.slice(offset, offset + limit).map((index) => (
              <OrderedItemsListUp
                dateOfOrder={index.dateOfOrder}
                shippingState={index.shippingState}
              />
            ))}
          </div>
          <div>
            <Pagination
              // 필터된 데이터 개수에 따라 창 개수로 설정
              total={orderedItemsData.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderedItemsList;
