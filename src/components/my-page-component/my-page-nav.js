import { useRef, useEffect, useState } from "react";
import {
    Link
  } from 'react-router-dom';
const MyPageNav = () =>{
    const linkRef1 = useRef();
    const linkRef2 = useRef();
    const linkRef3 = useRef();
    const linkRef4 = useRef();
    const  [color,setColor] = useState("text-c1");
   
        const navBarHandler =(e)=>{
          linkRef1.current.style.color="#c9c9c9"
          linkRef2.current.style.color="#c9c9c9"
          linkRef3.current.style.color="#c9c9c9"
          linkRef4.current.style.color="#c9c9c9"
          e.target.style.color = "#060606"
        }
       
    return(
        <>
            <div class="w-[140px] flex flex-col  m-[10px] h-[700px] border-r-[1px] border-barColor justify-between">
                <ul class="relative left-0 flex flex-col ">
                    <li class=" mb-[20px]">
                        <Link to="/" class={color}>
                            장바구니
                        </Link>
                    </li>
                    <li class=" mb-[20px]">
                        <Link to="/mypage/order-infromation"ref={linkRef1} onClick={navBarHandler} class="text-c2" >
                            주문내역
                        </Link>
                    </li>
                    <li class=" mb-[20px]">
                        <Link to="/mypage/order-cancel" ref={linkRef2} onClick={navBarHandler} class={color}>
                            주문취소내역
                        </Link>
                    </li>
                    <li class=" mb-[20px]">
                        <Link to="/mypage/personal-info-modify" ref={linkRef3} onClick={navBarHandler} class={color} >
                            개인정보수정
                        </Link>
                    </li>
                    <li class=" mb-[20px] ">
                        <Link to="/mypage/cus-service-center" ref={linkRef4} onClick={navBarHandler} class={color}>
                            고객센터
                        </Link>
                    </li>
                </ul>
                <div>
                        <Link to="/mypage/withdrawl"  onClick={navBarHandler} class="text-c3">
                            회원탈퇴
                        </Link>
                </div>
            </div>
        </>
    )
}

export default MyPageNav;