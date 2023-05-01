import { useQuery } from "react-query";
import { getOrderByOrderIndex } from "../../../../api/api-order";
import { getProductById } from "../../../../api/api-product";

const OrderedItem = (props) => {
  const productId = props.productId;
  const amount = props.amount;

  const { data, isLoading, isError, error } = useQuery(
    ["product", productId],
    async () => await getProductById(productId)
  );

  return (
    <div className="h-[120px]   flex items-center">
      {/* div's orderedItemId: {orderedItemId} */}
      <div className="  justify-items-start  ">
        <div className=" h-[90%] m-[20px] ">
          <div className="flex justify-center items-center gap-5">
            <div className="w-[80px] h-[80px] bg-bgc1 flex justify-center items-center  ">
              <img
                src={data?.imgUrl}
                alt={"와인이미지"}
                className="h-[60px] "
              ></img>
            </div>
            <span className="w-[100%] text-2xl">
              {data?.name}, {amount}병{/* 상품명, 상품개수 */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedItem;
