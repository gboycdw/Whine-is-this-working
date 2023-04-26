import { createContext, useState } from "react";
import { atom } from "recoil";

export const storage = (props) => {
  if (typeof window !== "undefined") {
    const data = window.localStorage.getItem(props);
    if (data === null) {
      return [];
    } else {
      return JSON.parse(data);
    }
  }
};

export const cartCtx = createContext();

const CartContext = (props) => {
  const [cartData, setCartData] = useState(storage("cartData"));

  return (
    <cartCtx.Provider value={{ cartData, setCartData }}>
      {props.children}
    </cartCtx.Provider>
  );
};

const orderDataState = atom({
  key: "orderDataState",
  default: {},
});

export default CartContext;
