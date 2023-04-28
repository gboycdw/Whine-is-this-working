import MyPageNav from "../../../components/user/my-page-component/my-page-nav";
import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import { getUserDataByToken } from "../../../api/api-auth";
const MyPage = () => {
  const { data: authData } = useQuery(["auth"], () => getUserDataByToken());

  return (
    <>
      {authData ? (
        <>
          <div className="flex m-[10px] h-[60px] justify-between">
            <div>
              <h1 className="text-3xl flex">마이페이지</h1>
            </div>
          </div>
          <div className="flex ">
            <MyPageNav />
            <div className="m-[10px] w-[85vw]">
              <Outlet context={{ authData }} />
            </div>
          </div>
        </>
      ) : (
        <>/</>
      )}
    </>
  );
};

export default MyPage;
