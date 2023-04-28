import { useState } from "react";
import { useQuery } from "react-query";
import { getUserDataByToken } from "../../../api/api-auth";
import PopupDom from "../my-page-component/post-popup/popup-dom";
import OrderPostCode from "./order-post-code";

// 주문자 정보, 배송 정보
const BuyerInfo = (props) => {
  // 주문자 이름 입력값 업데이트 핸들러

  console.log("props.setZonecode", props.setZonecode);
  const buyerInputHandler = (e) => {
    props.setBuyer(e.target.value);
  };

  // 주문자 이메일 입력값 업데이트 핸들러
  const buyerEmailInputHandler = (e) => {
    props.setBuyerEmail(e.target.value);
  };

  // 연락처 입력값 업데이트 핸들러
  const buyerPhoneNumberInputHandler = (e) => {
    const val = e.target.value;
    if (val.length > 11) {
      // tel 길이 11이하로
      alert(` 11자리 이하로 입력하세요. `);
      props.setBuyerPhoneNumber(""); //buyerPhoneNumber 초기화
      return;
    }
    if (isNaN(Number(val))) {
      // 숫자 입력 확인
      alert(` '-'없이 숫자만 입력해 주세요.`);
      props.setBuyerPhoneNumber(""); //buyerPhoneNumber 초기화
      return;
    }
    props.setBuyerPhoneNumber(e.target.value);
  };

  // 수령인 입력값 업데이트 핸들러
  const recipientNameInputHandler = (e) => {
    props.setRecipientName(e.target.value);
  };

  // 수령인 전화번호 입력값 업데이트 핸들러
  const recipientPhoneNumberInputHandler = (e) => {
    const val = e.target.value;
    console.log("val", val);
    if (val.length > 11) {
      // tel 길이 11이하로
      alert(` 11자리 이하로 입력하세요. `);
      props.setRecipientPhoneNumber(""); //RecipientPhoneNumber 초기화
      return;
    }
    if (isNaN(Number(val))) {
      // 숫자 입력 확인
      alert(` '-'없이 숫자만 입력해 주세요.`);
      props.setRecipientPhoneNumber(""); //RecipientPhoneNumber 초기화
      return;
    }
    props.setRecipientPhoneNumber(e.target.value);
  };

  // 상세 주소 입력값 업데이트 핸들러
  const shippingExtraAddressInputHandler = (e) => {
    props.setShippingExtraAddress(e.target.value);
  };

  // 배송 메시지 업데이트 핸들러
  const shippingRequestInputHandler = (e) => {
    props.setShippingRequest(e.target.value);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };
  return (
    <>
      <div className="flex flex-col items-center mb-[25px]">
        {/* 주문자 정보 (이름, 이메일, 연락처) */}
        <div className="mb-[30px]">
          <div className="flex w-[650px] pb-[10px] mb-[25px] border-b-[#E5D1D1] border-b-[4px]">
            <span className="text-[22px] font-[600]">주문자 정보</span>
          </div>
          <ul className="flex flex-col">
            {/* 주문자 이름 */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">이름</span>
              <input
                type="text"
                name="buyer"
                placeholder="주문자 이름을 입력해주세요"
                onChange={buyerInputHandler}
                value={props.buyer}
                className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[650px] h-[45px] mb-[25px]
              focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </li>

            {/* 주문자 이메일 */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">이메일</span>
              <input
                type="email"
                name="buyerEmail"
                placeholder="주문자 이메일을 입력해주세요"
                value={props.buyerEmail}
                onChange={buyerEmailInputHandler}
                className="p-[10px] border-[#e5d1d1] border-[2px] 
                w-[650px] h-[45px] mb-[25px]
                focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </li>

            {/* 주문자 연락처 */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">연락처</span>
              <input
                type="tel"
                name="buyerPhoneNumber"
                placeholder="띄어쓰기 없이 입력해주세요 (ex. 01012341234)"
                onChange={buyerPhoneNumberInputHandler}
                value={props.buyerPhoneNumber}
                className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[650px] h-[45px] mb-[25px]
              focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </li>
          </ul>
        </div>

        {/* 배송 정보 (이름, 연락처, 배송지, 요청사항) */}
        <div>
          <div className="flex w-[650px] pb-[10px] mb-[25px] border-b-[#E5D1D1] border-b-[4px]">
            <span className="text-[22px] font-[600]">배송 정보</span>
          </div>
          <ul className="flex flex-col">
            {/* 수령인 이름 */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">받는 사람</span>
              <input
                type="text"
                name="recipientName"
                placeholder="수령인 이름을 입력해주세요"
                onChange={recipientNameInputHandler}
                value={props.recipientName}
                className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[650px] h-[45px] mb-[25px]
              focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </li>

            {/* 수령인 연락처 */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">연락처</span>
              <input
                type="tel"
                name="recipientPhoneNumber"
                placeholder="띄어쓰기 없이 입력해주세요 (ex. 01012341234)"
                onChange={recipientPhoneNumberInputHandler}
                value={props.recipientPhoneNumber}
                className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[650px] h-[45px] mb-[25px]
              focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </li>

            {/* 배송지 (우편번호 찾기) */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">배송지</span>

              {/* 우편번호 찾기로 찾은 주소가 들어가는 칸 */}
              <div className="flex">
                <p
                  class="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[540px] h-[45px] mb-[25px] mr-[10px]
              focus:outline-[#AA7373] focus:outline-[2px]"
                >
                  {props.shippingAddress}
                </p>
                <button
                  class="bg-[#7B4848] rounded-[10px] w-[100px] h-[45px] text-[#FFFFFF]"
                  type="button"
                  onClick={openPostCode}
                >
                  우편번호 찾기
                </button>
              </div>
              <div id="popupDom">
                {isPopupOpen && ( // 클릭해서 true면 팝업 띄움.
                  <PopupDom>
                    <OrderPostCode
                      onClose={closePostCode} //팝업닫음.
                      setFullAddress={props.setShippingAddress} //받아온 data.address를 address에 setAddress로 설정.
                      setFullZonecode={props.setZonecode}
                    />
                  </PopupDom>
                )}
              </div>
            </li>

            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">우편번호</span>

              {/* 우편번호 찾기로 찾은 우편번호가 들어가는 칸 */}
              <div className="flex">
                <p
                  class="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[150px] h-[45px] mb-[25px] mr-[10px]
              focus:outline-[#AA7373] focus:outline-[2px]"
                >
                  {props.zonecode}
                </p>
              </div>
            </li>
            {/* 상세주소 */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">상세주소</span>
              <input
                type="text"
                name="shippingExtraAddress"
                placeholder="상세주소를 입력해주세요"
                onChange={shippingExtraAddressInputHandler}
                value={props.shippingExtraAddress}
                className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[650px] h-[45px] mb-[25px]
              focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </li>

            {/* 배송 요청사항 */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">요청사항</span>
              <input
                type="text"
                name="shippingRequest"
                placeholder="배송 요청사항을 입력해주세요"
                onChange={shippingRequestInputHandler}
                value={props.shippingRequest}
                className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[650px] h-[45px] mb-[25px]
              focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BuyerInfo;
