import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  isAdmin: true,
  effects: [
    ({ setSelf, onSet }) => {
      const authData = localStorage.getItem("auth");
      // setSelf: atom 값을 설정 혹은 재설정
      if (authData) setSelf(JSON.parse(authData));

      // atom이 변화가 감지될 때 작동, Storage에 데이터 저장
      // setSelf에 의해서는 작동하지 않음
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem("auth")
          : localStorage.setItem("auth", JSON.stringify(newValue));
      });
    },
  ],
});
