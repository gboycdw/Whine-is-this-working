const OrderedItem = (props) => {
  const orderedItems = props.orderedItems;
  return (
    <div class="h-[120px]   flex items-center">
      {/* div's orderedItemId: {orderedItemId} */}
      <div class="  justify-items-start  ">
        <div class=" h-[90%] m-[20px] ">
          <div class=" flex  ">
            <div class="m-[20px] w-[70px] h-[70px] bg-bgc1 flex justify-center items-center  ">
              <img
                src={orderedItems.imgUrl}
                alt={"와인이미지"}
                class="w-[25px] h-[50px] "
              ></img>
            </div>

            <span class="m-[20px] w-[100%] text-2xl">
              {orderedItems.productName}, {orderedItems.productNums}병
              {/* 상품명, 상품개수 */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedItem;
