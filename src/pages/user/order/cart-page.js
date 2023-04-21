import { useContext, useEffect, useState } from "react";
import CartItem from "../../../components/order/cart-item";
import { cartCtx } from "../../../components/store/cart-context";
import Layout from "../../../components/layout/layout";

// 부모 컴포넌트에서 자식 컴포넌트 받기
// 총 상품가격, 할인가격

const Cart = (props) => {
  const { cartData, setCartData } = useContext(cartCtx);
  const [totalPriceArr, setTotalPriceArr] = useState([]);

  const parentFunction = (arr) => {
    console.log(arr);
    setTotalPriceArr(arr);
    console.log(totalPriceArr);
  };

  useEffect(() => {
    parentFunction();
  }, [totalPriceArr]);

  console.log(totalPriceArr);

  return (
    <>
      <Layout>
        {/* 장바구니 Title */}
        <div className="mb-12 ml-12">
          <h1 className="text-3xl">장바구니</h1>
        </div>

        {/* 장바구니 목록 */}
        <ul className="flex flex-col">
          {/* <컴포넌트 객체이름={데이터} /> */}
          {/* map 이용해서 배열 수만큼 li 렌더링 되어야 함 */}
          {cartData.map((item) => {
            return (
              <CartItem
                cart={item}
                cartCalcPrice={parentFunction}
                totalPriceArr={totalPriceArr}
              />
            );
          })}
        </ul>
      </Layout>
    </>
  );
};

export default Cart;
