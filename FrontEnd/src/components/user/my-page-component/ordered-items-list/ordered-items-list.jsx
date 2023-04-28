import { useState } from "react";
import OrderedItems from "./ordered-items";
import Pagination from "../../product/pagination";
import { useQuery } from "react-query";
import { getOrdersByBuyerEmail } from "../../../../api/api-order";
import { getUserDataByToken } from "../../../../api/api-auth";
import { useContext } from "react";
import { authCtx } from "../../../store/auth-context";

const OrderedItemsList = () => {
  const limit = 5; // items의 페이지네이션 단위
  const [page, setPage] = useState(1); //페이지
  const offset = (page - 1) * limit;

  const { auth } = useContext(authCtx);

  const { data: orderList, isLoading } = useQuery(["orders", auth.email], () =>
    getOrdersByBuyerEmail(auth?.email)
  );

  console.log(orderList);

  return (
    <>
      <div>
        {isLoading ? (
          <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2x">
            Loading...
          </div>
        ) : orderList.length === 0 ? (
          <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2x">
            주문내역이 없습니다.
          </div>
        ) : (
          <>
            <div class=" flex justify-center items-center ">
              <div class="w-[80%] h-[80%] ">
                <div class="h-[15%]">
                  <h1 class="text-3xl mb-[10%]">주문 내역</h1>
                </div>
                <div>
                  {orderList.slice(offset, offset + limit).map((index) => (
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
                    total={orderList?.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default OrderedItemsList;
