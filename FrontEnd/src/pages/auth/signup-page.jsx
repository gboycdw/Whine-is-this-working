import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PopupDom from "../../components/user/my-page-component/post-popup/popup-dom";
import OrderPostCode from "./signup-order-post-code";

const SignUpPage = (props) => {
  // 초기값 세팅
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // 오류 전달을 위한 상태값 세팅
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  // 오류 메시지 상태 저장
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const navigate = useNavigate();

  // 이름 입력값 업데이트 핸들러
  const nameInputHandler = (e) => {
    setName(e.target.value);
  };

  // 아이디 입력값 업데이트 핸들러
  const emailInputHandler = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다😅");
      setIsEmail(false);
    } else {
      setEmailMessage("사용 가능한 이메일 입니다😊");
      setIsEmail(true);
    }
  };

  // 비밀번호 입력값 업데이트 핸들러
  const pwdInputHandler = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    if (currentPassword.length < 8) {
      setPasswordMessage("비밀번호를 8자리 이상 입력해주세요😅");
      setIsPassword(false);
    } else {
      setPasswordMessage("사용 가능한 비밀번호 입니다😆");
      setIsPassword(true);
    }
  };

  // 비밀번호 확인 입력값 업데이트 핸들러
  const pwdCheckInputHandler = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("떼잉~ 비밀번호가 똑같지 않아요😂");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다👏🏻");
      setIsPasswordConfirm(true);
    }
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
  };

  // 휴대폰 번호 업데이트 핸들러
  const PhoneNumberChangeHandler = (e) => {
    const currentPhone = e.target.value;
    setPhoneNumber(currentPhone);
    const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if (!phoneRegExp.test(currentPhone)) {
      setPhoneMessage("올바른 형식이 아닙니다😅");
      setIsPhone(false);
    } else {
      setPhoneMessage("사용 가능한 번호입니다😆");
      setIsPhone(true);
    }
  };

  // 유효성 검사 통과시 회원가입 버튼 활성화
  // 1) 아이디 형식이 이메일
  // 2) 비밀번호 8자 이상
  // 3) 비밀번호와 비밀번호 확인 입력값 일치
  const emailRegExp =
    /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  const signupButton = !(
    emailRegExp.test(email) &&
    password.length >= 8 &&
    passwordRef.current.value === passwordConfirmRef.current.value &&
    address1.trim() !== "" &&
    address2.trim() !== "" &&
    phoneNumber.trim() !== ""
  );

  // 회원가입 후 회원가입 완료 페이지로 이동 핸들러
  const signupSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://34.22.85.44:5000/api/users/signUp",
        { name, email, password, address1, address2, phoneNumber }
      );
      console.log(result);
      navigate("/signupcomplete");
    } catch (error) {
      console.log(error);
    }
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
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
          <img
            src="19.png"
            alt="19icon"
            className="flex h-[80px] 
              items-center justify-center  mb-[20px] hover:cursor-pointer"
            onClick={() => {
              alert("💥19세 미만의 청소년은 이용할 수 없습니다❗");
            }}
          />

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
              className="p-[10px] border-[#e5d1d1] border-[2px] 
                w-[650px] h-[45px] mb-[5px]
                focus:outline-[#AA7373] focus:outline-[2px]"
            ></input>
            <p className="message text-[#BC1414] mb-[10px] text-[15px]">
              {emailMessage}
            </p>
          </li>

          {/* 비밀번호 */}
          <li className="flex flex-col mb-[10px]">
            <span className="text-[16px] mb-[5px]">비밀번호</span>
            <input
              type="password"
              name="password"
              placeholder="비밀번호 (8자 이상 입력해주세요)"
              value={password}
              onChange={pwdInputHandler}
              ref={passwordRef}
              className="p-[10px] border-[#e5d1d1] border-[2px] 
                w-[650px] h-[45px] mb-[5px]
                focus:outline-[#AA7373] focus:outline-[2px]"
            ></input>
            <p className="message text-[#BC1414] mb-[10px] text-[15px]">
              {passwordMessage}
            </p>
          </li>
        </ul>

        {/* 비밀번호 확인 */}
        <li className="flex flex-col mb-[10px]">
          <span className="text-[16px] mb-[5px]">비밀번호 확인</span>
          <input
            type="password"
            name="passwordCheck"
            placeholder="비밀번호를 한 번 더 입력해주세요"
            value={passwordCheck}
            onChange={pwdCheckInputHandler}
            ref={passwordConfirmRef}
            className="p-[10px] border-[#e5d1d1] border-[2px] 
                w-[650px] h-[45px]  mb-[5px]
                focus:outline-[#AA7373] focus:outline-[2px]"
          ></input>
          <p className="message text-[#BC1414] mb-[10px] text-[15px]">
            {passwordConfirmMessage}
          </p>
        </li>

        {/* 핸드폰번호 */}
        <li className="flex flex-col mb-[10px]">
          <span className="text-[16px] mb-[5px]">핸드폰번호</span>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="핸드폰 번호를 입력해주세요."
            onChange={PhoneNumberChangeHandler}
            value={phoneNumber}
            className="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[650px] h-[45px] mb-[5px]
              focus:outline-[#AA7373] focus:outline-[2px]"
          ></input>
          <p className="message text-[#BC1414] mb-[10px] text-[15px]">
            {phoneMessage}
          </p>
        </li>

        {/* 주소 */}
        <li className="flex flex-col">
          <div className="flex gap-[20px]">
            {/* 주소 (우편번호 찾기) */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">주소</span>

              {/* 우편번호 찾기로 찾은 주소가 들어가는 칸 */}
              <div className="flex">
                <p
                  class="p-[10px] border-[#e5d1d1] border-[2px] 
              w-[540px] h-[45px] mb-[25px] mr-[10px]
              focus:outline-[#AA7373] focus:outline-[2px]"
                >
                  {address1}
                </p>
                <button
                  class="bg-[#7B4848] rounded-[10px] w-[100px] h-[45px] text-[#FFFFFF]"
                  type="button"
                  onClick={openPostCode}
                >
                  우편번호 찾기
                </button>
              </div>
              <div id="popupDom">
                {isPopupOpen && ( // 클릭해서 true면 팝업 띄움.
                  <PopupDom>
                    <OrderPostCode
                      onClose={closePostCode} //팝업닫음.
                      setFullAddress={setAddress1}
                    />
                  </PopupDom>
                )}
              </div>
            </li>
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
            disabled={signupButton}
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
