import { useContext, useEffect, useState } from "react";

const OrderedItem = () => {
  const orderedItem = [
    {
      orderedItemId: "1",
    },
    {
      orderedItemId: "2",
    },
    {
      imgUrl:
        "https://pixabay.com/ko/vectors/%ec%99%80%ec%9d%b8-%eb%a7%88%ec%8b%9c%eb%8b%a4-%eb%b3%91-%ec%9d%8c%eb%a3%8c-%ec%88%a0-150955/",
    },
  ];
  return (
    <>
      <div class=" flex justify-center items-center ">
        <div class="w-[90%] h-[90%] m-[20px]">
          <div class=" flex justify-center  ">
            <img
              src={orderedItem.imgUrl}
              alt={"와인이미지"}
              class="m-[20px]"
            ></img>
            <span class="m-[20px]">17th Rayen Francho Cielf IV 480ml, 2병</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderedItem;
