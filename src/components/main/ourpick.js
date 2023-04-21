import { Link } from "react-router-dom";

const OurPick = (props) => {
  const { products } = props;

  return (
    <div class="flex flex-col mt-16 p-10">
      <div class="flex justify-center mb-24">
        <h2 class="text-3xl tracking-[0.5em] font-bold">OUR PICK</h2>
      </div>
      <div>
        <ul class="flex justify-between overflow-hidden">
          {products.slice(0, 3).map((item) => {
            return (
              <Link key={item.id} to={`/product/${item.id}`}>
                <li class="bg-color2 w-80 h-96 flex flex-col justify-between items-center rounded-3xl py-5 px-6">
                  <div class="flex w-full">
                    <span>tag</span>
                  </div>
                  <img class="h-[220px]" src={item.imgUrl} alt={item.name} />
                  <div class="flex flex-col items-center">
                    <span class="text-base">{item.brand}</span>
                    <span class="text-lg font-semibold">{item.name}</span>
                  </div>
                  <span class="text-2xl font-bold">
                    {item.price.toLocaleString()}원
                  </span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OurPick;
