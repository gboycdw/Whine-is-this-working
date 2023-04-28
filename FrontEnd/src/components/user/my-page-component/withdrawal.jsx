import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import {
  deleteUserDataByToken,
  getUserDataByToken,
} from "../../../api/api-auth";
import { authCtx } from "../../store/auth-context";

const Withdrawl = () => {
  const { data, isLoading, isError, error } = useQuery(
    ["auth"],
    async () => await getUserDataByToken()
  );
  const navigate = useNavigate();
  const [content, setContent] = useState(` 
      탈퇴 사유를 적어 주세요.! `);
  const contentChangeHandler = (e) => {
    const val = e.target.value;
    setContent(val);
  };
  const { setIsLoggedIn, setIsAdmin } = useContext(authCtx);
  // const pwdCheckHandler = (e) => {   //추가기능    비밀번호 확인
  //   let val = e.target.value;
  //   setpwd(val);
  // };
  const withdrawlButtonHandler = (e) => {
    deleteUserDataByToken();
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsAdmin(false);
    console.log("딜리트 유저 아이디는 : ", deleteUserDataByToken());
    alert(
      `
        탈퇴가 완료 되었습니다.
        지금까지 '와인게되네' 서비스를 이용해 주셔서 감사합니다. 
         `
    );
    navigate("/"); // 로그아웃 되어야함
  };
  const withdrawlCancelButtonHandler = () => {
    navigate("/");
  };

  return (
    <>
      {isLoading ? (
        <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
          Loading...
        </div>
      ) : !data ? (
        <div className="h-[800px] flex justify-center items-center ">
          <div className="w-[80%] flex justify-center items-center h-[80%] mb-[10%] rounded-xl border-2 border-c1">
            <div>
              <div className="text-3xl text-center">
                로그인 후 이용해주세요.
              </div>
            </div>
          </div>
        </div>
      ) : !isError ? (
        <div className="h-[800px] flex justify-center items-center ">
          <div className="w-[80%] h-[100%]  ">
            <div className="h-[15%]">
              <h1 className=" text-c3 text-3xl mb-[10%] ">회원 탈퇴</h1>
            </div>
            <div className=" h-[350px] ">
              <div className="h-[10%] ">
                <h1 className="text-xl">탈퇴사유</h1>
              </div>
              <div className=" h-[90%]">
                <textarea
                  // 탈퇴 사유 인풋
                  type="text"
                  value={content}
                  onChange={contentChangeHandler}
                  className=" w-[100%] h-[300px] border-[2px] border-c1 break-all"
                ></textarea>
              </div>
            </div>
            <div className="w-[100%] h-[20%] ">
              <div className="p-[10px] m-[10px]">
                {" "}
                <span className="mr-[10px] w-[30%]">회원 아이디</span>
                <span className="h-[25px] bg-[white] w-[30%] text-c1">
                  {data.email}
                </span>
              </div>
              {/* 추가기능 비번확인 */}
              {/* <div className="p-[10px] m-[10px]">
                {" "}
                <span className="mr-[10px] w-[30%]">비밀번호 확인</span>
                <input
                  type="password"
                  value={pwd}
                  onChange={pwdCheckHandler}
                  className="border-[1px] border-c1 h-[25px] w-[30%]"
                ></input>         
              </div> */}
            </div>
            <div className="flex justify-center items-center h-[10%]">
              <span className=" m-[10px] flex justify-center items-center ">
                <button
                  className="w-[150px] h-[50px] rounded-[10px] 
               bg-[#922F2F] text-[18px] text-[#FFFFFF] mb-[20px]"
                  onClick={withdrawlButtonHandler}
                >
                  탈퇴
                </button>
              </span>
              <span className=" m-[10px] flex justify-center items-center">
                <button
                  className="w-[150px] h-[50px] border-c3 border-2 rounded-[10px] 
                text-[18px] text-[#922F2F] mb-[20px] "
                  onClick={withdrawlCancelButtonHandler}
                >
                  취소
                </button>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
          {error.message}
        </div>
      )}
    </>
  );
};

export default Withdrawl;
