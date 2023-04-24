import { Link } from "react-router-dom";
import { useState } from "react";
import CategoryModal from "./category-modal";

import classes from "./header.module.css";
import styled from "styled-components";
import uuid from "react-uuid";
// import { useRecoilState } from "recoil";
// import { authState } from "../../store/auth-context";

const categoryBundle = [
  // 카테고리 더미데이터 (각 카테고리의 타이틀이 있고 카테고리리스트들이 자식요소로있음)
  {
    id: 0,
    title: "wine", // 카테고리 번들의 타이틀
    link: "/product/category/wine", // 카테고리 타이틀의 링크주소
    categories: [
      // 카테고리 번들의 각 카테고리 객체들
      { id: 1, name: "레드와인", link: "/product/category/red" },
      { id: 2, name: "화이트와인", link: "/product/category/white" },
      { id: 3, name: "로제와인", link: "/product/category/rose" },
      { id: 4, name: "무알콜", link: "/product/category/nonealchol" },
    ],
  },
  {
    id: 1,
    title: "country",
    link: "/product/category/country",
    categories: [
      { id: 1, name: "스페인", link: "/product/category/spain" },
      { id: 2, name: "프랑스", link: "/product/category/france" },
      { id: 3, name: "미국", link: "/product/category/usa" },
    ],
  },
  {
    id: 2,
    title: "가격대별",
    link: "/product/category/price",
    categories: [
      { id: 1, name: "10000 ~ 30000", link: "/product/category/lowprice" },
    ],
  },
];

const Header = () => {
  // const [auth, setAuth] = useRecoilState(authState);
  const [categoryIndex, setCategoryIndex] = useState();
  const [isLogin, setIsLogin] = useState("false");
  // 메인네비게이션 카테고리 모달을 컨트롤하기 위한 state 관리

  const categoryOnMouseOverHandler = (e) => {
    setCategoryIndex(+e.currentTarget.id);
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
              setIsLogin(true);
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
              setIsLogin(false);
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
            {!isLogin ? <LoginUserNav /> : <LoginAdminNav />}
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
        <MainNavUl>
          {/* 카테고리 타이틀들 배열로로 카테고리바 네비게이션 생성 */}
          {categoryBundle.map((bundle) => {
            return (
              <li
                key={uuid()}
                id={bundle.id}
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
          })}
          {/* isCategoryModal state가 true냐 false냐에따라 모달창 컨트롤하는 부분 */}
          <li className={classes.main_nav_li}>
            <Link to="/product/category/best">
              <span>BEST</span>
            </Link>
          </li>
        </MainNavUl>
        {/* </ul> */}
      </div>
    </div>
  );
};

const MainNavUl = styled.ul`
  position: relative;
  width: 800px;
  height: 100%;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(${categoryBundle.length + 1}, 1fr);
`;

export default Header;
