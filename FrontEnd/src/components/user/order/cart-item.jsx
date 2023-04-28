import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartCtx, storage } from "../../store/cart-context";
const CartItem = (props) => {
  const { amount, _id, name, price, brand, imgUrl, discountPrice, isChecked } =
    props.cart;
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
    const tempCart = arr.map((item) =>
      item._id === _id ? { ...item, amount: cartAmount } : item
    );
    settotalDiscountPrice(cartAmount * discountPrice);
    localStorage.setItem("cartData", JSON.stringify(tempCart));

    // localStorage에 반영된 내용을 가져와서 CartData에 업데이트함
    setCartData(storage("cartData"));
  }, [cartAmount, _id, cartData, discountPrice, setCartData]);

  // 체크 누르면 토글 역할 하게 해주는 핸들러
  const checkStatusHandler = () => {
    if (isChecked) {
      let arr = [...cartData];
      const tempCart = arr.map((item) =>
        item._id === _id ? { ...item, isChecked: false } : item
      );
      localStorage.setItem("cartData", JSON.stringify(tempCart));

      // localStorage에 반영된 내용을 가져와서 CartData에 업데이트함
      setCartData(storage("cartData"));
    } else if (!isChecked) {
      let arr = [...cartData];
      const tempCart = arr.map((item) =>
        item._id === _id ? { ...item, isChecked: true } : item
      );
      localStorage.setItem("cartData", JSON.stringify(tempCart));

      // localStorage에 반영된 내용을 가져와서 CartData에 업데이트함
      setCartData(storage("cartData"));
    }
  };
  return (
    <li
      key={_id}
      className="flex justify-between w-[1200px] py-[45px] border-b-[#E5D1D1] border-b-[2px]"
    >
      <div className="flex w-[500px]">
        {/* 체크박스, 상품사진 */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="cart"
            name="scales"
            className="mr-[20px]
            bg-gray-200 hover:bg-gray-300 cursor-pointer
            w-5 h-5 border-3 border-amber-500 focus:outline-none rounded-lg"
            onClick={checkStatusHandler}
            checked={isChecked}
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
      <div className="flex mr-[200px] items-center">
        {/* 수량 1개 감소 버튼 */}
        <button
          type="button"
          onClick={wineCountMinusHandler}
          className="w-7 h-7 text-[#FFFFFF] mr-[20px] bg-[#7B4848] rounded-[5px]"
        >
          -
        </button>

        {/* 수량 직접 입력 버튼 */}
        <input
          type="text"
          title="수량"
          value={cartAmount}
          className="w-7 h-7"
          onChange={inputChangeHandler}
        />

        {/* 수량 1개 증가 버튼 */}
        <button
          type="button"
          className="w-7 h-7 text-[#FFFFFF] bg-[#7B4848] rounded-[5px]"
          onClick={wineCountPlusHandler}
        >
          +
        </button>
      </div>

      {/* 금액 계산 (상품금액, 할인금액, 총 결제금액) */}
      <div className="flex items-stretch w-1/3 justify-between">
        {/* 금액 계산 */}
        <div className="flex flex-col items-center justify-center">
          <span>상품금액</span>
          <span className="text-[20px]">₩ {totalPrice}</span>
        </div>
        {/* 할인금액 */}
        <div className="flex flex-col items-center justify-center">
          <span>할인금액</span>
          <span className="text-[20px]">₩ {totalDiscountPrice}</span>
        </div>
        {/* 총 결제금액 */}
        <div className="flex flex-col items-center justify-center">
          <span>총 결제금액</span>
          <span className="text-[20px]">
            ₩ {totalPrice - totalDiscountPrice}
          </span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
