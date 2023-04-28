import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [button, setButton] = useState(true);

  const navigate = useNavigate();

  // dummy) DB에 저장된 email, password
  // const realemail = "hello@elice.com";
  // const realPwd = "hello1234";

  // 이름 입력값 업데이트 핸들러
  const nameInputHandler = (e) => {
    setName(e.target.value);
  };

  // 아이디 입력값 업데이트 핸들러
  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };

  // 비밀번호 입력값 업데이트 핸들러
  const pwdInputHandler = (e) => {
    setPassword(e.target.value);
  };

  // 비밀번호 확인 입력값 업데이트 핸들러
  const pwdCheckInputHandler = (e) => {
    setPasswordCheck(e.target.value);
  };

  // 주소 입력값 업데이트 핸들러
  const addressInputHandler = (e) => {
    if (e.target.id === "address1") {
      setAddress1(e.target.value);
    }
    if (e.target.id === "address2") {
      setAddress2(e.target.value);
    }
    if (e.target.id === "postalCode") {
      setPostalCode(e.target.value);
    }
  };

  const PhoneNumberChangeHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  // 유효성 검사 통과시 회원가입 버튼 활성화
  // 1) 아이디 형식이 이메일
  // 2) 비밀번호 8자 이상
  // 3) 비밀번호와 비밀번호 확인 입력값 일치
  const changeButtonHandler = () => {
    email.includes("@") &&
    email.includes(".") &&
    password.length >= 8 &&
    password === passwordCheck &&
    address1.trim() !== "" &&
    address2.trim() !== "" &&
    postalCode.trim() !== "" &&
    phoneNumber.trim() !== ""
      ? setButton(false)
      : setButton(true);
  };

  // 회원가입 후 회원가입 완료 페이지로 이동 핸들러
  const signupSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      alert("입력하신 비밀번호가 다릅니다.");
    }
    try {
      const result = await axios.post(
        "http://34.22.85.44:5000/api/users/signUp",
        { name, email, password, address1, address2, postalCode, phoneNumber }
      );
      console.log(result);
      navigate("/signupcomplete");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {/* 회원가입 Title */}
        <div className="mb-[20px] mt-[50px] mb-[50px]">
          <h1 className="text-[32px] font-[600]">회원가입</h1>
        </div>
        {/* 성인인증 */}
        <div
          className="flex flex-col items-center justify-center
          w-[650px] h-[200px] border-[#E5D1D1] border-[3.5px] rounded-[20px] mb-[60px]"
        >
          <div
            className="flex w-[180px] h-[55px] rounded-[10px] bg-[#7B4848]
              items-center justify-center text-[#FFFFFF] text-[17px] mb-[20px] hover:cursor-pointer hover:bg-color1"
            onClick={() => {
              alert("성인 인증이 완료되었습니다.");
            }}
          >
            성인인증
          </div>

          <div className="flex flex-col items-center text-[15.5px]">
            <p>
              정보통신망 이용 촉진 및 정보보호 등에 관한 법률 및 청소년 보호법의
              규정에 의하여
            </p>
            <p className="underline underline-offset-[3px]">
              19세 미만의 청소년은 이용할 수 없습니다.
            </p>
          </div>
        </div>
        <ul className="flex flex-col">
          {/* 이름 */}
          <li className="flex flex-col">
            <span className="text-[16px] mb-[5px]">이름</span>
            <input
              type="text"
              name="name"
              placeholder="이름을 입력해주세요"
              onChange={nameInputHandler}
              value={name}
              className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[650px] h-[45px] mb-[25px]
              focus:outline-[#AA7373] focus:outline-[2px]"
            ></input>
          </li>

          {/* 이메일 */}
          <li className="flex flex-col">
            <span className="text-[16px] mb-[5px]">이메일</span>
            <input
              type="email"
              name="email"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={emailInputHandler}
              onKeyUp={changeButtonHandler}
              className="p-[10px] border-[#e5d1d1] border-[2px] 
                w-[650px] h-[45px] mb-[25px]
                focus:outline-[#AA7373] focus:outline-[2px]"
            ></input>
          </li>

          {/* 비밀번호 */}
          <li className="flex flex-col mb-[25px]">
            <span className="text-[16px] mb-[5px]">비밀번호</span>
            <input
              type="password"
              name="password"
              placeholder="비밀번호 (8자 이상 입력해주세요)"
              value={password}
              onChange={pwdInputHandler}
              onKeyUp={changeButtonHandler}
              className="p-[10px] border-[#e5d1d1] border-[2px] 
                w-[650px] h-[45px] 
                focus:outline-[#AA7373] focus:outline-[2px]"
            ></input>
            {password.length < 8 ? (
              <span>비밀번호는 8글자 이상으로 입력해주세요.</span>
            ) : (
              ""
            )}
          </li>
        </ul>

        {/* 비밀번호 확인 */}
        <li className="flex flex-col mb-[25px]">
          <span className="text-[16px] mb-[5px]">비밀번호 확인</span>
          <input
            type="password"
            name="passwordCheck"
            placeholder="비밀번호를 한 번 더 입력해주세요"
            value={passwordCheck}
            onChange={pwdCheckInputHandler}
            onKeyUp={changeButtonHandler}
            className="p-[10px] border-[#e5d1d1] border-[2px] 
                w-[650px] h-[45px] 
                focus:outline-[#AA7373] focus:outline-[2px]"
          ></input>
          {password !== passwordCheck ? (
            <span>비밀번호가 서로 다릅니다.</span>
          ) : (
            ""
          )}
        </li>
        {/* 전화번호 */}
        <li className="flex flex-col">
          <span className="text-[16px] mb-[5px]">핸드폰번호</span>
          <input
            type="number"
            name="address"
            placeholder="핸드폰 번호를 입력해주세요."
            onChange={PhoneNumberChangeHandler}
            value={phoneNumber}
            className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[650px] h-[45px] mb-[25px]
              focus:outline-[#AA7373] focus:outline-[2px]"
          ></input>
        </li>

        {/* 주소 */}
        <li className="flex flex-col">
          <span className="text-[16px] mb-[5px]">주소</span>
          <div className="flex gap-[20px]">
            <input
              type="number"
              name="postalCode"
              id="postalCode"
              placeholder="우편번호를 입력해주세요."
              onChange={addressInputHandler}
              value={postalCode}
              className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[180px] h-[45px] mb-[25px]
              focus:outline-[#AA7373] focus:outline-[2px]"
            ></input>
            <input
              type="text"
              name="address1"
              id="address1"
              placeholder="주소를 입력해주세요"
              onChange={addressInputHandler}
              value={address1}
              className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[450px] h-[45px] mb-[25px]
              focus:outline-[#AA7373] focus:outline-[2px]"
            ></input>
          </div>
          <input
            type="text"
            name="address2"
            id="address2"
            placeholder="상세주소를 입력해주세요."
            onChange={addressInputHandler}
            value={address2}
            className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[650px] h-[45px] mb-[25px]
              focus:outline-[#AA7373] focus:outline-[2px]"
          ></input>
        </li>

        {/* 회원가입 버튼 */}
        <div className="mb-[100px]">
          <button
            type="button"
            disabled={button}
            className="w-[650px] h-[60px] mt-[30px] rounded-[10px] 
              bg-[#7B4848] text-[20px] text-[#FFFFFF]
              disabled:bg-[#E5D1D1] disabled:text-[#262626]"
            onClick={signupSubmitHandler}
          >
            회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
