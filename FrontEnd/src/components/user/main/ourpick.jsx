import { Link } from "react-router-dom";

const OurPick = (props) => {
  const pickedProducts = props.pickedProducts;

  return (
    <>
      <div className="relative flex flex-col mt-16 p-10">
        <div className="flex justify-center mb-24">
          <h2 className="text-3xl tracking-[0.5em] font-bold">OUR PICK</h2>
        </div>

        <div>
          <ul className="flex justify-between overflow-hidden">
            {pickedProducts?.slice(0, 3).map((item) => {
              return (
                <Link key={item._id} to={`/product/${item._id}`}>
                  <li className="bg-[#F9EFEF] w-80 h-96 flex flex-col justify-between items-center rounded-3xl py-5 px-6">
                    <img
                      className="h-[220px]"
                      src={item.imgUrl}
                      alt={item.name}
                    />
                    <div className="flex flex-col items-center">
                      <span className="text-base">{item.brand}</span>
                      <span className="text-lg font-semibold">{item.name}</span>
                    </div>
                    <span className="text-2xl font-bold">
                      {(item.price - item.discountPrice).toLocaleString()}원
                    </span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OurPick;
