import Layout from "../../../components/user/layout/layout";
import MyPageNav from "../../../components/user/my-page-component/my-page-nav";
import { Outlet } from "react-router-dom";
const MyPage = () => {
  return (
    <>
      <Layout>
        <div class="flex m-[10px] h-[60px] justify-between">
          <div>
            <h1 class="text-3xl flex">마이페이지</h1>
          </div>
          <div class="flex ">
            <span class="text-c1">마이페이지 </span>
            <span class="text-c1">{">"} </span>
            <span> 주문내역</span>
          </div>
        </div>
        <div class="flex">
          <MyPageNav />
          <div class="m-[10px] w-[85vw] bg-[]">
            <Outlet />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MyPage;
