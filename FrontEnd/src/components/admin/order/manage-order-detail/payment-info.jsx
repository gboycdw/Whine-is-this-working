const PaymentInfo = (props) => {
  const { totalPrice } = props.order;

  return (
    <div class="flex flex-col">
      <h3 class="px-4 py-2 text-lg">결제정보</h3>
      <div class="flex">
        <div class="flex flex-col">
          <div class="flex border-t border-color0 ">
            <ul class="flex flex-col border-t border-color2">
              <li class="flex h-12 border-b border-color2 items-center">
                <div class="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
                  <span class="px-4">주문금액</span>
                </div>
                <div class="flex w-80 h-full items-center">
                  <span class="px-4">{totalPrice.toLocaleString()}원</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex border-t border-color0">
            <ul class="flex flex-col border-t border-color2">
              <li class="flex h-12 border-b border-color2 items-center">
                <div class="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
                  <span class="px-4">배송비</span>
                </div>
                <div class="flex w-80 h-full items-center">
                  <span class="px-4">3,000원</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
