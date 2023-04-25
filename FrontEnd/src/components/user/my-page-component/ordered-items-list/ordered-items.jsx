import { useContext, useEffect, useState } from "react";
import OrderedItem from "./ordered-item";

const OrderedItems = () => {
  const orderedItem = [
    {
      orderedItemId: "1",
    },
    {
      orderedItemId: "2",
    },
    {
      orderedItemId: "3",
    },
    {
      orderedItemId: "4",
    },
    {
      orderedItemId: "5",
    },
  ];
  const ChildItemListUp = ({ orderedItemId }) => {
    return (
      <div class="w-[100%] h-[100px] border-2 border-c1 rounded-xl mb-[20px]">
        {/* div's orderedItemId: {orderedItemId} */}
        <OrderedItem />
      </div>
    );
  };
  return (
    <>
      <div class=" flex justify-center items-center ">
        <div class="w-[90%] h-[90%] ">
          <div>
            {orderedItem.map((orderedItem) => (
              <ChildItemListUp orderedItemId={orderedItem.orderedItemId} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderedItems;
