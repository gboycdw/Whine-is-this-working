import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getProductsByIsBest } from "../../../api/api-product";

const MainItem = () => {
  const { data, isLoading, error, isError } = useQuery(
    "BestProduct",
    async () => await getProductsByIsBest()
  );

  return (
    <>
      <div className="relative flex flex-col mt-16 p-10 min-h-[200px]">
        <div className="flex justify-center mb-24">
          <h2 className="text-3xl tracking-[0.5em] font-bold">BEST</h2>
        </div>
        {isLoading ? (
          <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
            Loading...
          </div>
        ) : !isError ? (
          <>
            <div>
              <ul className="flex justify-between p-1">
                {data.slice(0, 4).map((item) => {
                  return (
                    <Link key={item._id} to={`/product/${item._id}`}>
                      <li className="w-56 h-[24rem] flex flex-col rounded-3xl py-5 px-6">
                        <div className="flex justify-center mb-5">
                          <img
                            className="h-[200px]"
                            src={item.imgUrl}
                            alt={item.name}
                          />
                        </div>
                        <div className="flex flex-col mb-3">
                          <span className="text-sm">{item.brand}</span>
                          <span className="text-base font-semibold">
                            {item.name}
                          </span>
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
                })}
              </ul>
            </div>
          </>
        ) : (
          <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
            {error.message}
          </div>
        )}
      </div>
    </>
  );
};

export default MainItem;
