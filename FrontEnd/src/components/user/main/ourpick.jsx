import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getProductsByIsPicked } from "../../../api/api-product";

const OurPick = () => {
  const { data, isLoading, error, isError } = useQuery(
    "PickedProducts",
    async () => await getProductsByIsPicked()
  );

  return (
    <>
      <div className="relative flex flex-col mt-16 p-10">
        <div className="flex justify-center mb-24">
          <h2 className="text-3xl tracking-[0.5em] font-bold">OUR PICK</h2>
        </div>
        {isLoading ? (
          <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
            Loading...
          </div>
        ) : !isError ? (
          <div>
            <ul className="flex justify-between overflow-hidden">
              {data.slice(0, 3).map((item) => {
                return (
                  <Link key={item._id} to={`/product/${item._id}`}>
                    <li className="bg-color2 w-80 h-96 flex flex-col gap-2 items-center rounded-3xl py-5 px-6">
                      <div className="flex gap-3 w-full mb-2">
                        {item.tags.map((tags) => (
                          <span className="bg-[#ffffff] py-1 px-3 rounded-[50px]">
                            {tags}
                          </span>
                        ))}
                      </div>
                      <img
                        className="h-[220px]"
                        src={item.imgUrl}
                        alt={item.name}
                      />
                      <div className="flex flex-col items-center">
                        <span className="text-base">{item.brand}</span>
                        <span className="text-lg font-semibold">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-2xl font-bold">
                        {item.price.toLocaleString()}원
                      </span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
            {error.message}
          </div>
        )}
      </div>
    </>
  );
};

export default OurPick;
