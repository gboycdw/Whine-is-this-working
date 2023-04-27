import { useState } from "react";
import OrderedItems from "./ordered-items";
import Pagination from "../../product/pagination";
import { useQuery } from "react-query";
import { getOrderByOrderBuyerEmail } from "../../../../api/api-order";

const OrderedItemsList = () => {
  const limit = 5; // items의 페이지네이션 단위
  const [page, setPage] = useState(1); //페이지
  const offset = (page - 1) * limit;
  const buyerEmail = "test@gmail.com";
  const { data, isLoading, isError, error } = useQuery(
    ["orders", buyerEmail],
    async () => await getOrderByOrderBuyerEmail(buyerEmail)
  );
  const orderedItemsData = data;
  console.log("order", orderedItemsData);
  console.log("shippingStatus", orderedItemsData[0].shippingStatus);
  console.log("orderList", orderedItemsData[0].orderList);
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
                dateOfOrder={index.createdAt}
                shippingState={index.shippingStatus}
                orderList={index.orderList}
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
