import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const person = {
  email: "Elice@naver.com",
  pwd: "qwer1234",
};

const Withdrawl = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState(` 
      탈퇴 사유를 적어 주세요.! `);
  const contentChangeHandler = (e) => {
    const val = e.target.value;
    setContent(val);
  };
  const [email, setEmail] = useState(person.email);
  const [pwd, setpwd] = useState("");

  let personInfoModfied = {
    email: email,
    content: content,
  };
  const pwdCheckHandler = (e) => {
    let val = e.target.value;
    setpwd(val);
  };
  const WithdrawlButtonHandler = () => {
    if (pwd === person.pwd) {
      console.log(personInfoModfied);
      alert(
        `
        탈퇴가 완료 되었습니다.
        지금까지 '와인게되네' 서비스를 이용해 주셔서 감사합니다. 
         `
      );
      navigate("/");
    } else {
      alert("비밀번호가 일치하지 않습니다. ");
    }
  };
  const withdrawlCancelButtonHandler = () => {
    navigate("/");
  };

  return (
    <>
      <div class="h-[800px] flex justify-center items-center ">
        <div class="w-[80%] h-[100%]  ">
          <div class="h-[15%]">
            <h1 class=" text-c3 text-3xl mb-[10%] ">회원 탈퇴</h1>
          </div>
          <div class=" h-[350px] ">
            <div class="h-[10%] ">
              <h1 class="text-xl">탈퇴사유</h1>
            </div>
            <div class=" h-[90%]">
              <textarea
                type="text"
                value={content}
                onChange={contentChangeHandler}
                class=" w-[100%] h-[300px] border-[2px] border-c1 break-all"
              ></textarea>
            </div>
          </div>
          <div class="w-[100%] h-[20%] ">
            <div class="p-[10px] m-[10px]">
              {" "}
              <span class="mr-[10px] w-[30%]">회원 아이디</span>
              <span class="h-[25px] bg-[white] w-[30%] text-c1">{email}</span>
            </div>
            <div class="p-[10px] m-[10px]">
              {" "}
              <span class="mr-[10px] w-[30%]">비밀번호 확인</span>
              <input
                type="password"
                value={pwd}
                onChange={pwdCheckHandler}
                class="border-[1px] border-c1 h-[25px] w-[30%]"
              ></input>
            </div>
          </div>
          <div class="flex justify-center items-center h-[10%]">
            <span class="border-[1px] border-c1 border-dashed m-[10px] bg-[white] w-[60px] h-[40px] flex justify-center items-center ">
              <button onClick={WithdrawlButtonHandler}>탈퇴</button>
            </span>
            <span class="border-[1px] border-c1 m-[10px] bg-[white] w-[60px] h-[40px] flex justify-center items-center">
              <button onClick={withdrawlCancelButtonHandler}>취소</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdrawl;
