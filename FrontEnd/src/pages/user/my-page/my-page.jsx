import MyPageNav from "../../../components/user/my-page-component/my-page-nav";
import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import { getUserDataByToken } from "../../../api/api-auth";
const MyPage = () => {
  return (
    <>
      <div class="flex m-[10px] h-[60px] justify-between">
        <div>
          <h1 class="text-3xl flex">마이페이지</h1>
        </div>
      </div>
      <div class="flex ">
        <MyPageNav />
        <div class="m-[10px] w-[85vw]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MyPage;
