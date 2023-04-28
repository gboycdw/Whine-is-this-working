import { useQuery } from "react-query";
import { getOrderByOrderIndex } from "../../../../api/api-order";
import { getProductById } from "../../../../api/api-product";

const OrderedItem = (props) => {
  const productId = props.productId;
  const amount = props.amount;

  console.log(productId);

  const { data, isLoading, isError, error } = useQuery(
    ["product", productId],
    async () => await getProductById(productId)
  );

  console.log(data);

  return (
    <div class="h-[120px]   flex items-center">
      {/* div's orderedItemId: {orderedItemId} */}
      <div class="  justify-items-start  ">
        <div class=" h-[90%] m-[20px] ">
          <div class="flex justify-center items-center gap-5">
            <div class="w-[80px] h-[80px] bg-bgc1 flex justify-center items-center  ">
              <img
                src={data?.imgUrl}
                alt={"와인이미지"}
                class="h-[60px] "
              ></img>
            </div>

            <span class="w-[100%] text-2xl">
              {data?.name}, {amount}병{/* 상품명, 상품개수 */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedItem;
