import { Link } from "react-router-dom";
import classes from "./product.module.css";

const Product = (props) => {
  const item = props.product;

  return (
    <Link key={item._id} to={`/product/${item._id}`}>
      <li className="w-56 h-[24rem] flex flex-col rounded-3xl py-5 px-6">
        <div className="flex justify-center mb-5">
          <img className="h-[200px]" src={item.imgUrl} alt={item.name} />
        </div>
        <div className="flex flex-col mb-3">
          <span className="text-sm">{item.brand}</span>
          <span className="text-base font-semibold">{item.name}</span>
        </div>
        <div className="flex justify-end">
          <span className="text-lg font-bold pb-2">
            {item.price.toLocaleString()}원
          </span>
        </div>
        <div className="flex w-full">
          <div className="flex text-center mr-2 justify-center bg-color2 px-3 py-1 rounded-2xl">
            <span className="text-sm">tag</span>
          </div>
          <div className="flex text-center mr-2 justify-center bg-color2 px-3 py-1 rounded-2xl">
            <span className="text-sm">tag</span>
          </div>
          <div className="flex text-center mr-2 justify-center bg-color2 px-3 py-1 rounded-2xl">
            <span className="text-sm">tag</span>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default Product;
