import { useContext, useEffect, useState } from "react";
import {
    Link
  } from 'react-router-dom';

const MyPageNav = () =>{

    return(
        <>
            <div class="w-[140px] flex flex-col  m-[10px] h-[700px] border-r-[1px] border-barColor justify-between">
                <ul class="relative left-0 flex flex-col ">
                    <li class=" mb-[20px]">
                        <Link to="/" class=" text-c1">
                            장바구니
                        </Link>
                    </li>
                    <li class=" mb-[20px]">
                        <Link to="/" class="text-c2">
                            주문내역
                        </Link>
                    </li>
                    <li class=" mb-[20px]">
                        <Link to="/" class="text-c1">
                            주문취소내역
                        </Link>
                    </li>
                    <li class=" mb-[20px]">
                        <Link to="/" class="text-c1" >
                            개인정보수정
                        </Link>
                    </li>
                    <li class=" mb-[20px] ">
                        <Link to="/" class="text-c1">
                            고객센터
                        </Link>
                    </li>
                    
                    
                </ul>
                <div>
                    
                        <Link to="/"  class="text-c3">
                            회원탈퇴
                        </Link>
                    
                </div>
            </div>
        </>
    )
}

export default MyPageNav;