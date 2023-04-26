import { useContext, useEffect, useState } from "react";

const OrderedItem = ({ orderedItemId }) => {
  const orderedItem = {
    productName: "17th Rayen Francho Cielf IV 480ml",
    productNums: 2,
    imgUrl:
      "https://cdn.pixabay.com/photo/2013/07/12/16/28/wine-150955_960_720.png",
  };
  return (
    <div class="w-[100%] h-[120px]   flex items-center">
      {/* div's orderedItemId: {orderedItemId} */}
      <div class="  justify-items-start  ">
        <div class="w-[90%] h-[90%] m-[20px] ">
          <div class=" flex  ">
            <div class="m-[20px] w-[70px] h-[70px] bg-bgc1 flex justify-center items-center  ">
              <img
                src={orderedItem.imgUrl}
                alt={"와인이미지"}
                class="w-[25px] h-[50px] "
              ></img>
            </div>

            <span class="m-[20px] w-[100%]">
              {orderedItem.productName}, {orderedItem.productNums}병
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedItem;
