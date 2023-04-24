import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: {
    id: "",
    email: "",
    userName: "",
    isAdmin: "",
    state: "",
  },
});
