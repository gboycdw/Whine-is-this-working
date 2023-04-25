const PersonalInfo = () => {
  const person = {
    name: "김필중",
    email: "elice@naver.com",
    address: "서울시 서초구",
    addressDetail: "elice-lab 123호",
    tel: "123-456-789",
  };
  return (
    <>
      <div class=" flex justify-center items-center ">
        <div class="w-[80%] h-[80%] ">
          <div class="h-[15%] ">
            <h1 class="text-3xl mb-[10%]">내 정보</h1>
          </div>
          <div class=" h-[60%] border-2 border-c1 rounded-xl">
            <div class="w-[100%] m-[10px] ">
              <span class="inline-block w-[120px] m-[20px] mb-[20px] ">
                이름
              </span>
              <span class="inline-block w-[120px] m-[20px] mb-[20px]">
                {person.name}
              </span>
            </div>
            <div class="m-[10px]">
              <span class="m-[20px] mb-[20px] inline-block w-[120px]">
                아이디
              </span>
              <span class="m-[20px] mb-[20px] ">{person.email}</span>
            </div>

            <div class="flex-row">
              <span class="m-[10px] ">
                <span class="m-[20px] mb-[0px] inline-block w-[120px]">
                  주소
                </span>
              </span>
              <span class="m-[10px]">
                <span class="">{person.address}</span>
              </span>
              <div class="m-[10px] ">
                <span class="m-[20px]  inline-block w-[120px]">상세주소</span>
                <span class="m-[10px] ml-[20px]">{person.addressDetail}</span>
              </div>
            </div>
            <div class="m-[10px]">
              <span class="m-[20px] inline-block w-[120px] ">연락처</span>
              <span class=" m-[10px] ml-[20px]"> {person.tel}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
