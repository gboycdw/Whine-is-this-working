const SignUpCompletePage = (props) => {
  // 회원가입 완료 페이지 넘어가자마자 스크롤 위로 올림
  window.scrollTo({
    top: 0, // 제일 위로
    behavior: "smooth", // 부드럽게 이동하는 속성
  });

  return (
    <>
      <div className="flex flex-col items-center">
        {/* 회원가입 완료 Title */}
        <div className="flex items-center mb-[20px] mt-[120px] mb-[60px]">
          <h1 className="text-[32px] font-[600]">회원가입 완료</h1>
        </div>

        {/* 회원가입 완료 안내 문구 */}
        <img
          src="/complete-check.png"
          alt="complete-check-icon"
          className="h-[80px]"
        />
        <span className="text-[25px] mt-[50px] mb-[70px]">
          회원가입이 정상적으로 완료되었습니다.
        </span>
      </div>
    </>
  );
};

export default SignUpCompletePage;
