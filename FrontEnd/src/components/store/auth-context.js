import { createContext, useState } from "react";

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

export const authCtx = createContext();

const AuthContex = (props) => {
  const [auth, setAuth] = useState(storage("auth"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <authCtx.Provider
      value={{ auth, setAuth, isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin }}
    >
      {props.children}
    </authCtx.Provider>
  );
};

export default AuthContex;
