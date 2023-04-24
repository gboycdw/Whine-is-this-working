import { useContext, useEffect, useState } from "react";
const OrderInfomation = () => {
  const [pwd, setPwd] = useState("");
  useEffect(() => {
    setPwd(pwd);
  }, [pwd]);
  const pwdChangeHandler = (e) => {
    const val = e.target.value;
    setPwd(val);
  };
  return (
    <>
      <div class=" flex justify-center items-center ">
        <div class="w-[80%] h-[80%] ">
          <div class="h-[15%]">
            <h1 class="text-3xl mb-[10%]">주문 내역</h1>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default OrderInfomation;
