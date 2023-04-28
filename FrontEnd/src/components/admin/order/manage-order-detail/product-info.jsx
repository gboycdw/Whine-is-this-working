import { Link } from "react-router-dom";

const ProductInfo = (props) => {
  const products = props.order.orderList;

  return (
    <div className="flex flex-col">
      <h3 className="px-4 py-2 text-lg">주문상품정보</h3>
      <div className="flex w-full">
        <div className="flex flex-col w-full">
          <div className="flex border-t border-color0 w-full">
            <ul className="flex flex-col border-t border-color2 w-full">
              <li className="flex h-12 border-b border-color2 items-center">
                <div className="flex w-32 bg-[rgb(248,240,240)] h-full items-center justify-center">
                  <span className="px-4">상품번호</span>
                </div>
                <div className="flex w-28 bg-[rgb(248,240,240)] h-full items-center justify-center">
                  <span className="px-4">카테고리</span>
                </div>
                <div className="flex w-28 bg-[rgb(248,240,240)] h-full items-center justify-center">
                  <span className="px-4">나라</span>
                </div>
                <div className="flex flex-grow bg-[rgb(248,240,240)] h-full items-center justify-center">
                  <span className="px-4">상품명</span>
                </div>
                <div className="flex w-20 bg-[rgb(248,240,240)] h-full items-center justify-center">
                  <span className="px-4">수량</span>
                </div>
                <div className="flex w-32 bg-[rgb(248,240,240)] h-full items-center justify-center">
                  <span className="px-4">판매가격</span>
                </div>
                <div className="flex w-16 bg-[rgb(248,240,240)] h-full items-center justify-center">
                  <span className="px-4">비고</span>
                </div>
              </li>
              {products.map((item) => {
                return (
                  <li className="flex h-12 border-b border-color2 items-center">
                    <div className="flex w-32  h-full items-center justify-center">
                      <span className="px-4">
                        {item.product._id.slice(0, 10)}...
                      </span>
                    </div>
                    <div className="flex w-28 h-full items-center justify-center">
                      <span className="px-4">{item.product.type}</span>
                    </div>
                    <div className="flex w-28 h-full items-center justify-center">
                      <span className="px-4">{item.product.country}</span>
                    </div>
                    <div className="flex flex-col flex-grow h-full items-center justify-center">
                      <span className="px-4 text-xs">{item.brand}</span>
                      <span className="px-4 underline">
                        <Link to={`/product/${item.product._id}`}>
                          {item.product.name}
                        </Link>
                      </span>
                    </div>
                    <div className="flex w-20 h-full items-center justify-center">
                      <span className="px-4">{item.amount}</span>
                    </div>
                    <div className="flex w-32 h-full items-center justify-center">
                      <span className="px-4">
                        {(
                          item.product.price - item.product.discountPrice
                        ).toLocaleString()}
                        원
                      </span>
                    </div>
                    <div className="flex w-16 h-full items-center justify-center">
                      <span className="px-4"></span>
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
