const PersonalInfoModify = () => {
  // layotut 작업중...
  return (
    <>
      <div class="h-[100vh] flex justify-center items-center ">
        <div class="w-[80%] h-[80%] bg-c3">
          <div class="bg-[green]">
            <h1 class="text-3xl mb-[10%]">회원 정보 수정</h1>
          </div>
          <div class="bg-[gray]">
            <div class="w-[100%] m-[10px]">
              <span class="w-[50%]">이름</span>
              <span class="w-[100px]">아무개</span>
            </div>
            <div class="m-[10px]">
              <span>아이디</span>
              <span>anyDog@gmail.com</span>
            </div>
            <div class="m-[10px]">
              <span>비밀번호</span>
              <input class="border-[2px] border-c1 "></input>
            </div>
            <div class="m-[10px]">
              <span>비밀번호 확인</span>
              <input class="border-[2px] border-c1 "></input>
            </div>
            <div>
              <div class="m-[10px]">
                <span>주소</span>
              </div>
              <div class="m-[10px]">
                <input class="border-[2px] border-c1 "></input>
                <button class="border-[2px] border-c1 ">우편번호 찾기</button>
              </div>
              <div class="m-[10px]">
                <input class="border-[2px] border-c1 "></input>
              </div>
            </div>
            <div class="m-[10px]">
              <span>연락처</span>
              <input class="border-[2px] border-c1 "></input>
            </div>
          </div>
          <div class="m-[10px]">
            <button class="border-[2px] border-c1 ">수정완료</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoModify;
