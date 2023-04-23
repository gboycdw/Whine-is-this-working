import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Button from "../../UI/button";
import { useNavigate } from "react-router-dom";

const NewProduct = (props) => {
  const product = props.product;
  const { register } = useForm();
  const navigate = useNavigate();

  const [isImageModal, setIsImageModal] = useState(false);
  const [imgFile, setImgFile] = useState(
    product ? product.imgUrl : "/defaultImage.jpg"
  );
  const imgRef = useRef();

  const [brand, setBrand] = useState(product ? product.brand : "");
  const [name, setName] = useState(product ? product.name : "");
  const [price, setPrice] = useState(product ? product.price : "");
  const [imgUrl, setImgUrl] = useState(
    product ? product.imgUrl : "/defaultImage.jpg"
  );
  const [discountPrice, setDiscountPrice] = useState(
    product ? product.discountPrice : ""
  );
  const [inventory, setInventory] = useState(product ? product.inventory : "");
  const [country, setCountry] = useState(
    product ? product.feature.country : ""
  );
  const [area, setArea] = useState(product ? product.feature.area : "");
  const [color, setColor] = useState(product ? product.feature.color : "");
  const [sugar, setSugar] = useState(product ? product.feature.sugar : "");
  const [acidity, setAcidity] = useState(
    product ? product.feature.acidity : ""
  );
  const [tannic, setTannic] = useState(product ? product.feature.tannic : "");
  const [body, setBody] = useState(product ? product.feature.body : "");
  const [alcoholDegree, setAlcoholDegree] = useState(
    product ? product.feature.alcoholDegree : ""
  );
  const [isPicked, setIsPicked] = useState(product ? product.isPicked : false);
  const [isBest, setIsBest] = useState(product ? product.isBest : false);
  const [info, setInfo] = useState(product ? product.info : "");

  const inputChangeHandler = (e) => {
    if (e.target.id === "brand") {
      setBrand(e.target.value);
    }
    if (e.target.id === "name") {
      setName(e.target.value);
    }
    if (e.target.id === "price") {
      setPrice(e.target.value);
    }
    if (e.target.id === "discountPrice") {
      setDiscountPrice(e.target.value);
    }
    if (e.target.id === "inventory") {
      setInventory(e.target.value);
    }
    if (e.target.id === "country") {
      setCountry(e.target.value);
    }
    if (e.target.id === "area") {
      setArea(e.target.value);
    }
    if (e.target.id === "color") {
      setColor(e.target.value);
    }
    if (e.target.id === "sugar") {
      setSugar(e.target.value);
    }
    if (e.target.id === "acidity") {
      setAcidity(e.target.value);
    }
    if (e.target.id === "tannic") {
      setTannic(e.target.value);
    }
    if (e.target.id === "body") {
      setBody(e.target.value);
    }
    if (e.target.id === "alcoholDegree") {
      setAlcoholDegree(e.target.value);
    }
    if (e.target.id === "isPicked") {
      setIsPicked(!e.target.checked);
    }
    if (e.target.id === "isBest") {
      setIsBest(!e.target.checked);
    }
  };

  const editorChangeHandler = (e, editor) => {
    const info = editor.getData();
    setInfo(info);
  };

  const formCancleHandler = (e) => {
    e.preventDefault();
    if (window.confirm("정말로 취소하시겠습니까? 입력한 내용은 삭제됩니다.")) {
      return navigate("/manage/product_list");
    } else {
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      brand,
      name,
      price,
      imgUrl,
      discountPrice,
      inventory,
      country,
      area,
      color,
      feature: {
        sugar,
        acidity,
        tannic,
        body,
      },
      info,
      isPicked: false,
      isBest: false,
    };

    console.log(data);
  };

  const toggleImageModalHandler = (e) => {
    e.preventDefault();
    if (isImageModal) {
      setIsImageModal(false);
    } else {
      setIsImageModal(true);
    }
  };

  const uploadImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const addImageHandler = (e) => {
    e.preventDefault();
    setImgUrl(imgFile);
    setIsImageModal(false);
  };

  return (
    <div class="flex flex-col p-10 bg-color3">
      {isImageModal ? (
        <div class="fixed w-[500px] h-[600px] bg-[#ffffff] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-50 p-10 rounded-xl flex flex-col items-center gap-5">
          <div class="flex w-full flex-col items-center border p-5">
            <div class="h-96">
              <img
                class="h-[300px]"
                src={imgFile ? imgFile : ``}
                alt="프로필 이미지"
              />
            </div>
            <input
              type="file"
              accept="image/*"
              ref={imgRef}
              onChange={uploadImgFile}
            ></input>
          </div>
          <div class="flex gap-3">
            <div onClick={toggleImageModalHandler}>
              <Button isConfirm={false}>취소</Button>
            </div>
            <div onClick={addImageHandler}>
              <Button isConfirm={true}>이미지 추가</Button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <form ction="">
        <div class="flex">
          <div class="flex flex-col gap-10 w-full p-10 bg-[#ffffff]">
            <div class="flex gap-28 pb-10 border-b justify-between relative">
              <div class="flex flex-col justify-center gap-4">
                <div class="flex justify-center items-center w-[464px] border p-10">
                  <img class="h-96" src={imgUrl} alt="wine" />
                </div>
                <button
                  class="border h-12 rounded border-color1 border-2 text-color1 font-bold"
                  onClick={toggleImageModalHandler}
                >
                  이미지 추가
                </button>
              </div>
              <div class="flex flex-grow flex-col gap-4 justify-center">
                <div class="flex gap-3 items-center">
                  <span class="w-24 font-bold">브랜드명</span>
                  <input
                    type="text"
                    class="border rounded flex-grow h-8 px-2"
                    onChange={inputChangeHandler}
                    id="brand"
                    value={brand}
                  />
                </div>
                <div class="flex gap-3 items-center">
                  <span class="w-24 font-bold">상품명</span>
                  <input
                    type="text"
                    class="border rounded flex-grow h-8 px-2"
                    onChange={inputChangeHandler}
                    id="name"
                    value={name}
                  />
                </div>
                <div class="flex gap-3 items-center">
                  <span class="w-24 font-bold">판매가격</span>
                  <input
                    type="text"
                    class="border rounded flex-grow h-8 px-2"
                    onChange={inputChangeHandler}
                    id="price"
                    value={price}
                  />
                </div>
                <div class="flex gap-3 items-center">
                  <span class="w-24 font-bold">할인가격</span>
                  <input
                    type="text"
                    class="border rounded flex-grow h-8 px-2"
                    onChange={inputChangeHandler}
                    id="discountPrice"
                    value={discountPrice}
                  />
                </div>
                <div class="flex gap-3 items-center justify-end">
                  <span class="w-24 font-bold">재고수량</span>
                  <input
                    type="text"
                    class="border rounded h-8 px-2 flex-grow"
                    onChange={inputChangeHandler}
                    id="inventory"
                    value={inventory}
                  />
                </div>
                <div class="flex gap-3 items-center">
                  <span class="w-24 font-bold">생산국</span>
                  <select
                    class="border rounded flex-grow h-8 px-1 "
                    onChange={inputChangeHandler}
                    id="country"
                    value={country}
                  >
                    <option value="카태고리 선택">카테고리 선택</option>
                    <option value="미국">미국</option>
                    <option value="스페인">스페인</option>
                    <option value="프랑스">프랑스</option>
                    <option value="이탈리아">이탈리아</option>
                  </select>
                </div>
                <div class="flex gap-3 items-center">
                  <span class="w-24 font-bold">생산지역</span>
                  <input
                    type="text"
                    class="border rounded flex-grow h-8 px-2"
                    onChange={inputChangeHandler}
                    id="area"
                    value={area}
                  />
                </div>
                <div class="flex gap-3 items-center">
                  <span class="w-24 font-bold">와인종류</span>
                  <select
                    name=""
                    class="border rounded flex-grow h-8 px-1"
                    onChange={inputChangeHandler}
                    id="color"
                    value={color}
                  >
                    <option value="카테고리 선택">카테고리 선택</option>
                    <option value="레드">레드</option>
                    <option value="화이트">화이트</option>
                    <option value="로제">로제</option>
                    <option value="논알콜">논알콜</option>
                  </select>
                </div>
                <div class="flex justify-between">
                  <div class="flex gap-3 items-center">
                    <span class="w-24 font-bold">당도</span>
                    <select
                      name=""
                      class="border rounded w-12 h-8 px-1"
                      onChange={inputChangeHandler}
                      id="sugar"
                      value={sugar}
                    >
                      <option value="s1">1</option>
                      <option value="s2">2</option>
                      <option value="s3">3</option>
                      <option value="s4">4</option>
                      <option value="s5">5</option>
                    </select>
                  </div>
                  <div class="flex gap-3 items-center">
                    <span class="w-24 font-bold">산도</span>
                    <select
                      name=""
                      class="border rounded w-12 h-8 px-1"
                      onChange={inputChangeHandler}
                      id="acidity"
                      value={acidity}
                    >
                      <option value="a1">1</option>
                      <option value="a2">2</option>
                      <option value="a3">3</option>
                      <option value="a4">4</option>
                      <option value="a5">5</option>
                    </select>
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="flex gap-3 items-center">
                    <span class="w-24 font-bold">탄닌</span>
                    <select
                      name=""
                      class="border rounded w-12 h-8 px-1"
                      onChange={inputChangeHandler}
                      id="tannic"
                      value={tannic}
                    >
                      <option value="t1">1</option>
                      <option value="t2">2</option>
                      <option value="t3">3</option>
                      <option value="t4">4</option>
                      <option value="t5">5</option>
                    </select>
                  </div>
                  <div class="flex gap-3 items-center">
                    <span class="w-24 font-bold">바디</span>
                    <select
                      name=""
                      class="border rounded w-12 h-8 px-1"
                      onChange={inputChangeHandler}
                      id="body"
                      value={body}
                    >
                      <option value="b1">1</option>
                      <option value="b2">2</option>
                      <option value="b3">3</option>
                      <option value="b4">4</option>
                      <option value="b5">5</option>
                    </select>
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="flex gap-3 items-center">
                    <div class="flex gap-3 items-center">
                      <span class="w-24 font-bold">도수</span>
                      <input
                        type="number"
                        class="border rounded flex-grow h-8 w-12 px-2"
                        onChange={inputChangeHandler}
                        id="alcoholDegree"
                        value={alcoholDegree}
                        min="0"
                        max="100"
                      />
                    </div>
                  </div>
                  <div class="flex gap-3 items-center">
                    <div class="flex gap-3 items-center">
                      <span class="w-24 font-bold">추천상품</span>
                      <input
                        type="checkbox"
                        class="border rounded flex-grow h-8 w-12 px-2"
                        id="isPicked"
                        onClick={inputChangeHandler}
                        checked={isPicked}
                      />
                    </div>
                  </div>
                  <div class="flex gap-3 items-center">
                    <div class="flex gap-3 items-center">
                      <span class="w-24 font-bold">베스트상품</span>
                      <input
                        type="checkbox"
                        class="border rounded flex-grow h-8 w-12 px-2"
                        id="isBest"
                        onClick={inputChangeHandler}
                        checked={isBest}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="w-full">
                <CKEditor
                  editor={ClassicEditor}
                  onChange={editorChangeHandler}
                  config={{
                    placeholder: "내용을 입력하세요.",
                  }}
                  data={info}
                />
              </div>

              <div class="flex justify-between">
                <div onClick={formCancleHandler}>
                  <Button isConfirm={false}>취소하기</Button>
                </div>
                <div onClick={formSubmitHandler}>
                  <Button isConfirm={true}>등록하기</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
