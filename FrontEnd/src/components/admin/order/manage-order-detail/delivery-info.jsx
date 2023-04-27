const DeliveryInfo = (props) => {
  const {
    shippingAddress,
    shippingRequest,
    recipientName,
    recipientPhoneNumber,
  } = props.order;

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
              <span class="px-4">{shippingAddress}</span>
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
              <span class="px-4">{shippingRequest}</span>
            </div>
          </li>
          <li class="flex h-12 border-b border-color2 items-center">
            <div class="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span class="px-4">수령인</span>
            </div>
            <div class="flex w-80 h-full items-center justify-between">
              <span class="px-4">{recipientName}</span>
            </div>
          </li>
          <li class="flex h-12 border-b border-color2 items-center">
            <div class="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span class="px-4">연락처</span>
            </div>
            <div class="flex w-80 h-full items-center justify-between">
              <span class="px-4">{recipientPhoneNumber}</span>
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
              <span class="px-4"></span>
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
