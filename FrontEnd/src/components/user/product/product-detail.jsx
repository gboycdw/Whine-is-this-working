import { useContext, useEffect, useState } from "react";
import { cartCtx } from "../../store/cart-context";

const ProductDetail = (props) => {
  // props로 wine 객체를 받아옴
  const { name, nameEng, brand, tags, imgUrl, price, features } = props.product;
  const { alcoholDegree, body, acidity, sugar, tannic, area } = features;

  console.log(tags);
  const { cartData, setCartData } = useContext(cartCtx);
  const [amount, setAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price * amount);

  useEffect(() => {
    setTotalPrice(price * amount);
  }, [amount, price]);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  // 마이너스 버튼 핸들러
  const wineCountMinus = () => {
    if (!amount < 1) {
      let a = amount;
      setAmount(--a);
    }
  };

  // 플러스 버튼 핸들러
  const wineCountAdd = () => {
    let a = amount;
    setAmount(++a);
  };

  // input에 숫자를 입력시 제품 개수 업데이트 해주는 핸들러
  const inputChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  // 장바구니 버튼 핸들러
  // 장바구니 버튼 클릭시 json data를 총가격을 추가하여 만들고 api로 보냄
  const basketButtonHandler = () => {
    const selectedData = props.product;
    selectedData.amount = amount;
    selectedData.isChecked = true;
    const isAdded = cartData.find((data) => data.id === selectedData.id);
    const copiedCartData = [...cartData];
    if (isAdded) {
      alert("이미 같은 제품이 장바구니에 있습니다.");
      return;
    }
    copiedCartData.push(selectedData);

    setCartData(copiedCartData);
    setAmount(1); //개수 초기화
  };

  // 바로 구매 버튼 핸들러
  // json data를 총가격을 추가하여 만들고 api로 보냄
  const buyButtonHandler = () => {
    setAmount(1); //개수 초기화
  };

  // 바디, 산도, 당도, 탄닌 지수 막대바로 표현하는 함수
  const detailStickBarHandler = (feature) => {
    let scoreArr = [];

    // 특정 지수만큼의 빨간 바
    for (let i = 0; i < parseInt(feature[1]); i++) {
      if (i === 0) {
        scoreArr.push(
          <div className=" w-[32px] h-[13px] bg-[#C47474] rounded-l-[10px]"></div>
        );
      } else if (i === parseInt(feature[1]) - 1 && i === 4) {
        scoreArr.push(
          <div className=" w-[32px] h-[13px] bg-[#C47474] rounded-r-[10px]"></div>
        );
      } else {
        scoreArr.push(<div className=" w-[32px] h-[13px] bg-[#C47474]"></div>);
      }
    }

    // (5-특정 지수)만큼의 회색 바 0, 1
    for (let i = 0; i < 5 - parseInt(feature[1]); i++) {
      if (i === 4 - parseInt(feature[1])) {
        scoreArr.push(
          <div className=" w-[32px] h-[13px] bg-[#DEDEDE] opacity-90 rounded-r-[10px]"></div>
        );
      } else {
        scoreArr.push(
          <div className=" w-[32px] h-[13px] bg-[#DEDEDE] opacity-90"></div>
        );
      }
    }
    return scoreArr;
  };

  return (
    <>
      <div className="flex justify-center">
        <div
          className="flex flex-col w-[700px] mt-[50px]
       items-center justify-content content-center"
        >
          {/* 이미지 - 제품 설명 가로 배치를 위한 div flex */}
          <div className="flex items-center">
            {/* 와인 이미지 + 배경 */}
            <div className="flex h-[450px] w-[400px] mr-[10px] bg-[#F6EEEE] items-center justify-center">
              <img className="h-[350px]" src={imgUrl} alt={"와인이미지"}></img>
            </div>

            {/* all) 와인 정보 (이름, 도수, 영어이름, 브랜드, 
                태그, 가격, 바디, 산도, 당도, 탄닌) */}
            <div className="flex flex-col m-[35px] mt-[40px] w-[300px]">
              {/* 1. 와인 이름 + 도수 */}
              <div className="flex space-x-[10px] items-center">
                <span className="text-[30px] font-[600]">{name}</span>
                <span className="text-[18px]">{alcoholDegree}%</span>
              </div>

              {/* 2. 와인 영어 이름 */}
              <span className="text-[16px] mb-[5px]">{nameEng}</span>

              {/* 3. 와인 원산지 */}
              <span className="text-[16px] mb-[10px]">생산지 : {area}</span>

              {/* 4. 와인 태그 */}
              <div className="flex space-x-[10px] mb-[10px]">
                {tags.map((tag) => (
                  <div
                    className="flex w-[50px] h-[25px] 
                  bg-[#E5D1D1] rounded-[5px] items-center justify-center"
                  >
                    <span>{tag}</span>
                  </div>
                ))}
              </div>

              {/* 5. 가격 */}
              <span className="text-[26px] font-[600] mb-[20px]">
                {price}원
              </span>

              {/* 6. 바디, 산도, 당도, 탄닌 */}
              <div class="flex flex-col space-y-[5px]">
                {/* 바디 */}
                <div className="flex items-center">
                  <span className="text-[18px] font-[600] mr-[20px]">바디</span>
                  <div className="flex items-center">
                    {detailStickBarHandler(body)}
                  </div>
                  <div className="ml-[15px]">{body[1]}</div>
                </div>
                {/* 산도 */}
                <div className="flex items-center">
                  <span className="text-[18px] font-[600] mr-[20px]">산도</span>
                  <div className="flex items-center">
                    {detailStickBarHandler(acidity)}
                  </div>
                  <div className="ml-[15px]">{acidity[1]}</div>
                </div>
                {/* 당도 */}
                <div className="flex items-center">
                  <span className="text-[18px] font-[600] mr-[20px]">당도</span>
                  <div className="flex items-center">
                    {detailStickBarHandler(sugar)}
                  </div>
                  <div className="ml-[15px]">{sugar[1]}</div>
                </div>
                {/* 탄닌 */}
                <div className="flex items-center">
                  <span className="text-[18px] font-[600] mr-[20px]">탄닌</span>
                  <div className="flex items-center">
                    {detailStickBarHandler(tannic)}
                  </div>
                  <div className="ml-[15px]">{tannic[1]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
