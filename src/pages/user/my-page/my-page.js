import { useContext, useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import MyPageNav from "../../../components/my-page-component/my-page-nav";
import MyPagePesonalInfo from "../../../components/my-page-component/personal-info-modify";
import CusServiceCenter from "../../../components/my-page-component/cus-service-center";
import OrderCancelInfo from "../../../components/my-page-component/oreder-cancel-info";
import PersonalInfoModify from "../../../components/my-page-component/personal-info-modify";
import Withdrawl from "../../../components/my-page-component/withdrawal";
import { Routes, Route, Link } from 'react-router-dom';
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
          <MyPageNav>
          </MyPageNav>
          <MyPagePesonalInfo></MyPagePesonalInfo>
          <CusServiceCenter></CusServiceCenter>
          <OrderCancelInfo></OrderCancelInfo>
          <PersonalInfoModify></PersonalInfoModify>
          <Withdrawl></Withdrawl>
      </Layout>
    </>
  );
};

export default MyPage;
