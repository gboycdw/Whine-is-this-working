import { createContext, useState } from "react";

export const storage = (props) => {
  if (typeof window !== "undefined") {
    const data = window.localStorage.getItem(props);
    if (data === null) {
      return null;
    } else {
      return JSON.parse(data);
    }
  }
};

export const authCtx = createContext();

const AuthContex = (props) => {
  const [auth, setAuth] = useState(storage("auth"));
  const [token, setToken] = useState(storage("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(storage("auth") ? true : false);
  const [isAdmin, setIsAdmin] = useState(
    storage("auth") && storage("auth").role === "admin" ? true : false
  );

  return (
    <authCtx.Provider
      value={{
        auth,
        setAuth,
        isLoggedIn,
        setIsLoggedIn,
        isAdmin,
        setIsAdmin,
        token,
        setToken,
      }}
    >
      {props.children}
    </authCtx.Provider>
  );
};

export default AuthContex;
