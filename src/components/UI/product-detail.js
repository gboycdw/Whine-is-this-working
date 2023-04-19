import classes from "./product-detail.module.css"

//import imgA from 'https://pixabay.com/ko/vectors/%ec%99%80%ec%9d%b8-%eb%a7%88%ec%8b%9c%eb%8b%a4-%eb%b3%91-%ec%9d%8c%eb%a3%8c-%ec%88%a0-150955/';
const ProductDetail = () => {
    const wineImgUrl = "/logo512.png"
    const wine = 
        {
            name: "xx와인",
            country: "미국",
            price: 50000,
            alcohol_degree: 13,
        };
    
    return (
    <>
        <div className={classes.product_detail_container}>  {/*product-detail 전체 div*/}
            <div className={classes.product_detail_wrap}>    {/*이미지~ 장바구니, 바로구매하기 까지 div*/}
                <div className={classes.product_detail_left}>
                    <img className={classes.product_detail_wine_img} src={wineImgUrl} alt={"와인이미지"}>
                    </img>  
                </div>
                <div>
                    <div className={classes.product_detail_right}>
                        <p  className={classes.product_detail_right_name}>
                            이름: {wine.name}
                        </p>
                        <p className={classes.product_detail_right_coutry}>
                            나라: {wine.country}
                        </p>
                        <p className={classes.product_detail_right_price}>
                            가격: {wine.price}원
                        </p>
                        <p className={classes.product_detail_right_alcohol_degree}>
                            알코올 도수: {wine.alcohol_degree}%
                        </p>
                    </div>
                    <div className={classes.product_detail_right_button_input_container}>
                        <input className={classes.product_detail_right_button_input}>       
                        </input>
                        <button className={classes.product_detail_right_button_plus}>
                            +
                        </button>
                        <button className={classes.product_detail_right_button_plus}>
                            -
                        </button>
                        <span className={classes.product_detail_right_button_total_price}>
                            수량x가격:
                        </span>
                    </div>
                    <div className={classes.product_detail_right_button_container}>  {/*장바구니 , 구매하기 버튼ㅎ*/}
                        <button className={classes.product_detail_right_button_basket}>
                            장바구니
                        </button>
                        <button className={classes.product_detail_right_button_buy}>
                            바로구매하기
                        </button>
                    </div>
                </div>
            </div>
            <div className={classes.product_detail_explain} >    {/*제품 상세 설명 div*/}
                <h1 className={classes.product_detail_explain_h1}>
                    제품 상세 설명
                </h1>
            </div>
        </div>
    </>
    )
  };
  
  export default ProductDetail;
  