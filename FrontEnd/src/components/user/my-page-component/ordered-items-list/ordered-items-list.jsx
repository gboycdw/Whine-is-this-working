import { useState } from "react";
import OrderedItems from "./ordered-items";
import Pagination from "../../product/pagination";
import { useQuery } from "react-query";
import { getOrdersByBuyerEmail } from "../../../../api/api-order";
import { getUserDataByToken } from "../../../../api/api-auth";

const OrderedItemsList = () => {
  const limit = 5; // items의 페이지네이션 단위
  const [page, setPage] = useState(1); //페이지
  const offset = (page - 1) * limit;

  const {
    data: idData,
    isLoading: idIsLoading,
    isError: idIsError,
    error: idError,
  } = useQuery(["auth"], async () => await getUserDataByToken());
  const buyerEmail = idData?.email;
  const { data, isLoading, isError, error } = useQuery(
    ["orders", buyerEmail],
    async () => await getOrdersByBuyerEmail(buyerEmail)
  );
  // const currentUrl = window.location.href;
  // console.log("currentUrl", currentUrl);
  if (data) {
    console.log(data);
  }
  return (
    <>
      <div>
        {isLoading ? (
          <div className="h-[800px] flex justify-center items-center ">
            <div className="w-[80%] flex justify-center items-center h-[80%] mb-[10%] rounded-xl border-2 border-c1">
              <div>Loading...</div>
            </div>
          </div>
        ) : !data ? (
          <div className="h-[800px] flex justify-center items-center ">
            <div className="w-[80%] flex justify-center items-center h-[80%] mb-[10%] rounded-xl border-2 border-c1">
              <div>
                <div className="text-3xl text-center">
                  아직 주문내역이 없습니다.
                </div>
                <div className="text-3xl text-center">
                  <br></br>
                </div>
                <div className="text-3xl text-center">
                  주문 후 이용해 주세요.
                </div>
              </div>
            </div>
          </div>
        ) : !isError ? (
          <div class=" flex justify-center items-center ">
            <div class="w-[80%] h-[80%] ">
              <div class="h-[15%]">
                <h1 class="text-3xl mb-[10%]">주문 내역</h1>
              </div>
              <div>
                {data.slice(offset, offset + limit).map((index) => (
                  <OrderedItems
                    dateOfOrder={index.createdAt}
                    shippingState={index.shippingStatus}
                    orderList={index.orderList}
                    orderIndex={index.orderIndex}
                  />
                ))}
              </div>
              <div>
                <Pagination
                  // 필터된 데이터 개수에 따라 창 개수로 설정
                  total={data.length}
                  limit={limit}
                  page={page}
                  setPage={setPage}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
            {error.message}
          </div>
        )}
      </div>
    </>
  );
};

export default OrderedItemsList;
