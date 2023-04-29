import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import CategoryModal from "./category-modal";

import classes from "./header.module.css";
import { useQuery } from "react-query";
import { getAllCategories } from "../../../api/api-category";
import { useContext } from "react";
import { authCtx } from "../../store/auth-context";

const Header = (props) => {
  const authData = props.authData;
  const [categoryIndex, setCategoryIndex] = useState();

  const { setIsLoggedIn, setIsAdmin, isAdmin } = useContext(authCtx);

  const navigate = useNavigate();

  let { data, isLoading, isError } = useQuery(
    "categories",
    async () => await getAllCategories()
  );

  const categoryOnMouseOverHandler = (e) => {
    setCategoryIndex(e.currentTarget.id);
  }; // 카테고리 영역에서 마우스 올리면 모달창 보임

  const categoryOnMouseOutHandler = (e) => {
    setCategoryIndex(null);
  }; // 카테고리 영역에서 마우스를 떼면 모달창 사라짐

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsAdmin(false);
    alert("로그아웃이 성공적으로 되었습니다😎");
    navigate("/");
  };

  const VisitorNav = () => {
    return (
      <>
        <li>
          <Link to="/login">로그인</Link>
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
        {/* <li>
          <Link to="/mypage/cus-service-center">고객센터</Link>
        </li> */}
      </>
    );
  };

  const LoginUserNav = () => {
    return (
      <>
        <li>
          <Link to="/mypage">{authData?.name}</Link>
        </li>
        <li>
          <Link to="/" onClick={logoutHandler}>
            로그아웃
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/cart">장바구니</Link>
        </li>
        <li>
          <Link to="/mypage/cus-service-center">고객센터</Link>
        </li>
      </>
    );
  };

  const LoginAdminNav = () => {
    return (
      <>
        <li>admin님</li>
        <li>
          <Link to="/manage">관리자페이지</Link>
        </li>
        <li>
          <Link to="/" onClick={logoutHandler}>
            로그아웃
          </Link>
        </li>
      </>
    );
  };

  // 버튼 클릭시 최상단으로 이동하는 함수
  const MoveToTop = (e) => {
    if (!window.scrollY) return;
    // 현재 위치가 이미 최상단일 경우 return

    window.scrollTo({
      top: 0, // 제일 위로
      behavior: "smooth", // 부드럽게 이동하는 속성
    });
  };

  return (
    <div className={classes.header}>
      <div className={classes.logo_div}>
        <Link to="/">
          <img className={classes.logo} src="/logo.png" alt="logo" />
        </Link>
        <div className={classes.nav_top}>
          <ul className={classes.nav_top_ul}>
            {isAdmin ? (
              <LoginAdminNav />
            ) : authData ? (
              <LoginUserNav />
            ) : (
              <VisitorNav />
            )}
          </ul>
        </div>
        <div className={classes.nav_icon}>
          <Link
            to="/search"
            onClick={(e) => {
              e.preventDefault();
            }}
          ></Link>
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
          {isLoading || isError ? (
            <>
              <li className={classes.main_nav_li}>
                <span>WINE</span>
              </li>
              <li className={classes.main_nav_li}>
                <span>COUNTRY</span>
              </li>
              <li className={classes.main_nav_li}>
                <span>PRICE</span>
              </li>
            </>
          ) : (
            data?.map((bundle) => {
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

      {/* 페이지 최상단으로 이동하는 스크롤 버튼 */}
      <div>
        <img
          src="up-arrow.png"
          alt="스크롤"
          onClick={MoveToTop}
          className="h-[60px] w-[60px] fixed right-[5%] bottom-[10%] z-[100] hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
