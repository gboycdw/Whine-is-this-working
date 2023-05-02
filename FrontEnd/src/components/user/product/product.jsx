import { Link } from "react-router-dom";

const Product = (props) => {
  const item = props.product;

  return (
    <Link key={item._id} to={`/product/${item._id}`}>
      <li className="w-56 h-[24rem] flex flex-col rounded-3xl py-5 px-6">
        <div className="flex justify-center mb-5">
          <img className="h-[200px]" src={item.imgUrl} alt={item.name} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm">{item.brand}</span>
          <span className="text-lg font-semibold">{item.name}</span>
        </div>
        {item.saleState === "품절" ? (
          <>
            <div className="flex gap-2 items-center mb-2">
              <span className="text-lg line-through text-[rgb(189,189,189)]">
                {item.price.toLocaleString()}원
              </span>
              <span className="mr-2">품절</span>
            </div>
          </>
        ) : item.discountPrice !== 0 ? (
          <>
            <div className="flex gap-2 items-center mb-2">
              <span className="text-lg">
                {(item.price - item.discountPrice).toLocaleString()}원
              </span>
              <span className="text-sm line-through text-[rgb(189,189,189)]">
                {item.price.toLocaleString()}원
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center mb-2">
              <span className="text-lg">{item.price.toLocaleString()}원</span>
            </div>
          </>
        )}

        <div className="flex w-full">
          {item.tags.map((tag) => {
            return (
              <div className="flex text-center mr-2 justify-center bg-color2 px-3 py-1 rounded-2xl">
                <span className="text-sm">{tag}</span>
              </div>
            );
          })}
        </div>
      </li>
    </Link>
  );
};

export default Product;
