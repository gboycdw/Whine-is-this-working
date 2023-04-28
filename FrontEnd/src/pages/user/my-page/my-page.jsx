import MyPageNav from "../../../components/user/my-page-component/my-page-nav";
import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";

import { Link } from "react-router-dom";
import { getUserDataByToken } from "../../../api/api-auth";
const MyPage = () => {
  const { data: authData } = useQuery(["auth"], () => getUserDataByToken());

  return (
    <>
      {authData ? (
        <>
          <div className="flex m-[10px] h-[60px] justify-between">
            <div>
              <Link to="/mypage" className="text-3xl flex">
                마이페이지
              </Link>
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
