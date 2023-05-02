const PaymentInfo = (props) => {
  const { totalPayPrice } = props.order;

  return (
    <div className="flex flex-col">
      <h3 className="px-4 py-2 text-lg">결제정보</h3>
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex border-t border-color0 ">
            <ul className="flex flex-col border-t border-color2">
              <li className="flex h-12 border-b border-color2 items-center">
                <div className="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
                  <span className="px-4">주문금액</span>
                </div>
                <div className="flex w-80 h-full items-center">
                  <span className="px-4">
                    {totalPayPrice.toLocaleString()}원
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex border-t border-color0">
            <ul className="flex flex-col border-t border-color2">
              <li className="flex h-12 border-b border-color2 items-center">
                <div className="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
                  <span className="px-4">배송비</span>
                </div>
                <div className="flex w-80 h-full items-center">
                  <span className="px-4">3,000원</span>
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
