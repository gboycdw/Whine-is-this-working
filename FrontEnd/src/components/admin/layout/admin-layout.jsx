import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { getUserDataByToken } from "../../../api/api-auth";
import { authCtx } from "../../store/auth-context";
import AdminMainNav from "./admin-main-nav";

const AdminLayout = (props) => {
  const authData = props.authData;
  const { isAdmin, setIsLoggedIn, setIsAdmin, isLoggedIn, token } =
    useContext(authCtx);

  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate("/");
  };

  return (
    <div className="flex w-[1300px] min-h-screen m-auto border-x border-color2">
      {!isAdmin ? (
        <div className="inline-block absolute top-[50%] left-[50%] tanslate-x-[-50%] tanslate-y-[-50%] flex flex-col justify-center items-center">
          <h1 className="font-bold">접근이 불가능한 페이지입니다.</h1>
          <Link className="underline" to="/">
            홈으로 이동
          </Link>
        </div>
      ) : (
        <>
          <AdminMainNav />
          <div className="w-full flex flex-col">
            <div className="flex px-10 justify-between items-center h-[80px] border-b border-color2">
              <h1 className="text-lg">{props.title}</h1>
              <div className="flex gap-6">
                <Link to="/">고객페이지</Link>
                <Link to="/" onClick={logoutHandler}>
                  로그아웃
                </Link>
              </div>
            </div>
            {props.children}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminLayout;
