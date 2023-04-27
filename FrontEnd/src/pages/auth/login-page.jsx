import { useState } from "react";
import Layout from "../../components/user/layout/layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { authState } from "../../components/store/auth-context";

const LoginPage = (props) => {
  // const [authData, setAuthData] = useRecoilState(authState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [button, setButton] = useState(true);

  const navigate = useNavigate();
  const { state } = useLocation();

  // 아이디 입력값 업데이트 핸들러
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  // 비밀번호 입력값 업데이트 핸들러
  const pwdInputHandler = (e) => {
    setPassword(e.target.value);
  };

  // 유효성 검사 통과시 로그인 버튼 활성화
  const changeButtonHandler = () => {
    email.includes("@") && email.includes(".") && password.length >= 8
      ? setButton(false)
      : setButton(true);
  };

  // '로그인' 버튼에 대한 제출 이벤트 처리 핸들러
  // const submitHandler = (e) => {
  //   e.preventDefault();
  // };

  // 로그인이 되었을 경우 메인 페이지로 이동 핸들러
  // 아이디, 비밀번호 일치 여부 확인 핸들러
  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://34.22.85.44:5000/api/users/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      const accessToken = response.data;
      localStorage.setItem("auth", accessToken);
      // setAuthData({ isLoggedIn: true });

      if (state) {
        navigate(state);
      } else {
        navigate("/");
      }
    } catch (error) {
      alert(`${error.message}`);
    }
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col items-center">
          {/* 로그인 Title */}
          <div className="mb-[15px] mt-[50px]">
            <h1 className="text-[32px] font-[600]">로그인</h1>
          </div>

          <div className="flex mb-[30px]">
            <span className="mr-[10px]">아직 회원이 아니신가요?</span>
            <Link to="/signup" className="text-[#AA7373]">
              회원가입 하기
            </Link>
          </div>

          {/* 이메일, 비밀번호 입력 칸 */}
          <div className="flex flex-col">
            {/* 이메일 */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="이메일"
                value={email}
                onChange={emailChangeHandler}
                onKeyUp={changeButtonHandler}
                className="p-[10px] border-[#e5d1d1] border-[2px] 
                w-[500px] h-[55px] mb-[10px] rounded-[10px]
                focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </div>

            {/* 비밀번호 */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="비밀번호 (8자 이상 입력해주세요)"
                value={password}
                onChange={pwdInputHandler}
                onKeyUp={changeButtonHandler}
                className="p-[10px] w-[500px] h-[55px] 
                border-[#e5d1d1] border-[2px] rounded-[10px]
                focus:outline-[#AA7373] focus:outline-[2px]"
              ></input>
            </div>
          </div>

          {/* 로그인 버튼 */}
          <div className="mb-[100px]">
            <button
              type="button"
              disabled={button}
              className="w-[500px] h-[60px] mt-[30px] rounded-[10px] 
              bg-[#7B4848] text-[20px] text-[#FFFFFF]
              disabled:bg-[#e5d1d1] disabled:text-[#262626]"
              onClick={loginSubmitHandler}
            >
              로그인
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LoginPage;
