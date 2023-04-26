import { useState } from "react";
import OrderedItems from "./ordered-items";
import Pagination from "../../product/pagination";

const OrderedItemsList = () => {
  const limit = 5; // items의 페이지네이션 단위
  const [page, setPage] = useState(1); //페이지
  const offset = (page - 1) * limit;

  const orderedItemsData = [
    //더미 데이터
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
      ],
    },
    {
      orderedItemsId: "2",
      dateOfOrder: "2023.4.25",
      shippingState: "배송중",
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
      ],
    },
    {
      orderedItemsId: "3",
      dateOfOrder: "2023.3.3",
      shippingState: "배송완료",
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
      orderedItemsId: "4",
      dateOfOrder: "2022.12.23",
      shippingState: "배송완료",
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
      ],
    },
    {
      orderedItemsId: "5",
      dateOfOrder: "2022.3.17",
      shippingState: "배송완료",
      orderedItems: [
        {
          orderedItemId: "1",
          productName: "17th Rayen Francho Cielf IV 480ml",
          productNums: 2,
          imgUrl:
            "https://cdn.pixabay.com/photo/2013/07/12/16/28/wine-150955_960_720.png",
        },
      ],
    },
    {
      orderedItemsId: "6",
      dateOfOrder: "2023.2.12",
      shippingState: "배송완료",
      orderedItems: [
        {
          orderedItemId: "1",
          productName: "17th Rayen Francho Cielf IV 480ml",
          productNums: 2,
          imgUrl:
            "https://cdn.pixabay.com/photo/2013/07/12/16/28/wine-150955_960_720.png",
        },
      ],
    },
    {
      orderedItemsId: "7",
      dateOfOrder: "2022.1.22",
      shippingState: "배송완료",
      orderedItems: [
        {
          orderedItemId: "1",
          productName: "17th Rayen Francho Cielf IV 480ml",
          productNums: 2,
          imgUrl:
            "https://cdn.pixabay.com/photo/2013/07/12/16/28/wine-150955_960_720.png",
        },
      ],
    },
  ];
  return (
    <>
      <div class=" flex justify-center items-center ">
        <div class="w-[80%] h-[80%] ">
          <div class="h-[15%]">
            <h1 class="text-3xl mb-[10%]">주문 내역</h1>
          </div>
          <div>
            {orderedItemsData.slice(offset, offset + limit).map((index) => (
              <OrderedItems
                dateOfOrder={index.dateOfOrder}
                shippingState={index.shippingState}
                orderedItems={index.orderedItems}
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
