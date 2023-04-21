const ManageProductList = () => {
  return (
    <div class="p-8 h-full">
      <div class="border-b">
        <span>전체 10</span>
        <span> | </span>
        <span>판매중 8</span>
        <span> | </span>
        <span>품절 0</span>
        <span> | </span>
        <span>숨김 0</span>
      </div>
      <div class="py-4 grid grid-cols-10 gap-4">
        <div class="col-start-1 col-end-1 bg-[#ffffff] py-2 px-3">
          카테고리 선택 | v
        </div>
        <input
          class="col-start-2 col-end-10 py-2 px-3 "
          type="text"
          placeholder="상품명 검색"
        />
        <div class="col-start-10 col-end-10 py-2 px-3 bg-[#ffffff]">
          엑셀 다운로드 | v
        </div>
      </div>
      <div class="h-full py-3 px-7 bg-[#ffffff]">
        <ul>
          <li class="relative flex text-center border-b w-full py-2 gap-5">
            <input type="checkbox" />
            <span class="w-10 bg-main">No</span>
            <img src="" alt="" />
            <span class="grow bg-main">상품명</span>
            <span class="w-28 bg-main">판매가</span>
            <span class="w-20 bg-main">카테고리</span>
            <span class="w-20 bg-main">상태</span>
            <span class="w-20 bg-main">재고</span>
            <span class="w-40 bg-main">등록일</span>
            <span class="w-40 bg-main">수정일</span>
            <button class="w-20 bg-main"></button>
          </li>
          <li class="flex text-center border-b w-full py-2 gap-5">
            <input type="checkbox" />
            <span class="w-10 bg-main">27</span>
            <img src="" alt="" />
            <span class="grow bg-main">모노플 클라시코 Monopole Classico</span>
            <span class="w-28 bg-main">5,2000원</span>
            <span class="w-20 bg-main">WHITE</span>
            <span class="w-20 bg-main">판매중 v</span>
            <span class="w-20 bg-main">200</span>
            <span class="w-40 bg-main">2023-02-27</span>
            <span class="w-40 bg-main">2023-03-03</span>
            <button class="w-20 bg-main">수정하기</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ManageProductList;
