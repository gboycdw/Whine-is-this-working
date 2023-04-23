import { useState } from "react";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
const PersonalInfoModify = () => {
  const [pwd, setPwd] = useState("");
  const pwdChangeHandler = (e) => {
    const val = e.target.value;
    setPwd(val);
  };
  const person = {
    name: "김필중",
    email: "elice@naver.com",
    address: "서울시 서초구",
    addressDetail: "elice-lab 123호",
    tel: "123-456-789",
  };
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  const [adressDetail, setAdressDetail] = useState("");
  const [tel, setTel] = useState("");

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [fullAddress, setFullAddress] = useState("");
  const adressDetailChangeHandler = (e) => {
    const val = e.target.value;
    setAdressDetail(val);
  };
  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div class=" flex justify-center items-center ">
        <div class="w-[80%] h-[80%] ">
          <div class="h-[15%]">
            <h1 class="text-3xl mb-[10%]">개인 정보 수정</h1>
          </div>
          <div class=" h-[60%]">
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
              <input class="border-[2px] border-c1 m-[20px] mb-[20px]"></input>
            </div>
            <div class="m-[10px]">
              <span class="m-[20px] mb-[20px] inline-block w-[120px]">
                비밀번호 확인
              </span>
              <input class="border-[2px] border-c1 m-[20px] mb-[20px]"></input>
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
                  onChage={adressDetailChangeHandler}
                  value={adressDetail}
                ></input>
              </div>
            </div>
            <div class="m-[10px]">
              <span class="m-[20px] inline-block w-[120px] ">연락처</span>
              <input class="border-[2px] border-c1 m-[10px] ml-[20px]"></input>
            </div>
          </div>
          <div class="m-[10px] flex justify-center items-center h-[25%]">
            <button class="border-[1px] border-c1 m-[10px] bg-[white] w-[60px] h-[40px]">
              수정완료
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoModify;
