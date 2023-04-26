import { useState } from "react";
import Layout from "../../components/user/layout/layout";
import { Navigate, useNavigate } from "react-router-dom";

const SignUpPage = (props) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [button, setButton] = useState(true);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  // dummy) DB에 저장된 id, password
  // const realId = "hello@elice.com";
  // const realPwd = "hello1234";

  // 이름 입력값 업데이트 핸들러
  const nameInputHandler = ({ target: { value } }) => {
    return setName(value);
  };

  // 아이디 입력값 업데이트 핸들러
  const idInputHandler = ({ target: { value } }) => {
    return setId(value);
  };

  // 비밀번호 입력값 업데이트 핸들러
  const pwdInputHandler = ({ target: { value } }) => {
    return setPassword(value);
  };

  // 비밀번호 확인 입력값 업데이트 핸들러
  const pwdCheckInputHandler = ({ target: { value } }) => {
    return setPasswordCheck(value);
  };

  // 주소 입력값 업데이트 핸들러
  const addressInputHandler = ({ target: { value } }) => {
    return setAddress(value);
  };

  // 유효성 검사 통과시 회원가입 버튼 활성화
  // 1) 아이디 형식이 이메일
  // 2) 비밀번호 8자 이상
  // 3) 비밀번호와 비밀번호 확인 입력값 일치
  const changeButtonHandler = () => {
    id.includes("@") &&
    id.includes(".") &&
    password.length >= 8 &&
    password === passwordCheck
      ? setButton(false)
      : setButton(true);
  };

  // 회원가입 후 회원가입 완료 페이지로 이동 핸들러
  const navigate = useNavigate();
  const signUpCheckHandler = (e) => {
    if (password === passwordCheck) {
      e.stopPropagation();
      navigate("/signupcomplete");
    } else {
      alert("입력하신 비밀번호가 다릅니다.");
    }
  };

  return (
    <>
      <Layout>
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
              items-center justify-center text-[#FFFFFF] text-[17px] mb-[20px]"
            >
              성인인증
            </div>

            <div className="flex flex-col items-center text-[15.5px]">
              <p>
                정보통신망 이용 촉진 및 정보보호 등에 관한 법률 및 청소년
                보호법의 규정에 의하여
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
              <span className="text-[16px] mb-[5px]">아이디</span>
              <input
                type="id"
                name="id"
                placeholder="이메일을 입력해주세요"
                value={id}
                onChange={idInputHandler}
                onKeyUp={changeButtonHandler}
                className="p-[10px] border-[#e5d1d1] border-[2px] 
                w-[650px] h-[45px] mb-[25px]
                focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </li>

            {/* 비밀번호 */}
            <li className="flex flex-col">
              <span className="text-[16px] mb-[5px]">비밀번호</span>
              <input
                type="password"
                name="password"
                placeholder="비밀번호 (8자 이상 입력해주세요)"
                value={password}
                onChange={pwdInputHandler}
                onKeyUp={changeButtonHandler}
                className="p-[10px] border-[#e5d1d1] border-[2px] 
                w-[650px] h-[45px] mb-[25px]
                focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </li>
          </ul>

          {/* 비밀번호 확인 */}
          <li className="flex flex-col">
            <span className="text-[16px] mb-[5px]">비밀번호 확인</span>
            <input
              type="password"
              name="passwordCheck"
              placeholder="비밀번호를 한 번 더 입력해주세요"
              value={passwordCheck}
              onChange={pwdCheckInputHandler}
              onKeyUp={changeButtonHandler}
              className="p-[10px] border-[#e5d1d1] border-[2px] 
                w-[650px] h-[45px] mb-[25px]
                focus:outline-[#AA7373] focus:outline-[2px]"
            ></input>
          </li>

          {/* 주소 */}
          <li className="flex flex-col">
            <span className="text-[16px] mb-[5px]">주소</span>
            <input
              type="text"
              name="address"
              placeholder="주소를 입력해주세요"
              onChange={addressInputHandler}
              value={address}
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
              onClick={signUpCheckHandler}
            >
              회원가입
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SignUpPage;
