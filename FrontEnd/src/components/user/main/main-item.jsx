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
      <div class="relative flex flex-col mt-16 p-10 min-h-[200px]">
        <div class="flex justify-center mb-24">
          <h2 class="text-3xl tracking-[0.5em] font-bold">BEST</h2>
        </div>
        {isLoading ? (
          <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
            Loading...
          </div>
        ) : !isError ? (
          <>
            <div>
              <ul class="flex justify-between p-1">
                {data.slice(0, 4).map((item) => {
                  return (
                    <Link key={item._id} to={`/product/${item._id}`}>
                      <li class="w-56 h-[22rem] flex flex-col rounded-3xl py-5 px-6">
                        <div class="flex justify-center mb-5">
                          <img
                            class="h-[200px]"
                            src={item.imgUrl}
                            alt={item.name}
                          />
                        </div>
                        <div class="flex flex-col mb-3">
                          <span class="text-sm">{item.brand}</span>
                          <span class="text-base font-semibold">
                            {item.name}
                          </span>
                        </div>
                        <div class="flex justify-end">
                          <span class="text-lg font-bold pb-2">
                            {item.price.toLocaleString()}원
                          </span>
                        </div>
                        <div class="flex w-full">
                          <div class="flex text-center mr-2 justify-center bg-color2 px-3 py-1 rounded-2xl">
                            <span class="text-sm">tag</span>
                          </div>
                          <div class="flex text-center mr-2 justify-center bg-color2 px-3 py-1 rounded-2xl">
                            <span class="text-sm">tag</span>
                          </div>
                          <div class="flex text-center mr-2 justify-center bg-color2 px-3 py-1 rounded-2xl">
                            <span class="text-sm">tag</span>
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
