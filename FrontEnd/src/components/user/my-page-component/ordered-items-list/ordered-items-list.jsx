import { useContext, useEffect, useState } from "react";

const OrderedItemsList = () => {
  const orderedItems = [
    {
      orderedItemsId: "1",
    },
    {
      orderedItemsId: "2",
    },
    {
      orderedItemsId: "3",
    },
    {
      orderedItemsId: "4",
    },
    {
      orderedItemsId: "4",
    },
  ];
  function Trip({ orderedItemsId }) {
    return (
      <div class="w-[100%] h-[300px] border-2 border-c1 rounded-xl mb-[20px]">
        div's orderedItemsId: {orderedItemsId}
      </div>
    );
  }
  return (
    <>
      <div class=" flex justify-center items-center ">
        <div class="w-[80%] h-[80%] ">
          <div class="h-[15%]">
            <h1 class="text-3xl mb-[10%]">주문 내역</h1>
          </div>
          <div>
            {orderedItems.map((orderedItems) => (
              <Trip orderedItemsId={orderedItems.orderedItemsId} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderedItemsList;
