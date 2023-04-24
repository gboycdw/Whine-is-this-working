import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Button from "../../UI/button";
import { useNavigate } from "react-router-dom";

const NewProduct = (props) => {
  const product = props.product;
  // use-react-form 사용하려 했는데, 이 컴포넌트를 수정컴포넌트로도 재활용하려고 할경우, 초기값 지정 하는방법을 모르겠음
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  const [isImageModal, setIsImageModal] = useState(false);
  const [imgFile, setImgFile] = useState(
    product ? product.imgUrl : "/defaultImage.jpg"
  );
  const imgRef = useRef();

  //각 폼데이터들 상태관리
  const [brand, setBrand] = useState(product ? product.brand : null);
  const [name, setName] = useState(product ? product.name : null);
  const [price, setPrice] = useState(product ? product.price : null);
  const [imgUrl, setImgUrl] = useState(
    product ? product.imgUrl : "/defaultImage.jpg"
  );
  const [discountPrice, setDiscountPrice] = useState(
    product ? product.discountPrice : null
  );
  const [inventory, setInventory] = useState(
    product ? product.inventory : null
  );
  const [country, setCountry] = useState(
    product ? product.country : "카테고리 선택"
  );
  const [area, setArea] = useState(product ? product.feature.area : null);
  const [color, setColor] = useState(product ? product.color : "카테고리 선택");
  const [sugar, setSugar] = useState(product ? product.feature.sugar : "선택");
  const [acidity, setAcidity] = useState(
    product ? product.feature.acidity : "선택"
  );
  const [tannic, setTannic] = useState(
    product ? product.feature.tannic : "선택"
  );
  const [body, setBody] = useState(product ? product.feature.body : "선택");
  const [alcoholDegree, setAlcoholDegree] = useState(
    product ? product.feature.alcoholDegree : null
  );
  const [isPicked, setIsPicked] = useState(product ? product.isPicked : false);
  const [isBest, setIsBest] = useState(product ? product.isBest : false);
  const [info, setInfo] = useState(product ? product.info : null);

  // 각 input 온채인지 핸들러
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
      setIsPicked(!isPicked);
    }
    if (e.target.id === "isBest") {
      setIsBest(!isBest);
    }
  };

  // CK에디터 인풋 온채인지 핸들러
  const editorChangeHandler = (e, editor) => {
    const info = editor.getData();
    setInfo(info);
  };

  // 폼 취소 핸들러
  const formCancleHandler = (e) => {
    e.preventDefault();
    if (window.confirm("정말로 취소하시겠습니까? 입력한 내용은 삭제됩니다.")) {
      return navigate("/manage/product_list");
    } else {
    }
  };

  // 폼 제출 핸들러
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
        alcoholDegree,
      },
      info,
      isPicked,
      isBest,
    };
    /* validation 부분 시간이 남으면 리팩토링이 필요함 */
    if (Object.values(data).filter((data) => data === null).length > 0) {
      alert("상품 정보를 빠짐없이 입력해주세요.");
      return;
    }
    if (country === "카테고리 선택") {
      alert("나라 카테고리를 선택해주세요.");
      return;
    }
    if (color === "카테고리 선택") {
      alert("와인종류 카테고리를 선택해주세요.");
      return;
    }
    if (
      sugar === "선택" ||
      acidity === "선택" ||
      tannic === "선택" ||
      body === "선택"
    ) {
      alert("와인 특성들을 선택해주세요.");
      return;
    }

    // 이부분에 axios 구현
    console.log(data);
  };

  // 이미지 추가 모달 핸들러
  const toggleImageModalHandler = (e) => {
    e.preventDefault();
    if (isImageModal) {
      setIsImageModal(false);
    } else {
      setIsImageModal(true);
    }
  };

  // 이미지 파일 업로드 함수
  const uploadImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  // 이미지 추가 모달에서 이미지 칸으로 추가하는 핸들러
  const addImageHandler = (e) => {
    e.preventDefault();
    setImgUrl(imgFile);
    setIsImageModal(false);
  };

  return (
    <div class="flex flex-col p-6 bg-color3">
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
            />
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
      <form>
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
                  <span class="w-20 font-bold">브랜드명</span>
                  <input
                    type="text"
                    class="border rounded flex-grow h-8 px-2"
                    onChange={inputChangeHandler}
                    id="brand"
                    value={brand}
                  />
                </div>
                <div class="flex gap-3 items-center">
                  <span class="w-20 font-bold">상품명</span>
                  <input
                    type="text"
                    class="border rounded flex-grow h-8 px-2"
                    onChange={inputChangeHandler}
                    id="name"
                    value={name}
                  />
                </div>
                <div class="flex gap-3 items-center">
                  <span class="w-20 font-bold">판매가격</span>
                  <input
                    type="text"
                    class="border rounded flex-grow h-8 px-2"
                    onChange={inputChangeHandler}
                    id="price"
                    value={price}
                  />
                </div>
                <div class="flex gap-3 items-center">
                  <span class="w-20 font-bold">할인가격</span>
                  <input
                    type="text"
                    class="border rounded flex-grow h-8 px-2"
                    onChange={inputChangeHandler}
                    id="discountPrice"
                    value={discountPrice}
                  />
                </div>
                <div class="flex gap-3 items-center justify-end">
                  <span class="w-20 font-bold">재고수량</span>
                  <input
                    type="text"
                    class="border rounded h-8 px-2 flex-grow"
                    onChange={inputChangeHandler}
                    id="inventory"
                    value={inventory}
                  />
                </div>
                <div class="flex gap-3 items-center">
                  <span class="w-20 font-bold">생산국</span>
                  <select
                    class="border rounded flex-grow h-8 px-1 "
                    onChange={inputChangeHandler}
                    id="country"
                    value={country}
                  >
                    <option value="카테고리 선택">카테고리 선택</option>
                    <option value="미국">미국</option>
                    <option value="스페인">스페인</option>
                    <option value="프랑스">프랑스</option>
                    <option value="이탈리아">이탈리아</option>
                  </select>
                </div>
                <div class="flex gap-3 items-center">
                  <span class="w-20 font-bold">생산지역</span>
                  <input
                    type="text"
                    class="border rounded flex-grow h-8 px-2"
                    onChange={inputChangeHandler}
                    id="area"
                    value={area}
                  />
                </div>
                <div class="flex gap-3 items-center">
                  <span class="w-20 font-bold">와인종류</span>
                  <select
                    name=""
                    class="border rounded flex-grow h-8 px-1"
                    onChange={inputChangeHandler}
                    id="color"
                    value={color}
                  >
                    <option value="카테고리 선택">카테고리 선택</option>
                    <option value="레드">레드와인</option>
                    <option value="화이트">화이트와인</option>
                    <option value="로제">로제와인</option>
                    <option value="논알콜">논알콜</option>
                  </select>
                </div>
                <div class="flex justify-between">
                  <div class="flex gap-3 items-center">
                    <span class="w-20 font-bold">당도</span>
                    <select
                      name=""
                      class="border rounded w-16 h-8 px-1"
                      onChange={inputChangeHandler}
                      id="sugar"
                      value={sugar}
                    >
                      <option value="선택">선택</option>
                      <option value="s1">1</option>
                      <option value="s2">2</option>
                      <option value="s3">3</option>
                      <option value="s4">4</option>
                      <option value="s5">5</option>
                    </select>
                  </div>
                  <div class="flex gap-3 items-center">
                    <span class="w-20 font-bold">산도</span>
                    <select
                      name=""
                      class="border rounded w-16 h-8 px-1"
                      onChange={inputChangeHandler}
                      id="acidity"
                      value={acidity}
                    >
                      <option value="선택">선택</option>
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
                    <span class="w-20 font-bold">탄닌</span>
                    <select
                      name=""
                      class="border rounded w-16 h-8 px-1"
                      onChange={inputChangeHandler}
                      id="tannic"
                      value={tannic}
                    >
                      <option value="선택">선택</option>
                      <option value="t1">1</option>
                      <option value="t2">2</option>
                      <option value="t3">3</option>
                      <option value="t4">4</option>
                      <option value="t5">5</option>
                    </select>
                  </div>
                  <div class="flex gap-3 items-center">
                    <span class="w-20 font-bold">바디</span>
                    <select
                      name=""
                      class="border rounded w-16 h-8 px-1"
                      onChange={inputChangeHandler}
                      id="body"
                      value={body}
                    >
                      <option value="선택">선택</option>
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
                      <span class="w-20 font-bold">도수</span>
                      <input
                        type="number"
                        class="border rounded flex-grow h-8 w-16 px-2"
                        onChange={inputChangeHandler}
                        id="alcoholDegree"
                        value={alcoholDegree}
                        min="0"
                        max="100"
                      />
                    </div>
                  </div>
                  <div class="flex flex-col gap-3 items-center">
                    <div class="flex gap-3 items-center  ">
                      <div class="flex gap-3 items-center justify-between w-[156px]">
                        <span class="w-20 font-bold">추천상품</span>
                        <input
                          type="checkbox"
                          class="border rounded h-6 w-6 float-right"
                          id="isPicked"
                          onClick={inputChangeHandler}
                          checked={isPicked}
                        />
                      </div>
                    </div>
                    <div class="flex gap-3 items-center">
                      <div class="flex gap-3 items-center justify-between w-[156px]">
                        <span class="w-20 font-bold">베스트</span>
                        <input
                          type="checkbox"
                          class="border rounded h-6 w-6 px-2"
                          id="isBest"
                          onClick={inputChangeHandler}
                          checked={isBest}
                        />
                      </div>
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
