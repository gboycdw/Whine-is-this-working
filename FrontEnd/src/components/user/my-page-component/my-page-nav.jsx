import { useRef, useState } from "react";
import { Link } from "react-router-dom";
const MyPageNav = () => {
  const linkRef1 = useRef();
  const linkRef2 = useRef();
  const linkRef3 = useRef();
  const linkRef4 = useRef();
  const linkRef5 = useRef();
  const [color] = useState("text-c1");
  const navBarHandler = (e) => {
    linkRef1.current.style.color = "#c9c9c9";
    linkRef2.current.style.color = "#c9c9c9";
    linkRef3.current.style.color = "#c9c9c9";
    linkRef4.current.style.color = "#c9c9c9";
    if (e.target != linkRef5.current) {
      //회원탈퇴 요소가 아니면 검은색으로
      e.target.style.color = "#060606";
    }
  };
  const current = window.location.href;

  return (
    <>
      <div className="w-[180px] flex flex-col m-[10px] mb-[30px]  border-r-[1px] border-barColor justify-between">
        <ul className="relative left-0 flex flex-col ">
          <li className=" mb-[20px]">
            <Link to="/cart" className={color}>
              장바구니
            </Link>
          </li>
          <li className=" mb-[20px]">
            <Link
              to="/mypage/ordered-items-list"
              ref={linkRef1}
              onClick={navBarHandler}
              className="text-c2"
            >
              주문내역
            </Link>
          </li>
          <li className=" mb-[20px]">
            <Link
              to="/mypage/personal-info"
              ref={linkRef2}
              onClick={navBarHandler}
              className={color}
            >
              내 정보
            </Link>
          </li>
          <li className=" mb-[20px]">
            <Link
              to="/mypage/personal-info-modify"
              ref={linkRef3}
              onClick={navBarHandler}
              className={color}
            >
              개인정보 수정
            </Link>
          </li>
          <li className=" mb-[20px] ">
            <Link
              to="/mypage/cus-service-center"
              ref={linkRef4}
              onClick={navBarHandler}
              className={color}
            >
              고객센터
            </Link>
          </li>
        </ul>
        <div>
          <Link
            to="/mypage/withdrawl"
            ref={linkRef5}
            onClick={navBarHandler}
            className="text-c3"
          >
            회원탈퇴
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyPageNav;
