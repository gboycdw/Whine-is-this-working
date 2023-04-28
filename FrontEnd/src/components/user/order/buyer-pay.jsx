const BuyerPay = (props) => {
  const point = 0;
  const deliveryCharge = 2500;
  return (
    <>
      <div className="flex flex-col items-center mb-[25px]">
        {/* 주문 금액 Title */}
        <div className="flex w-[650px] pb-[10px] mb-[25px] border-b-[#E5D1D1] border-b-[4px]">
          <span className="text-[22px] font-[600]">주문 금액</span>
        </div>

        <ul className="flex flex-col w-[650px]">
          {/* 총 상품가격 */}
          <li className="flex mb-[25px]">
            <span className="text-[16px] mb-[5px] w-[120px]">총 상품가격</span>
            <span>{props.totalPrice}원</span>
          </li>

          {/* 포인트 */}
          <li className="flex items-center mb-[25px]">
            <div className="w-[120px]">
              <span className="text-[16px] mr-[10px] w-[60px] mr-[20px]">
                포인트
              </span>
            </div>
            <input
              type="number"
              name="point"
              value={point}
              className="p-[10px] border-[#e5d1d1] border-[2px] w-[100px] h-[40px] 
              focus:outline-[#AA7373] focus:outline-[2px]"
            ></input>
            <input
              type="checkbox"
              className="mr-[10px] ml-[15px]
              bg-gray-200 hover:bg-gray-300 cursor-pointer
              w-6 h-6 border-3 border-amber-500 focus:outline-none rounded-lg"
              // onClick={checkAllHandler}
            />
            <span>전액사용</span>
          </li>

          {/* 결제수단 */}
          <li className="flex items-center mb-[25px]">
            <div className="w-[120px]">
              <span className="text-[16px] mr-[10px] w-[60px] mr-[20px]">
                결제수단
              </span>
            </div>
            <button
              className="flex justify-center items-center w-[70px] 
            border-[#E5D1D1] border-[2px] rounded-[5px] h-[35px] mr-[10px]"
            >
              신용카드
            </button>
            <button
              className="flex justify-center items-center w-[90px] 
            border-[#E5D1D1] border-[2px] rounded-[5px] h-[35px] mr-[10px]
            focus:bg-[#7B4848] focus:border-[2px] focus:border-[#7B4848] 
            focus:text-[#FFFFFF]"
            >
              무통장입금
            </button>
            <button
              className="flex justify-center items-center w-[90px] 
            border-[#E5D1D1] border-[2px] rounded-[5px] h-[35px] mr-[10px]"
            >
              휴대폰결제
            </button>
          </li>

          {/* 결제정보 */}
          <li className="flex flex-col mb-[40px]">
            <div className="w-[120px] mb-[5px]">
              <span className="text-[16px] w-[60px] mr-[20px]">결제정보</span>
            </div>

            {/* 총 구매금액, 할인금액, 포인트, 배송비, 총 결제금액, 적립 예정 포인트 */}
            <div className="flex flex-col border-[#E5D1D1] border-[2px] rounded-[5px] py-[10px]">
              {/* 총 구매금액 */}
              <div className="flex items-center place-content-between h-[35px]">
                <span className="ml-[20px]">총 구매금액</span>
                <span className="text-[18px] font-[600] mr-[20px]">
                  {props.totalPrice}원
                </span>
              </div>

              {/* 할인금액 */}
              <div className="flex items-center place-content-between h-[35px]">
                <span className="ml-[20px]">할인금액</span>
                <span className="text-[18px] font-[600] mr-[20px]">
                  - {props.totalDiscountPrice}원
                </span>
              </div>

              {/* 포인트 사용 */}
              <div className="flex items-center place-content-between h-[35px]">
                <span className="ml-[20px]">포인트 사용</span>
                <span className="text-[18px] font-[600] mr-[20px]">
                  - {point}원
                </span>
              </div>

              {/* 배송비 */}
              <div className="flex items-center place-content-between h-[35px] mb-[10px]">
                <span className="ml-[20px]">배송비</span>
                <span className="text-[18px] font-[600] mr-[20px]">
                  + {deliveryCharge}원
                </span>
              </div>

              {/* 총 결제금액 */}
              <div
                className="flex items-center place-content-between h-[35px]
                border-y-[2px] border-y-[#E5D1D1] py-[25px]"
              >
                <span className="ml-[20px]">총 결제금액</span>
                <span className="text-[18px] font-[600] mr-[20px]">
                  {props.totalPrice -
                    props.totalDiscountPrice -
                    point +
                    deliveryCharge}
                  원
                </span>
              </div>

              {/* 적립 예정 포인트 */}
              <div className="flex items-center place-content-between h-[35px] pt-[10px]">
                <span className="ml-[20px]">적립 예정 포인트 (3% 적립)</span>
                <span className="text-[16px] font-[600] mr-[20px]">
                  +{" "}
                  {(props.totalPrice -
                    props.totalDiscountPrice -
                    point +
                    deliveryCharge) *
                    0.03}
                  원
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BuyerPay;
