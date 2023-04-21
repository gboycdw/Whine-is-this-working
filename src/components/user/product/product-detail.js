import { useContext, useEffect, useState } from "react";
import { cartCtx } from "../../store/cart-context";
import classes from "./product-detail.module.css";

//import imgA from 'https://pixabay.com/ko/vectors/%ec%99%80%ec%9d%b8-%eb%a7%88%ec%8b%9c%eb%8b%a4-%eb%b3%91-%ec%9d%8c%eb%a3%8c-%ec%88%a0-150955/';
const ProductDetail = (props) => {
  const { name, country, imgUrl, alcoholDegree, price, info } = props.product; // props로 wine 객체를 받아옴.
  const { cartData, setCartData } = useContext(cartCtx);
  const [amount, setAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price * amount);

  useEffect(() => {
    setTotalPrice(price * amount);
  }, [amount, price]);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  const wineCountMinus = () => {
    // 마이너스 버튼 핸들러
    if (!amount < 1) {
      let a = amount;
      setAmount(--a);
    }
  };
  const wineCountAdd = () => {
    // 플러스 버튼 핸들러
    let a = amount;
    setAmount(++a);
  };
  const inputChangeHandler = (e) => {
    // input에 숫자를 입력시 제품의 개수를 setAmount를 통해 useState로 다시 설정
    setAmount(e.target.value);
  };
  const basketButtonHandler = () => {
    //장바구니 버튼 클릭시 핸들러 json data를 총가격을 추가하여 만들고 api로 보낸다
    const selectedData = props.product;
    selectedData.amount = amount;
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
  const buyButtonHandler = () => {
    //바로 구매 버튼 핸들러 json data를 총가격을 추가하여 만들고 api로 보낸다

    setAmount(1); //개수 초기화
  };
  return (
    <>
      <div class="pt-16">
        {" "}
        {/*product-detail 전체 div*/}
        <div className={classes.product_detail_wrap}>
          {" "}
          {/*이미지~ 장바구니, 바로구매하기 까지 div*/}
          <div className={classes.product_detail_left}>
            <div className={classes.product_detail_wine_img_container}>
              <img
                className={classes.product_detail_wine_img}
                src={imgUrl}
                alt={"와인이미지"}
              ></img>
            </div>
          </div>
          <div>
            <div className={classes.product_detail_right}>
              <p className={classes.product_detail_right_name_p}>
                이름: {name}
              </p>
              <p className={classes.product_detail_right_coutry_p}>
                나라: {country}
              </p>
              <p className={classes.product_detail_right_price_p}>
                가격: {price.toLocaleString()}원
              </p>
              <p className={classes.product_detail_right_alcohol_degree_p}>
                알코올 도수: {alcoholDegree}%
              </p>
            </div>
            <div
              className={classes.product_detail_right_button_input_container}
            >
              <button
                className={classes.product_detail_right_button_minus}
                onClick={wineCountMinus}
              >
                -
              </button>
              <input
                type="number"
                min="1"
                max="20"
                className={classes.product_detail_right_button_input}
                onChange={inputChangeHandler}
                value={amount}
              />{" "}
              {/*input은 최소 1~20개 까지 문자열은 x */}
              <button
                className={classes.product_detail_right_button_plus}
                onClick={wineCountAdd}
              >
                +
              </button>
              <span className={classes.product_detail_right_button_total_price}>
                {amount} x {price.toLocaleString()}원 = 총 결제금액:{" "}
                {totalPrice.toLocaleString()}원
              </span>
            </div>
            <div className={classes.product_detail_right_button_container}>
              {" "}
              {/*장바구니 , 구매하기 버튼*/}
              <button
                className={classes.product_detail_right_button_basket}
                onClick={basketButtonHandler}
              >
                장바구니
              </button>
              <button
                className={classes.product_detail_right_button_buy}
                onClick={buyButtonHandler}
              >
                바로구매하기
              </button>
            </div>
          </div>
        </div>
        <div className={classes.product_detail_explain}>
          {/*제품 상세 설명 div*/}
          <h1 className={classes.product_detail_explain_h1}>{info}</h1>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
