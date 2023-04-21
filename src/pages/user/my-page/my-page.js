import Layout from "../../../components/layout/layout";
import MyPageNav from "../../../components/my-page-component/my-page-nav";
import { Outlet } from "react-router-dom";
const MyPage = () => {
  return(
    <>
      <Layout>
          <div class="flex m-[10px] h-[60px] justify-between">
            <div>
              <h1 class="text-3xl">마이페이지</h1>
            </div>
            <div>
              <span class="text-c1">마이페이지 </span>
              <span class="text-c1">{">"} </span>
              <span> 주문내역</span>
            </div>
          </div>
          <MyPageNav/>
          <Outlet/>
      </Layout>
    </>
  );
};

export default MyPage;
