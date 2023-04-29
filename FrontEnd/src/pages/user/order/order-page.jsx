import { useNavigate } from "react-router-dom";
import BuyerInfo from "../../../components/user/order/buyer-info";
import BuyerPay from "../../../components/user/order/buyer-pay";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { getUserDataByToken } from "../../../api/api-auth";
import { useEffect } from "react";

const OrderPage = () => {
  const { data: authData } = useQuery("auth", () => getUserDataByToken());
  // 주문 취소시 이전 페이지로 이동시켜주는 핸들러
  const navigate = useNavigate();
  const orderCancelHandler = () => {
    navigate("../");
  };

  useEffect(() => {
    setBuyer(authData?.name);
    setBuyerEmail(authData?.email);
    setBuyerPhoneNumber(authData?.phoneNumber);
  }, [authData]);

  const [buyer, setBuyer] = useState(authData?.name);
  const [buyerEmail, setBuyerEmail] = useState(authData?.email);
  const [buyerPhoneNumber, setBuyerPhoneNumber] = useState(
    authData?.phoneNumber
  );
  const [recipientName, setRecipientName] = useState("");
  const [recipientPhoneNumber, setRecipientPhoneNumber] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [shippingExtraAddress, setShippingExtraAddress] = useState("");
  const [shippingRequest, setShippingRequest] = useState("");
  const queryClient = useQueryClient();

  // 장바구니에서 세션스토리지에 저장한 데이터를 불러오는 함수

  const { data: orderData } = useQuery("orderData", () =>
    JSON.parse(sessionStorage.getItem("cartToOrder"))
  );

  console.log(orderData);

  const totalPrice = orderData?.totalPrice;
  const totalDiscountPrice = orderData?.totalDiscountPrice;
  const orderList = orderData?.checkedCartData?.map((item) => {
    return { id: item._id, amount: item.amount };
  });

  console.log(orderList);

  // const orderList = [];

  // cartData를 돌면서 "product":_id, "amount":amount 형식으로 객체 생성

  const shippingStatus = "상품준비중";
  const orderIndex = "0";
  const deliveryFee = 2500;
  const wayBill = "0";

  console.log(orderList);

  const orderCompleteHandler = async (e) => {
    e.preventDefault();
    const orderInfo = {
      buyer,
      buyerEmail,
      buyerPhoneNumber,
      recipientName,
      recipientPhoneNumber,
      shippingAddress,
      shippingExtraAddress,
      shippingRequest,
      shippingStatus,
      orderList,
      totalPayPrice: totalPrice - totalDiscountPrice,
      orderIndex,
      deliveryFee,
      wayBill,
    };

    if (
      buyer === "" ||
      buyerEmail === "" ||
      buyerPhoneNumber === "" ||
      recipientName === "" ||
      recipientPhoneNumber === "" ||
      shippingAddress === "" ||
      shippingRequest === "" ||
      shippingStatus === ""
    ) {
      alert("주문정보들을 모두 입력해주세요.");
      return;
    }
    console.log(buyer);
    try {
      const result = await axios.post("http://34.22.85.44:5000/api/orders", {
        buyer,
        buyerEmail,
        buyerPhoneNumber,
        recipientName,
        recipientPhoneNumber,
        shippingAddress,
        shippingExtraAddress,
        shippingRequest,
        shippingStatus,
        orderList,
        totalPayPrice: totalPrice - totalDiscountPrice,
        orderIndex,
        deliveryFee,
        wayBill,
      });
      console.log(result);
      localStorage.removeItem("cartData");
      sessionStorage.removeItem("cartToOrder");
      queryClient.invalidateQueries("orders");
      navigate("/ordercomplete");
      window.scrollTo(0, 0);
    } catch (error) {
      alert(`${error.message}`);
      return;
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {/* 주문/결제 Title */}
        <div className="flex items-center mb-[20px] mt-[50px] mb-[50px]">
          <h1 className="text-[32px] font-[600]">주문/결제</h1>
        </div>

        {/* 주문자 정보, 배송 정보 */}
        {/* 자식 요소에서 가져와서 status 업데이트 */}
        <BuyerInfo
          buyer={buyer}
          setBuyer={setBuyer}
          buyerEmail={buyerEmail}
          setBuyerEmail={setBuyerEmail}
          buyerPhoneNumber={buyerPhoneNumber}
          setBuyerPhoneNumber={setBuyerPhoneNumber}
          recipientName={recipientName}
          setRecipientName={setRecipientName}
          recipientPhoneNumber={recipientPhoneNumber}
          setRecipientPhoneNumber={setRecipientPhoneNumber}
          shippingAddress={shippingAddress}
          setShippingAddress={setShippingAddress}
          zonecode={zonecode}
          setZonecode={setZonecode}
          shippingExtraAddress={shippingExtraAddress}
          setShippingExtraAddress={setShippingExtraAddress}
          shippingRequest={shippingRequest}
          setShippingRequest={setShippingRequest}
        />

        {/* 결제 금액 정보 */}
        <BuyerPay
          totalPrice={totalPrice}
          totalDiscountPrice={totalDiscountPrice}
        />

        {/* 취소, 주문하기 버튼 */}
        <div className="flex space-x-[15px]">
          {/* 취소 */}
          <div className="mb-[100px]">
            <button
              type="button"
              className="w-[200px] h-[60px] rounded-[10px] 
                bg-[#E5D1D1] text-[20px]"
              onClick={orderCancelHandler}
            >
              취소
            </button>
          </div>
          {/* 주문하기 */}
          <div className="mb-[100px]">
            <button
              type="button"
              className="w-[200px] h-[60px] rounded-[10px] 
      bg-[#7B4848] text-[20px] text-[#FFFFFF]"
              onClick={orderCompleteHandler}
            >
              주문하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
