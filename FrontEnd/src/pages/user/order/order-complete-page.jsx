const OrderCompletePage = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        {/* 주문완료 Title */}
        <div className="flex items-center mb-[20px] mt-[50px] mb-[60px]">
          <h1 className="text-[32px] font-[600]">주문완료</h1>
        </div>

        {/* 주문 완료 안내 문구 */}
        <img
          src="/complete-check.png"
          alt="complete-check-icon"
          className="h-[80px]"
        />
        <span className="text-[25px] mt-[50px] mb-[70px]">
          주문이 정상적으로 완료되었습니다.
        </span>
      </div>
    </>
  );
};

export default OrderCompletePage;
