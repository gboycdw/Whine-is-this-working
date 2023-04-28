import { useContext, useEffect, useState } from "react";
import CartItem from "../../../components/user/order/cart-item";
import { cartCtx, storage } from "../../../components/store/cart-context";
import { useNavigate } from "react-router-dom";
const CartPage = (props) => {
  const { cartData, setCartData } = useContext(cartCtx);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscountPrice, setTotalDiscountPrice] = useState(0);
  const totalPayPrice = totalPrice - totalDiscountPrice;

  const newArr = cartData.filter((item) => item.isChecked === true);
  const [isAllChecked, setIsAllChecked] = useState(true);
  // 전체 선택 버튼 토글 핸들러
  const checkAllHandler = () => {
    if (isAllChecked) {
      setIsAllChecked(false);
      let arr = [...cartData];
      const tempCart = arr.map((item) => ({ ...item, isChecked: true }));
      localStorage.setItem("cartData", JSON.stringify(tempCart));
      setCartData(storage("cartData"));
    } else {
      setIsAllChecked(true);
      let arr = [...cartData];
      const tempCart = arr.map((item) => ({ ...item, isChecked: false }));
      localStorage.setItem("cartData", JSON.stringify(tempCart));
      setCartData(storage("cartData"));
    }
  };

  // 전체 삭제 핸들러
  const allDeleteHandler = () => {
    if (window.confirm("전체 상품을 삭제하시겠습니까?")) {
      localStorage.setItem("cartData", JSON.stringify([]));
      setCartData(storage("cartData"));
    }
  };

  // 선택 삭제 핸들러
  const selectDeleteHandler = () => {
    let arr = [...cartData];
    const tempCart = arr.filter((item) => item.isChecked === false);
    if (window.confirm("선택 상품을 삭제하시겠습니까?")) {
      localStorage.setItem("cartData", JSON.stringify(tempCart));
      setCartData(storage("cartData"));
    }
  };

  // 총 상품금액, 총 할인금액
  // cartData가 변경될 때마다 총 상품금액, 총 할인금액 업데이트됨
  useEffect(() => {
    let totalPrice = 0;

    newArr.forEach((item) => {
      totalPrice += item.price * item.amount;
    });

    let totalDiscountPrice = 0;
    newArr.forEach((item) => {
      totalDiscountPrice += item.discountPrice * item.amount;
    });

    setTotalPrice(totalPrice);
    setTotalDiscountPrice(totalDiscountPrice);
  }, [cartData, newArr]);

  const navigate = useNavigate();
  const orderSubmitHandler = () => {
    // buyer-pay 컴포넌트에 세션스토리지를 통해 정보 넘겨줌
    const data = {
      totalPrice,
      totalDiscountPrice,
      totalPayPrice,
      cartData,
    };
    try {
      const result = sessionStorage.setItem(
        "cartToOrder",
        JSON.stringify(data)
      );
      console.log(result);
      navigate("/order");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* 장바구니 Title */}
      <div className="mb-12 ml-12 mt-[50px]">
        <h1 className="text-3xl">장바구니</h1>
      </div>

      {/* 전체선택 체크박스, 선택삭제, 전체삭제 */}
      <div
        className="flex justify-between border-b-[#E5D1D1] border-b-[2px]
        pb-[10px] text-[17px]"
      >
        {/* 전체선택 체크박스 */}
        <div>
          <input
            type="checkbox"
            id="cart"
            name="scales"
            className="mr-[20px]
              bg-gray-200 hover:bg-gray-300 cursor-pointer
              w-5 h-5 border-3 border-amber-500 focus:outline-none rounded-lg"
            onClick={checkAllHandler}
          />
          <span>전체선택</span>
        </div>
        {/* 선택삭제, 전체삭제 */}
        <div className="flex space-x-[10px]">
          <div
            className="flex justify-center content-center
            w-[80px] h-[30px] rounded-[3px] border-[#E5D1D1] border-[2px]"
            onClick={selectDeleteHandler}
          >
            <span>선택삭제</span>
          </div>
          <div
            className="flex justify-center content-center
            w-[80px] h-[30px] rounded-[3px] border-[#E5D1D1] border-[2px] cursor-pointer"
            onClick={allDeleteHandler}
          >
            <div>
              <span>전체삭제</span>
            </div>
          </div>
        </div>
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
      <div className="flex justify-center">
        <div
          className="flex w-[800px] my-[60px] justify-center 
           space-x-[70px] border-[#E5D1D1] border-[5px] py-[30px]"
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
            <span className="text-[24px] font-[600]">
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
            <span className="text-[24px] font-[600]">{totalPayPrice}원</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-[10px]">
        {/* 계속 쇼핑하기 버튼 */}
        <div className="flex justify-center">
          <div>
            <button
              type="button"
              className="w-[280px] h-[60px] rounded-[10px] 
              bg-[#E5D1D1] text-[20px] mb-[50px]"
            >
              계속 쇼핑하기
            </button>
          </div>
        </div>

        {/* 주문하기 버튼 */}
        <div className="flex justify-center">
          <div>
            <button
              onClick={orderSubmitHandler}
              type="button"
              className="w-[280px] h-[60px] rounded-[10px] 
              bg-[#7B4848] text-[20px] text-[#FFFFFF] mb-[50px]
              disabled:bg-[#e5d1d1] disabled:text-[#262626]"
            >
              주문하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
