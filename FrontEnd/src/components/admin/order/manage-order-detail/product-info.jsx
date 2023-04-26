import { getAllProduct } from "../../../../api/api-product";

const ProductInfo = (props) => {
  const data = [];
  // const data = getAllProduct();
  // const { id, country, name, inventory, price } = data;

  // console.log(data);
  return (
    <div class="flex flex-col">
      <h3 class="px-4 py-2 text-lg">주문상품정보</h3>
      <div class="flex w-full">
        <div class="flex flex-col w-full">
          <div class="flex border-t border-color0 w-full">
            <ul class="flex flex-col border-t border-color2 w-full">
              <li class="flex h-12 border-b border-color2 items-center">
                <div class="flex w-32 bg-[rgb(248,240,240)] h-full items-center justify-center">
                  <span class="px-4">상품번호</span>
                </div>
                <div class="flex w-28 bg-[rgb(248,240,240)] h-full items-center justify-center">
                  <span class="px-4">카테고리</span>
                </div>
                <div class="flex w-28 bg-[rgb(248,240,240)] h-full items-center justify-center">
                  <span class="px-4">나라</span>
                </div>
                <div class="flex flex-grow bg-[rgb(248,240,240)] h-full items-center justify-center">
                  <span class="px-4">상품명</span>
                </div>
                <div class="flex w-20 bg-[rgb(248,240,240)] h-full items-center justify-center">
                  <span class="px-4">수량</span>
                </div>
                <div class="flex w-32 bg-[rgb(248,240,240)] h-full items-center justify-center">
                  <span class="px-4">판매가격</span>
                </div>
                <div class="flex w-16 bg-[rgb(248,240,240)] h-full items-center justify-center">
                  <span class="px-4">비고</span>
                </div>
              </li>
              {data.map((item) => {
                return (
                  <li class="flex h-12 border-b border-color2 items-center">
                    <div class="flex w-32  h-full items-center justify-center">
                      <span class="px-4">{item.id}</span>
                    </div>
                    <div class="flex w-28 h-full items-center justify-center">
                      <span class="px-4">{item.feature.color}</span>
                    </div>
                    <div class="flex w-28 h-full items-center justify-center">
                      <span class="px-4">{item.feature.country}</span>
                    </div>
                    <div class="flex flex-col flex-grow h-full items-center justify-center">
                      <span class="px-4 text-xs">{item.brand}</span>
                      <span class="px-4">{item.name}</span>
                    </div>
                    <div class="flex w-20 h-full items-center justify-center">
                      <span class="px-4">{item.inventory}</span>
                    </div>
                    <div class="flex w-32 h-full items-center justify-center">
                      <span class="px-4">
                        {(item.price - item.discountPrice).toLocaleString()}원
                      </span>
                    </div>
                    <div class="flex w-16 h-full items-center justify-center">
                      <span class="px-4"></span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
