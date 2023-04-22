import { useContext, useEffect, useState } from "react";
import CartItem from "../../../components/order/cart-item";
import { cartCtx } from "../../../components/store/cart-context";
import Layout from "../../../components/user/layout/layout";

// 부모 컴포넌트에서 자식 컴포넌트 받기
// 총 상품가격, 할인가격

const Cart = (props) => {
  const { cartData } = useContext(cartCtx);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscountPrice, setTotalDiscountPrice] = useState(0);

  // 총 상품금액, 총 할인금액
  // cartData가 변경될 때마다 총 상품금액, 총 할인금액 업데이트됨
  useEffect(() => {
    let totalPrice = 0;
    cartData.forEach((item) => {
      totalPrice += item.price * item.amount;
    });

    let totalDiscountPrice = 0;
    cartData.forEach((item) => {
      console.log(item.discountPrice);
      totalDiscountPrice += item.discountPrice * item.amount;
    });

    setTotalPrice(totalPrice);
    setTotalDiscountPrice(totalDiscountPrice);
  }, [cartData]);

  return (
    <>
      <Layout>
        {/* 장바구니 Title */}
        <div className="mb-12 ml-12 mt-[50px]">
          <h1 className="text-3xl">장바구니</h1>
        </div>

        {/* 장바구니 목록 */}
        <ul className="flex flex-col">
          {/* <컴포넌트 객체이름={데이터} /> */}
          {/* map 이용해서 배열 수만큼 li 렌더링 되어야 함 */}
          {cartData.map((item) => {
            return <CartItem cart={item} />;
          })}
        </ul>

        {/* 총 상품금액 - 총 할인금액 = 총 결제금액 */}
        <div>
          <div
            className="flex mb-[100px] mt-[55px] justify-center items-center
           space-x-[70px] border-y py-[30px]"
          >
            {/* 총 상품금액 */}
            <div className="flex flex-col items-center">
              <span className="text-[18px]">상품금액</span>
              <span className="text-[24px] font-[600]">{totalPrice}원</span>
            </div>
            {/* - */}
            <div className="justify-center text-[28px]">
              <span>-</span>
            </div>
            {/* 총 할인금액 */}
            <div className="flex flex-col items-center">
              <span className="text-[18px]">할인금액</span>
              <span className="text-[24px] font-medium font-[600]">
                {totalDiscountPrice}원
              </span>
            </div>
            {/* = */}
            <div className="justify-center text-[24px]">
              <span>=</span>
            </div>
            {/* 총 결제금액 */}
            <div className="flex flex-col items-center">
              <span className="text-[18px]">총 결제금액</span>
              <span className="text-[24px] font-medium font-[600]">
                {totalPrice - totalDiscountPrice}원
              </span>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
