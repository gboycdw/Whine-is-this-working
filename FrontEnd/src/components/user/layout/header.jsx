import { Link } from "react-router-dom";
import { useState } from "react";
import CategoryModal from "./category-modal";

import classes from "./header.module.css";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { authState } from "../../store/auth-context";
import { useQuery } from "react-query";
import { getAllCategories } from "../../../api/api-category";
// import { useRecoilState } from "recoil";
// import { authState } from "../../store/auth-context";

const Header = () => {
  // const [auth, setAuth] = useRecoilState(authState);
  const [categoryIndex, setCategoryIndex] = useState();
  const [login, setLogin] = useState(true);
  // 메인네비게이션 카테고리 모달을 컨트롤하기 위한 state 관리

  let { data, isLoading, isError, error } = useQuery(
    "categories",
    async () => await getAllCategories()
  );
  if (isLoading) {
    data = [];
  }

  console.log(data);

  const categoryOnMouseOverHandler = (e) => {
    setCategoryIndex(e.currentTarget.id);
  }; // 카테고리 영역에서 마우스 올리면 모달창 보임

  const categoryOnMouseOutHandler = (e) => {
    setCategoryIndex(null);
  }; // 카테고리 영역에서 마우스를 떼면 모달창 사라짐

  const LoginUserNav = () => {
    return (
      <>
        <li>
          <Link
            to="/login"
            onClick={(e) => {
              e.preventDefault();
              setLogin();
            }}
          >
            로그인
          </Link>
        </li>
        <li>
          <Link to="/signup">회원가입</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/cart">장바구니</Link>
        </li>
        <li>
          <Link to="/order">주문</Link>
        </li>
        <li>
          <Link to="/cs">고객센터</Link>
        </li>
      </>
    );
  };

  const LoginAdminNav = () => {
    return (
      <>
        <li>
          <Link to="/manage">관리자페이지</Link>
        </li>
        <li>
          <Link to="/">admin님</Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            로그아웃
          </Link>
        </li>
      </>
    );
  };

  return (
    <div className={classes.header}>
      <div className={classes.logo_div}>
        <Link to="/">
          <img className={classes.logo} src="/logo.png" alt="logo" />
        </Link>
        <div className={classes.nav_top}>
          <ul className={classes.nav_top_ul}>
            {!login ? <LoginUserNav /> : <LoginAdminNav />}
          </ul>
        </div>
        <div className={classes.nav_icon}>
          <Link to="/search">
            <img
              className={classes.search_icon}
              src="/search.png"
              alt="search_icon"
            />
          </Link>
          <Link to="/cart">
            <img
              className={classes.cart_icon}
              src="/shopping-cart .png"
              alt="shopping_cart_icon"
            />
          </Link>
        </div>
      </div>
      <div className={classes.main_nav}>
        <ul className="relative w-[800px] h-full grid grid-cols-4">
          {/* 카테고리 타이틀들 배열로로 카테고리바 네비게이션 생성 */}
          {data ? (
            data.map((bundle) => {
              return (
                <li
                  key={bundle._id}
                  id={bundle._id}
                  className={classes.main_nav_li}
                  onMouseOver={categoryOnMouseOverHandler}
                  onMouseOut={categoryOnMouseOutHandler}
                >
                  <span>{bundle.title}</span>

                  <CategoryModal
                    categoryBundle={bundle}
                    categoryIndex={categoryIndex}
                  />
                  {/* <CategoryModal categoryBundle={bundle} /> */}
                </li>
              );
            })
          ) : (
            <ul className="relative w-[800px] h-full grid grid-cols-4">
              <li className={classes.main_nav_li}>
                <span>WINE</span>
              </li>
              <li className={classes.main_nav_li}>
                <span>COUNTRY</span>
              </li>
              <li className={classes.main_nav_li}>
                <span>PRICE</span>
              </li>
            </ul>
          )}
          {/* isCategoryModal state가 true냐 false냐에따라 모달창 컨트롤하는 부분 */}
          <li className={classes.main_nav_li}>
            <Link to="/category/best">
              <span>BEST</span>
            </Link>
          </li>
        </ul>
        {/* </ul> */}
      </div>
    </div>
  );
};

export default Header;
