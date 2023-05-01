import DaumPostcode from "react-daum-postcode";

const SignupOrderPostCode = (props) => {
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log("data.zonecode", data.zonecode);
    props.setFullAddress(fullAddress);
    props.onClose();
  };

  const postCodeStyle = {
    display: "flex",
    position: "absolute",
    top: "70%",
    width: "600px",
    height: "580px",
    padding: "7px",
  };

  return (
    <div className="flex content-center">
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />

      {/* 닫기 버튼 */}
      <button
        type="button"
        className="text-[white] bg-[#AA7373] rounded-[5px] w-[30px]"
        onClick={() => {
          props.onClose();
        }}
      >
        <span className="text-[20px]">x</span>
      </button>
    </div>
  );
};

export default SignupOrderPostCode;
