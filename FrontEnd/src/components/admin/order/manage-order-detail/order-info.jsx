const OrderInfo = (props) => {
  return (
    <div class="flex flex-col flex-grow">
      <h3 class="px-4 py-2 text-lg">주문정보</h3>
      <div class="flex border-t">
        <ul class="flex flex-col border-t border-color2">
          <li class="flex h-12 border-b border-color2 items-center">
            <div class="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span class="px-4">주문번호</span>
            </div>
            <div class="flex w-80 h-full items-center">
              <span class="px-4">23230923920</span>
            </div>
          </li>
          <li class="flex h-12 border-b border-color2 items-center">
            <div class="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span class="px-4">주문일자</span>
            </div>
            <div class="flex w-80 h-full items-center">
              <span class="px-4">2023-04-23 14:24:01</span>
            </div>
          </li>
          <li class="flex h-12 border-b border-color2 items-center">
            <div class="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span class="px-4">주문상태</span>
            </div>
            <div class="flex w-80 h-full items-center px-4">
              <select class="p-1 border border-color2 rounded">
                <option value="결제확인">결제확인</option>
                <option value="상품준비중">상품준비중</option>
                <option value="배송준비중중">배송준비중</option>
                <option value="배송중">배송중</option>
                <option value="배송완료">배송완료</option>
                <option value="취소">취소</option>
              </select>
            </div>
          </li>
          <li class="flex h-12 border-b border-color2 items-center">
            <div class="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span class="px-4">주문자</span>
            </div>
            <div class="flex w-80 h-full items-center">
              <span class="px-4">장윤수</span>
            </div>
          </li>

          <li class="flex h-12 border-b border-color2 items-center">
            <div class="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span class="px-4">연락처</span>
            </div>
            <div class="flex w-80 h-full items-center">
              <span class="px-4">01037601****</span>
            </div>
          </li>
          <li class="flex h-12 border-b border-color2 items-center">
            <div class="flex w-32 bg-[rgb(248,240,240)] h-full items-center">
              <span class="px-4">이메일</span>
            </div>
            <div class="flex w-80 h-full items-center">
              <span class="px-4">shagrat@naver.com</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderInfo;
