import { Link } from "react-router-dom";

const MainItem = (props) => {
  const { title, products } = props;

  return (
    <div class="flex flex-col mt-16  p-10">
      <div class="flex justify-center mb-24">
        <h2 class="text-3xl tracking-[0.5em] font-bold">{title}</h2>
      </div>
      <div>
        <ul class="flex justify-between p-1">
          {products.slice(0, 4).map((item) => {
            return (
              <Link key={item.id} to={`/product/${item.id}`}>
                <li class="w-56 h-[22rem] flex flex-col rounded-3xl py-5 px-6">
                  <div class="flex justify-center mb-5">
                    <img class="h-[200px]" src={item.imgUrl} alt={item.name} />
                  </div>
                  <div class="flex flex-col mb-3">
                    <span class="text-sm">{item.brand}</span>
                    <span class="text-base font-semibold">{item.name}</span>
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
    </div>
  );
};

export default MainItem;
