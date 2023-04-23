import { useState, useEffect } from "react";
const Withdrawl = () => {
  const [content, setContent] = useState("탈퇴 사유를 적어 주세요.!");
  const contentChangeHandler = (e) => {
    const val = e.target.value;
    setContent(val);
  };
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  const [adressDetail, setAdressDetail] = useState("");
  const [tel, setTel] = useState("");
  const person = {
    name: "김필중",
    email: "elice@naver.com",
    address: "서울시 서초구",
    addressDetail: "elice-lab 123호",
    tel: "123-456-789",
  };
  useEffect(() => {
    setEmail(person.email);
    setName(person.name);
    setAdress(person.address);
    setAdressDetail(person.addressDetail);
    setTel(person.tel);
  }, []);
  return (
    <>
      <div class="h-[80%] flex justify-center items-center ">
        <div class="w-[80%] h-[100%] ">
          <div class="h-[15%]">
            <h1 class="text-3xl mb-[10%]">회원 탈퇴</h1>
          </div>
          <div class=" h-[350px] ">
            <div class="h-[10%] ">
              <h1 class="text-xl">탈퇴사유</h1>
            </div>
            <div class=" h-[90%]">
              <input
                value={content}
                onChange={contentChangeHandler}
                class="w-[100%] h-[100%] border-[2px] border-c1 "
              ></input>
            </div>
          </div>
          <div class="w-[100%] h-[20%] ">
            <div class="p-[10px] m-[10px]">
              {" "}
              <span class="mr-[10px] w-[30%]">회원 아이디</span>
              <span class="h-[25px] bg-[white] w-[30%] text-c1">
                Elice1234@gmail.com
              </span>
            </div>
            <div class="p-[10px] m-[10px]">
              {" "}
              <span class="mr-[10px] w-[30%]">비밀번호 확인</span>
              <input class="border-[1px] border-c1 h-[25px] w-[30%]"></input>
            </div>
          </div>
          <div class="flex justify-center items-center h-[10%]">
            <button class="border-[1px] border-c1 m-[10px] bg-[white] w-[60px] h-[40px] flex justify-center items-center ">
              <span>탈퇴</span>
            </button>
            <button class="border-[1px] border-c1 border-dashed m-[10px] bg-[white] w-[60px] h-[40px]">
              <span>취소</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdrawl;
