import axios from "axios";
import { useState } from "react";

const DeliveryInfo = (props) => {
  const {
    orderIndex,
    shippingStatus,
    shippingAddress,
    shippingExtraAddress,
    shippingRequest,
    recipientName,
    recipientPhoneNumber,
  } = props.order;

  const [newShippingAddress, setNewShippingAddress] = useState(shippingAddress);
  const [newShippingExtraAddress, setNewShippingExtraAddress] =
    useState(shippingExtraAddress);
  const [newRecipientPhoneNumber, setNewRecipientPhoneNumber] =
    useState(recipientPhoneNumber);
  const [billingNum, setBillingNum] = useState(
    shippingStatus === "배송중" || shippingStatus === "배송완료"
      ? 2342442143
      : ""
  );

  const [isAddressForm, setIsAddressForm] = useState(false);
  const [isBillingNumForm, setIsBillingNumForm] = useState(false);
  const [isPhoneNumberForm, setIsPhoneNumberForm] = useState(false);

  const toggleFormHandler = (e) => {
    if (e.target.id === "addressForm") {
      setIsAddressForm(true);
    }
    if (e.target.id === "billingNum") {
      setIsBillingNumForm(true);
    }
    if (e.target.id === "phoneNumber") {
      setIsPhoneNumberForm(true);
    }
  };

  const shippingAddressOnChangeHandler = (e) => {
    setNewShippingAddress(e.target.value);
  };

  const shippingAddressExtraOnChangeHandler = (e) => {
    setNewShippingExtraAddress(e.target.value);
  };

  const phoneNumberChangeHandler = (e) => {
    setNewRecipientPhoneNumber(e.target.value);
  };

  const billingNumChangeHandler = (e) => {
    setBillingNum(e.target.value);
  };

  const formSubmitHandler = async (e) => {
    if (e.target.id === "addressForm") {
      const data = props.order;
      data.orderIndex = orderIndex;
      data.shippingAddress = newShippingAddress;
      data.shippingExtraAddress = newShippingExtraAddress;

      try {
        const result = await axios.patch(
          "http://34.22.85.44:5000/api/orders/information",
          {
            orderIndex,
            recipientPhoneNumber: newRecipientPhoneNumber,
          }
        );
        console.log(result);
        alert("배송주소가 수정되었습니다.");
        setIsAddressForm(false);
      } catch (error) {
        alert(`${error.message}`);
      }
    }

    if (e.target.id === "billingNum") {
      try {
        console.log(orderIndex, billingNum);
        const result = await axios.patch(
          "http://34.22.85.44:5000/api/orders/waybill",
          { orderIndex, wayBill: billingNum }
        );
        console.log(result);
        setIsBillingNumForm(false);
        alert("운송장 번호가 입력되었습니다.");
      } catch (error) {
        alert(`${error.message}`);
        return;
      }
    }

    if (e.target.id === "phoneNumber") {
      try {
        const result = await axios.patch(
          "http://34.22.85.44:5000/api/orders/information",
          {
            orderIndex,
            recipientPhoneNumber: newRecipientPhoneNumber,
          }
        );
        console.log(result);
        alert("연락처가 수정되었습니다.");
        setIsPhoneNumberForm(false);
      } catch (error) {
        alert(`${error.message}`);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <h3 className="px-4 py-2 text-lg">배송정보</h3>
      <div className="flex border-t">
        <ul className="flex flex-col border-t border-r border-color2">
          <li className="flex h-24 border-b border-color2 items-center">
            <div className="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span className="px-4">배송주소</span>
            </div>
            <div className="flex w-80 h-full items-center justify-between">
              {isAddressForm ? (
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    value={newShippingAddress}
                    className="mx-4 py-1 w-[220px] border rounded"
                    id="shippingAddress"
                    onChange={shippingAddressOnChangeHandler}
                  />
                  <input
                    type="text"
                    value={newShippingExtraAddress}
                    className="mx-4 py-1 w-[220px] border rounded"
                    id="shippingExtraAddress"
                    onChange={shippingAddressExtraOnChangeHandler}
                  />
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="px-4 max-w-[240px]">{shippingAddress}</span>
                  <span className="px-4 max-w-[240px]">
                    {shippingExtraAddress}
                  </span>
                </div>
              )}
              {shippingStatus !== "결제확인" &&
              shippingStatus !== "상품준비중" ? (
                <></>
              ) : isAddressForm ? (
                <button
                  onClick={formSubmitHandler}
                  id="addressForm"
                  className="px-3 border border-color2 h-8 mr-3 rounded text-sm"
                >
                  확인
                </button>
              ) : (
                <button
                  onClick={toggleFormHandler}
                  id="addressForm"
                  className="px-3 border border-color2 h-8 mr-3 rounded text-sm"
                >
                  변경
                </button>
              )}
            </div>
          </li>
          <li className="flex h-12 border-b border-color2 items-center">
            <div className="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span className="px-4">배송요청사항</span>
            </div>
            <div className="flex w-80 h-full items-center justify-between">
              <span className="px-4">{shippingRequest}</span>
            </div>
          </li>
          <li className="flex h-12 border-b border-color2 items-center">
            <div className="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span className="px-4">수령인</span>
            </div>
            <div className="flex w-80 h-full items-center justify-between">
              <span className="px-4">{recipientName}</span>
            </div>
          </li>
          <li className="flex h-12 border-b border-color2 items-center">
            <div className="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span className="px-4">연락처</span>
            </div>
            <div className="flex w-80 h-full items-center justify-between">
              {isPhoneNumberForm ? (
                <input
                  type="text"
                  value={newRecipientPhoneNumber}
                  className="mx-4 py-1 w-[220px] border rounded"
                  id="phoneNumber"
                  onChange={phoneNumberChangeHandler}
                />
              ) : (
                <span className="px-4">{newRecipientPhoneNumber}</span>
              )}
              {shippingStatus !== "결제확인" &&
              shippingStatus !== "상품준비중" ? (
                <></>
              ) : isPhoneNumberForm ? (
                <button
                  onClick={formSubmitHandler}
                  id="phoneNumber"
                  className="px-3 border border-color2 h-8 mr-3 rounded text-sm"
                >
                  확인
                </button>
              ) : (
                <button
                  onClick={toggleFormHandler}
                  id="phoneNumber"
                  className="px-3 border border-color2 h-8 mr-3 rounded text-sm"
                >
                  변경
                </button>
              )}
            </div>
          </li>

          <li className="flex h-12 border-b border-color2 items-center">
            <div className="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span className="px-4">운송장번호</span>
            </div>
            <div className="flex w-80 h-full items-center justify-between">
              {isBillingNumForm ? (
                <input
                  type="text"
                  value={billingNum}
                  className="mx-4 py-1 w-[220px] border rounded"
                  id="billingNum"
                  onChange={billingNumChangeHandler}
                />
              ) : (
                <span className="px-4">{billingNum}</span>
              )}
              {shippingStatus !== "배송중" ? (
                <></>
              ) : isBillingNumForm ? (
                <button
                  onClick={formSubmitHandler}
                  id="billingNum"
                  className="px-3 border border-color2 h-8 mr-3 rounded text-sm"
                >
                  확인
                </button>
              ) : (
                <button
                  onClick={toggleFormHandler}
                  className="px-3 border border-color2 h-8 mr-3 rounded text-sm"
                  id="billingNum"
                >
                  입력
                </button>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DeliveryInfo;
