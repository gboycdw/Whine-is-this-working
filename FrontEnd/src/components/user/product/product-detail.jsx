import { useContext, useEffect, useState } from "react";
import { cartCtx } from "../../store/cart-context";
import { Link, useNavigate } from "react-router-dom";
import { authCtx } from "../../store/auth-context";
import { useQuery } from "react-query";
import { getUserDataByToken } from "../../../api/api-auth";
import { useRef } from "react";

const ProductDetail = (props) => {
  // props로 wine 객체를 받아옴
  const {
    _id,
    name,
    brand,
    tags,
    imgUrl,
    price,
    discountPrice,
    features,
    region,
    info,
    saleState,
  } = props.product;
  const { alcoholDegree, body, acidity, sugar, tannic } = features;
  const amountRef = useRef();

  const { cartData, setCartData } = useContext(cartCtx);
  const { data } = useQuery(["auth"], async () => await getUserDataByToken());
  const [amount, setAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(
    (price - discountPrice) * amount
  );
  const [isSoldOut] = useState(saleState === "품절" ? true : false);

  useEffect(() => {
    setTotalPrice((price - discountPrice) * amount);
  }, [amount, price, discountPrice]);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  // 마이너스 버튼 핸들러
  const wineCountMinus = () => {
    if (amountRef.current.value < 2) {
      return;
    }
    // if (e.target.value < 2) {
    //   return;
    // }
    let a = amount;
    setAmount(--a);
  };

  // 플러스 버튼 핸들러
  const wineCountAdd = () => {
    let a = amount;
    setAmount(++a);
  };

  // input에 숫자를 입력시 제품 개수 업데이트 해주는 핸들러
  const inputChangeHandler = (e) => {
    if (e.target.value < 1 || e.target.value > 99) {
      return;
    }
    setAmount(e.target.value);
  };

  // 장바구니 버튼 핸들러
  // 장바구니 버튼 클릭시 json data를 총가격을 추가하여 만들고 api로 보냄
  const basketButtonHandler = () => {
    const selectedData = props.product;
    selectedData.amount = amount;
    selectedData.isChecked = true;
    const isAdded = cartData.find((data) => data._id === selectedData._id);
    const copiedCartData = [...cartData];
    if (isAdded) {
      alert("이미 같은 제품이 장바구니에 있습니다.");
      return;
    }
    copiedCartData.push(selectedData);
    // alert("장바구니에 상품이 추가 되었습니다.");
    if (
      window.confirm("장바구니에 추가되었습니다🍷 장바구니로 이동할까요?😃")
    ) {
      navigate("/cart");
    }
    setCartData(copiedCartData);
    setAmount(1); //개수 초기화
  };

  // 바로 구매 버튼 핸들러
  // json data를 총가격을 추가하여 만들고 api로 보냄
  const navigate = useNavigate();
  const buyButtonHandler = () => {
    if (!data) {
      if (window.confirm("상품을 주문하시기전에 로그인 하시겠습니까?🥕")) {
        navigate("/login");
        return;
      }
    }
    let newCartData = {};
    const selectedData = props.product;
    selectedData.amount = amount;
    selectedData.isChecked = true;
    newCartData.totalPrice = price * amount;
    newCartData.totalDiscountPrice = discountPrice * amount;
    newCartData.totalPayPrice = (price - discountPrice) * amount;
    sessionStorage.setItem("cartToOrder", JSON.stringify(newCartData));
    setAmount(1); //개수 초기화
    navigate("/order");
  };

  // 바디, 산도, 당도, 탄닌 지수 막대바 시각화 함수
  const detailStickBarHandler = (feature) => {
    let scoreArr = [];

    // 특정 지수만큼의 빨간 바
    for (let i = 0; i < parseInt(feature[1]); i++) {
      if (i === 0) {
        scoreArr.push(
          <div className=" w-[37px] h-[13px] bg-[#C47474] rounded-l-[10px]"></div>
        );
      } else if (i === parseInt(feature[1]) - 1 && i === 4) {
        scoreArr.push(
          <div className=" w-[37px] h-[13px] bg-[#C47474] rounded-r-[10px]"></div>
        );
      } else {
        scoreArr.push(<div className=" w-[37px] h-[13px] bg-[#C47474]"></div>);
      }
    }

    // (5-특정 지수)만큼의 회색 바 0, 1
    for (let i = 0; i < 5 - parseInt(feature[1]); i++) {
      if (i === 4 - parseInt(feature[1])) {
        scoreArr.push(
          <div className=" w-[37px] h-[13px] bg-[#DEDEDE] opacity-90 rounded-r-[10px]"></div>
        );
      } else {
        scoreArr.push(
          <div className=" w-[37px] h-[13px] bg-[#DEDEDE] opacity-90"></div>
        );
      }
    }
    return scoreArr;
  };

  return (
    <>
      <div className="flex flex-col m-auto w-[800px] py-16">
        {/* 상단) 제품 이미지, 제품 설명, 제품 가격 정보 */}
        <div className="flex justify-center">
          <div
            className="flex 
       items-center justify-center content-center w-full"
          >
            {/* 이미지 - 제품 설명 가로 배치를 위한 div flex */}
            <div className="flex justify-between gap-12 items-center">
              {/* 와인 이미지 + 배경 */}
              <div className="flex h-[480px] w-[480px] mr-[10px] bg-[#F6EEEE] items-center justify-center">
                <img
                  className="max-h-[420px] max-w-[420px]"
                  src={imgUrl}
                  alt={"와인이미지"}
                ></img>
              </div>

              {/* all) 와인 정보 (이름, 도수, 영어이름, 브랜드, 
                태그, 가격, 바디, 산도, 당도, 탄닌) */}
              <div className="flex flex-col m-[30px] mt-[40px] w-[300px]">
                {/* 1. 와인 이름 + 도수 */}
                <div className="flex space-x-[10px] items-center mb-[5px] mt-[20px]">
                  <span className="text-[30px] font-[600]">{name}</span>
                  <span className="text-[18px]">{alcoholDegree}%</span>
                </div>

                {/* 2. 와인 원산지 */}
                <div className="flex">
                  <span className="text-[16px] mb-[5px] font-[600]">
                    원산지&nbsp;
                  </span>
                  <span className="text-[16px] mb-[5px]">{region}</span>
                </div>

                {/* 3. 와인 브랜드 */}
                <div className="flex">
                  <span className="text-[16px] mb-[10px] font-[600]">
                    브랜드&nbsp;
                  </span>
                  <span className="text-[16px] mb-[10px]">{brand}</span>
                </div>

                {/* 4. 와인 태그 */}
                <div className="flex space-x-[10px] mb-[10px]">
                  {tags.map((tag) => {
                    return (
                      <div
                        className="flex h-[25px] bg-[#E5D1D1] 
                    rounded-[5px] items-center justify-center"
                      >
                        <span>&nbsp;&nbsp;{tag}&nbsp;&nbsp;</span>
                      </div>
                    );
                  })}
                </div>

                {/* 6. 바디, 산도, 당도, 탄닌 */}
                <div className="flex flex-col space-y-[5px]">
                  {/* 바디 */}
                  <div className="flex items-center">
                    <span className="text-[18px] font-[600] mr-[20px]">
                      바디
                    </span>
                    <div className="flex items-center">
                      {detailStickBarHandler(body)}
                    </div>
                    <div className="ml-[15px]">{body[1]}</div>
                  </div>
                  {/* 산도 */}
                  <div className="flex items-center">
                    <span className="text-[18px] font-[600] mr-[20px]">
                      산도
                    </span>
                    <div className="flex items-center">
                      {detailStickBarHandler(acidity)}
                    </div>
                    <div className="ml-[15px]">{acidity[1]}</div>
                  </div>
                  {/* 당도 */}
                  <div className="flex items-center">
                    <span className="text-[18px] font-[600] mr-[20px]">
                      당도
                    </span>
                    <div className="flex items-center">
                      {detailStickBarHandler(sugar)}
                    </div>
                    <div className="ml-[15px]">{sugar[1]}</div>
                  </div>
                  {/* 탄닌 */}
                  <div className="flex items-center">
                    <span className="text-[18px] font-[600] mr-[20px]">
                      탄닌
                    </span>
                    <div className="flex items-center">
                      {detailStickBarHandler(tannic)}
                    </div>
                    <div className="ml-[15px]">{tannic[1]}</div>
                  </div>
                </div>

                {/* 5. 가격 */}
                <div className="flex items-center my-[10px] gap-1">
                  {discountPrice === price ? (
                    <div className="flex">
                      <span className="text-[21px] font-[600]">{price}원</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex">
                        <span className="text-[21px] font-[600]">
                          {(price - discountPrice).toLocaleString()}원
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-[16px] font-[400 line-through">
                          {price.toLocaleString()}원
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* 수량 조절 버튼 + 총 금액 */}
                <div
                  className="flex items-center bg-[#F6EEEE] h-[70px] px-[15px]
              rounded-[10px] justify-between mb-[5px] mt-[10px]"
                >
                  {/* 수량 조절 버튼 (-, 수량, +) */}
                  <div>
                    {/* 수량 1개 감소 버튼 */}
                    <button
                      onClick={wineCountMinus}
                      className="w-7 h-7 text-[#FFFFFF] bg-[#B36767] rounded-[5px]"
                    >
                      -
                    </button>

                    {/* 수량 직접 입력 버튼 */}
                    <input
                      type="number"
                      onChange={inputChangeHandler}
                      className="w-[35px] text-center bg-[#F6EEEE] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      ref={amountRef}
                      value={amount}
                    />

                    {/* 수량 1개 증가 버튼 */}
                    <button
                      onClick={wineCountAdd}
                      className="w-7 h-7 text-[#FFFFFF] bg-[#B36767] rounded-[5px]"
                    >
                      +
                    </button>
                  </div>
                  {/* 총 가격 계산 */}
                  <div>
                    <span className="text-[18px]">
                      {/* {amount} x {price.toLocaleString()}원 = 총 결제금액:{" "} */}
                      총 {totalPrice.toLocaleString()}원
                    </span>
                  </div>
                </div>

                {/* 장바구니, 바로구매 버튼 */}
                {isSoldOut ? (
                  <div className="flex mt-[10px] space-x-[10px]">
                    <button
                      className="w-full h-[50px] rounded-[10px] 
              border-[#922F2F] border-[2px] text-[18px] text-[#922F2F] mb-[20px]"
                      onClick={basketButtonHandler}
                      disabled={isSoldOut}
                    >
                      품절
                    </button>
                  </div>
                ) : (
                  <div className="flex mt-[10px] space-x-[10px]">
                    <button
                      className="w-[150px] h-[50px] rounded-[10px] 
              border-[#922F2F] border-[2px] text-[18px] text-[#922F2F] mb-[20px]"
                      onClick={basketButtonHandler}
                    >
                      장바구니
                    </button>
                    <button
                      className="w-[150px] h-[50px] rounded-[10px] 
               bg-[#922F2F] text-[18px] text-[#FFFFFF] mb-[20px] ${}"
                      onClick={buyButtonHandler}
                    >
                      바로구매
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* 하단) 제품 설명 이미지 */}
        <div
          dangerouslySetInnerHTML={{ __html: info }}
          className="flex flex-col m-auto w-full min-h-[300px] mb-[20px] mb-40"
        ></div>
      </div>
    </>
  );
};

export default ProductDetail;
