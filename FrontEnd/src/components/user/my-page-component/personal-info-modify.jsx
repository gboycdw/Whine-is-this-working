import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupDom from "./post-popup/popup-dom";
import PopupPostCode from "./post-popup/popup-post-code";
const PersonalInfoModify = () => {
  const navigate = useNavigate();

  const person = {
    name: "김필중",
    email: "elice@naver.com",
    address: "서울시 서초구",
    addressDetail: "elice-lab 123호",
    tel: "123-456-789",
  };
  const [pwd, setPwd] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [tel, setTel] = useState("");

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [fullAddress, setFullAddress] = useState("");
  const pwdChangeHandler = (e) => {
    // 비번 재설정
    const val = e.target.value;
    setPwd(val);
  };
  const pwdCheckChangeHandler = (e) => {
    // 비번 재설정 확인
    const val = e.target.value;
    setPwdCheck(val);
  };
  const addressDetailChangeHandler = (e) => {
    //상세주소
    const val = e.target.value;
    setAddressDetail(val);
  };
  const telInputHandler = (e) => {
    const val = e.target.value;
    if (tel.length > 11) {
      // tel 길이 11이하로
      alert(` 11자리 이하로 입력하세요. `);
      setTel(""); //tel 초기화
      return;
    }
    if (isNaN(Number(val))) {
      // 숫자 입력 확인
      alert(` '-'없이 숫자만 입력해 주세요.`);
      setTel(""); //tel 초기화
      return;
    }
    setTel(val);
  };
  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  const modifySuccessHandler = () => {
    // 수정완료 버튼 핸들러
    console.log(`
    pwd:${pwd}
    pwdCheck:${pwdCheck}
    fullAddress:${fullAddress}
    addressDetail:${addressDetail}
    tel:${tel}
    `);
    let personInfo = {
      pwd: pwd,
      pwdCheck: pwdCheck,
      fullAddress: fullAddress,
      addressDetail: addressDetail,
      tel: tel,
    };
    console.log(personInfo);

    // button 클릭시 비밀번호 재설정 <-> 비밀번호 확인 일치 && 연락처 형식 맞으면 main-page로 이동
    if (
      pwd.trim() === "" ||
      tel.trim() === "" ||
      fullAddress.trim() === "" ||
      addressDetail.trim() === ""
    ) {
      alert(`모든 항목을 입력하세요.`);
      return;
    }
    if (pwd.length < 8) {
      alert(`비밀번호를 8자리 이상 입력하세요.`);
      return;
    }
    if (pwd === pwdCheck) {
      //비밀번호 비교
      alert(`수정이 완료 되었습니다.`);
      navigate("/");
      return;
    } else {
      alert(`비밀번호를 확인하세요.`);
    }
  };

  return (
    <>
      <div class=" flex justify-center items-center ">
        <div class="w-[80%] h-[80%] ">
          <div class="h-[15%]">
            <h1 class="text-3xl mb-[10%]">개인 정보 수정</h1>
          </div>
          <div class=" h-[60%] border-2 border-c1 rounded-xl">
            <div class="w-[100%] m-[10px]">
              <span class="inline-block w-[120px] m-[20px] mb-[20px]">
                이름
              </span>
              <span class="inline-block w-[120px] m-[20px] mb-[20px] text-c1">
                {person.name}
              </span>
            </div>
            <div class="m-[10px]">
              <span class="m-[20px] mb-[20px] inline-block w-[120px]">
                아이디
              </span>
              <span class="m-[20px] mb-[20px] text-c1">{person.email}</span>
            </div>
            <div class="m-[10px]">
              <span class="m-[20px] mb-[20px] inline-block w-[120px]">
                비밀번호 재설정
              </span>
              <input
                onChange={pwdChangeHandler}
                value={pwd}
                type="password"
                class="border-[2px] border-c1 m-[20px] mb-[20px]"
              ></input>
            </div>
            <div class="m-[10px]">
              <span class="m-[20px] mb-[20px] inline-block w-[120px]">
                비밀번호 확인
              </span>
              <input
                type="password"
                onChange={pwdCheckChangeHandler}
                value={pwdCheck}
                class="border-[2px] border-c1 m-[20px] mb-[20px]"
              ></input>
            </div>
            <div class="flex-row">
              <span class="m-[10px] mb-[0px]">
                <span class="m-[20px] mb-[0px] inline-block w-[120px]">
                  주소
                </span>
              </span>
              <span class="m-[10px]">
                <span class="border-[2px] h-[30px] w-[350px]  border-c1 inline-block">
                  {fullAddress}
                </span>{" "}
                {/*받아 온 주소 쓰는 span*/}
                <button
                  class="border-[1px] border-c1 m-[10px] bg-[white] w-[100px] h-[40px] m-[10px] "
                  type="button"
                  onClick={openPostCode}
                >
                  우편번호 찾기
                </button>
                <div id="popupDom">
                  {isPopupOpen && ( // 클릭해서 true면 팝업 띄움.
                    <PopupDom>
                      <PopupPostCode
                        onClose={closePostCode} //팝업닫음.
                        setFullAddress={setFullAddress} //받아온 data.address를 addess에 setAddress로 설정.
                      />
                    </PopupDom>
                  )}
                </div>
              </span>
              <div class="m-[10px] mt-[0px]">
                <span class="m-[20px] mt-[0px] inline-block w-[120px]">
                  상세주소
                </span>
                <input
                  class="border-[2px] border-c1 m-[10px] ml-[20px]"
                  onChange={addressDetailChangeHandler}
                  value={addressDetail}
                ></input>
              </div>
            </div>
            <div class="m-[10px]">
              <span class="m-[20px] inline-block w-[120px] ">연락처</span>
              <input
                type="tel"
                onChange={telInputHandler}
                value={tel}
                class="border-[2px] border-c1 m-[10px] ml-[20px]"
              ></input>
            </div>
          </div>
          <div class="m-[10px] flex justify-center items-center h-[25%]">
            <button
              onClick={modifySuccessHandler}
              class="border-[1px] border-c1 m-[10px] bg-[white] w-[60px] h-[40px]"
            >
              수정완료
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoModify;
