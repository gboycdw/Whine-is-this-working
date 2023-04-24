const data1 = [
  {
    _id: "6446576573fdaba813105454",
    productList: ["싸고맛있는와인"],
    priceList: [10000],
    totalPrice: 0,
    orderIndex: "20230424lqqsqX",
    buyer: "신민석",
    buyerEmail: "shinmstest@gmail.com",
    buyerPhoneNumber: "010-5555-4444",
    recipientName: "신민석",
    recipientPhoneNumber: "010-1234-5787",
    shippingAddress: "서울특별시 양천구",
    shippingRequest: "안전하게 배송해주세요",
    shippingStatus: "배송 준비중",
    createdAt: "2023-04-24T10:18:13.659Z",
    updatedAt: "2023-04-24T10:18:13.679Z",
    __v: 0,
  },
];

const DeliveryInfo = (props) => {
  return (
    <div class="flex flex-col">
      <h3 class="px-4 py-2 text-lg">배송정보</h3>
      <div class="flex border-t">
        <ul class="flex flex-col border-t border-r border-color2">
          <li class="flex h-24 border-b border-color2 items-center">
            <div class="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span class="px-4">배송주소</span>
            </div>
            <div class="flex w-80 h-full items-center justify-between">
              <span class="px-4">서울시 마포구 마포대로 1길-32</span>
              <button class="px-3 border border-color2 h-8 mr-3 rounded text-sm">
                변경
              </button>
            </div>
          </li>
          <li class="flex h-12 border-b border-color2 items-center">
            <div class="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span class="px-4">배송요청사항</span>
            </div>
            <div class="flex w-80 h-full items-center justify-between">
              <span class="px-4">부재시 경비실에 맡겨주세요.</span>
            </div>
          </li>
          <li class="flex h-12 border-b border-color2 items-center">
            <div class="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span class="px-4">수령인</span>
            </div>
            <div class="flex w-80 h-full items-center justify-between">
              <span class="px-4">장윤수</span>
            </div>
          </li>
          <li class="flex h-12 border-b border-color2 items-center">
            <div class="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span class="px-4">연락처</span>
            </div>
            <div class="flex w-80 h-full items-center justify-between">
              <span class="px-4">0103761****</span>
              <button class="px-3 border border-color2 h-8 mr-3 rounded text-sm">
                변경
              </button>
            </div>
          </li>

          <li class="flex h-12 border-b border-color2 items-center">
            <div class="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span class="px-4">운송장번호</span>
            </div>
            <div class="flex w-80 h-full items-center justify-between">
              <span class="px-4">12394892</span>
              <button class="px-3 border border-color2 h-8 mr-3 rounded text-sm">
                변경
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DeliveryInfo;
