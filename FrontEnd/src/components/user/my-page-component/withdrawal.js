const Withdrawl = () => {
  return (
    <>
      <div class="h-[100vh] flex justify-center items-center ">
        <div class="w-[80%] h-[80%] ">
          <div class="w-[100%] h-[50%] ">
            <div class="h-[10%] ">
              <h1 class="text-xl">탈퇴사유</h1>
            </div>
            <div class=" h-[90%]">
              <input
                value="탈퇴 사유를 적어 주세요."
                class="w-[100%] h-[100%] border-[2px] border-c1 "
              ></input>
            </div>
          </div>
          <div class="w-[100%] h-[30%] ">
            <div class="p-[10px] m-[10px]">
              {" "}
              <span class="mr-[10px] w-[30%]">회원 아이디</span>
              <span class="h-[25px] bg-[white] w-[30%] text-c1">
                Elice1234@gmail.com
              </span>
            </div>
            <div class="p-[10px] m-[10px]">
              {" "}
              <span class="mr-[10px] w-[30%]">비밀번호 확인</span>
              <input class="border-[1px] border-c1 h-[25px] w-[30%]"></input>
            </div>
          </div>
          <div class="w-[100%] flex justify-center items-center">
            <button class="border-[1px] border-c1 m-[10px] bg-[white] w-[60px] h-[40px] flex justify-center items-center ">
              <span>탈퇴</span>
            </button>
            <button class="border-[1px] border-c1 border-dashed m-[10px] bg-[white] w-[60px] h-[40px]">
              <span>취소</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdrawl;
