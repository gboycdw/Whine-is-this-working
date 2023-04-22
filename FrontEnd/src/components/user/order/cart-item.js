import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartCtx } from "../../store/cart-context";
const CartItem = (props) => {
  const {
    alcoholDegree,
    amount,
    country,
    id,
    name,
    price,
    brand,
    imgUrl,
    discountPrice,
  } = props.cart;
  const [cartAmount, setCartAmount] = useState(amount);
  const [totalPrice, setTotalPrice] = useState(price * cartAmount);
  const { cartData, setCartData } = useContext(cartCtx);
  const [totalDiscountPrice, settotalDiscountPrice] = useState(
    cartAmount * discountPrice
  );

  // 수량에 변동이 있을 경우 전체 금액 업데이트
  useEffect(() => {
    setTotalPrice(price * cartAmount);
  }, [cartAmount, price]);

  // 수량 1개 감소 핸들러
  const wineCountMinusHandler = () => {
    if (cartAmount > 1) {
      let tempAmount = cartAmount;
      setCartAmount(--tempAmount);
    }
  };

  // 수량 직접 변경 핸들러
  const inputChangeHandler = (e) => {
    setCartAmount(e.target.value);
  };

  // 수량 1개 증가 핸들러
  const wineCountPlusHandler = () => {
    let tempAmount = cartAmount;
    setCartAmount(++tempAmount);
  };

  // 카트에 담긴 수량을 localStorage에 업데이트
  useEffect(() => {
    let arr = [...cartData];
    arr.map((item) =>
      item.id === id ? { ...item, amount: cartAmount } : item
    );

    localStorage.setItem("cartData", JSON.stringify(arr));
  }, [cartAmount]);

  return (
    <li key={id} className="flex justify-between w-[1200px] py-[45px] border-b">
      <div className="flex w-[500px]">
        {/* 체크박스, 상품사진 */}
        <div className="flex">
          <input
            type="checkbox"
            id="cart"
            name="scales"
            className="mr-[20px]"
          />
          <label for="cart">
            <picture>
              {/* [if IE 9]><video style="display: none;"><![endif] */}
              <source src={imgUrl} media="(min-width:768px)" />
              {/* pc 이미지 */}
              <source src={imgUrl} media="(min-width:768px)" />
              {/* mb 이미지 */}
              <img className="h-[100px]" src={imgUrl} alt={name} />
            </picture>
          </label>
        </div>
        {/* 브랜드, 상품명 */}
        <div className="flex flex-col items-center justify-center ml-[50px]">
          <h3>
            <Link
              to="/shop/product/product_view?product_cd=03S683"
              target="_blank"
            >
              {brand}
            </Link>
          </h3>
          <h3>
            <Link
              to="/shop/product/product_view?product_cd=03S683"
              target="_blank"
            >
              {name}
            </Link>
          </h3>
        </div>
      </div>

      {/* 수량 조절 버튼 (-, 수량, +) */}
      <div className="flex mr-[200px]">
        {/* 수량 1개 감소 버튼 */}
        <button
          type="button"
          onClick={wineCountMinusHandler}
          className="w-10 border-slate-300"
        >
          -
        </button>
        {/* 수량 직접 입력 버튼 */}
        <input
          type="text"
          title="수량"
          value={cartAmount}
          className="w-10"
          onChange={inputChangeHandler}
        />
        {/* 수량 1개 증가 버튼 */}
        <button type="button" className="w-6" onClick={wineCountPlusHandler}>
          +
        </button>
      </div>

      {/* 금액 계산 (상품금액, 할인금액, 총 결제금액) */}
      <div className="flex items-stretch w-1/3 justify-between">
        {/* 금액 계산 */}
        <div className="flex flex-col items-center justify-center">
          <span>상품금액</span>
          <span>{totalPrice}</span>
        </div>
        {/* 할인금액 */}
        <div className="flex flex-col items-center justify-center">
          <span>할인금액</span>
          <span>{discountPrice * cartAmount}</span>
        </div>
        {/* 총 결제금액 */}
        <div className="flex flex-col items-center justify-center">
          <span>총 결제금액</span>
          <span>{totalPrice - totalDiscountPrice}</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
