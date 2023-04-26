import OrderedItem from "./ordered-item";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const orderDetailEnter = "주문상세보기>";
const OrderedItems = (
  // map 으로 items 뿌리는 함수.
  props
) => {
  const navigate = useNavigate();
  const orderedItems = props.orderedItems; //아이템들 정보 담긴 배열
  const dateOfOrder = props.dateOfOrder; //주문 날짜
  const shippingState = props.shippingState; //배송상태
  const shippingOptionHandler = (e) => {
    console.log(e.target.innerHTML);
    e.target.innerHTML === "주문취소"
      ? alert("주문이 취소되었습니다.") // 주문취소 버튼 클릭시 => db 요청 삭제.
      : e.target.innerHTML === "배송조회"
      ? navigate("/ordered-items-list/shipping-inquiry") // 배송조회 클릭시 배송조회 페이지로
      : navigate("/ordered-items-list/exchange"); // 배송완료면 교환/환불 완료 페이지로
  };
  return (
    <div class="w-[100%]  border-2 border-c3 rounded-xl mb-[20px]">
      <div class="flex justify-between">
        <div class="m-[20px] text-xl">{dateOfOrder} 주문</div>
        <Link to="/ordered-items-list/detail" class="m-[20px] text-c4 text-xl">
          {orderDetailEnter}
          {/* 주문상세보기 버튼 */}
        </Link>
      </div>
      <div class="m-[20px] border-2 border-c1 rounded-xl mt-[0px]">
        <div class="flex justify-between">
          <div class="text-2xl m-[20px]">{shippingState}</div>
          {shippingState === "배송준비중" ? (
            <button
              onClick={shippingOptionHandler}
              class="text-xl border-[1px] border-c1 w-[100px] h-[40px] m-[20px] "
            >
              주문취소
              {/* 배송준비중이면 주문취소 버튼생성*/}
            </button>
          ) : shippingState === "배송완료" ? (
            <div>
              <button
                onClick={shippingOptionHandler}
                class="text-xl border-[1px] border-c1 w-[100px] h-[40px] m-[20px] "
              >
                교환/환불
                {/* 배송완료면  교환환불, 리뷰작성 버튼생성*/}
              </button>
              <button
                onClick={shippingOptionHandler}
                class="text-xl border-[1px] border-c1 w-[100px] h-[40px] m-[20px] "
              >
                리뷰작성
              </button>
            </div>
          ) : (
            <button
              onClick={shippingOptionHandler}
              class="text-xl border-[1px] border-c1 w-[100px] h-[40px] m-[20px] "
            >
              {/* 배송중이면 배송조회 버튼생성*/}
              배송조회
            </button>
          )}
        </div>
        <div class="mb-[20px]">
          <div class=" flex justify-center items-center ">
            <div class="w-[90%] h-[90%] ">
              <div>
                {orderedItems.map((index) => (
                  //items 들이 들어있는 배열
                  <OrderedItem orderedItems={index} />
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
