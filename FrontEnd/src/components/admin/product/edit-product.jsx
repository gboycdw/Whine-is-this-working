import { useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Button from "../../UI/button";
import { useNavigate, useParams } from "react-router-dom";
import { editProductById } from "../../../api/api-product";
import { useQuery, useQueryClient } from "react-query";
import { getAllCategories } from "../../../api/api-category";

const EditProduct = (props) => {
  const productId = useParams().product_id;
  const navigate = useNavigate();
  const client = useQueryClient();

  const { data: categoryBundle } = useQuery("categories", () =>
    getAllCategories()
  );

  const categoriesByType = categoryBundle?.find(
    (bundle) => bundle.title === "WINE"
  ).categories;

  const categoriesByCountry = categoryBundle?.find(
    (bundle) => bundle.title === "COUNTRY"
  ).categories;

  const data = props.product;

  const [isImageModal, setIsImageModal] = useState(false);
  const [imgFile, setImgFile] = useState(data?.imgUrl);
  const imgRef = useRef();

  //각 폼데이터들 상태관리
  const [brand, setBrand] = useState(data?.brand);
  const [name, setName] = useState(data?.name);
  const [price, setPrice] = useState(data?.price);
  const [imgUrl, setImgUrl] = useState(data?.imgUrl);
  const [discountPrice, setDiscountPrice] = useState(data?.discountPrice);
  const [inventory, setInventory] = useState(data?.inventory);
  const [country, setCountry] = useState(data?.country);
  const [region, setRegion] = useState(data?.region);
  const [type, setType] = useState(data?.type);
  const [sugar, setSugar] = useState(data?.features.sugar);
  const [acidity, setAcidity] = useState(data?.features.acidity);
  const [tannic, setTannic] = useState(data?.features.tannic);
  const [body, setBody] = useState(data?.features.body);
  const [alcoholDegree, setAlcoholDegree] = useState(
    data?.features.alcoholDegree
  );
  const [isPicked, setIsPicked] = useState(data?.isPicked);
  const [isBest, setIsBest] = useState(data?.isBest);
  const [info, setInfo] = useState(data?.info);
  const [tags, setTags] = useState(data?.tags.join(","));

  // 각 input 온채인지 핸들러
  const inputChangeHandler = (e) => {
    if (e.target.id === "brand") {
      setBrand(e.target.value);
    }
    if (e.target.id === "name") {
      setName(e.target.value);
    }
    if (e.target.id === "price") {
      setPrice(+e.target.value);
    }
    if (e.target.id === "discountPrice") {
      setDiscountPrice(+e.target.value);
    }
    if (e.target.id === "inventory") {
      setInventory(+e.target.value);
    }
    if (e.target.id === "country") {
      setCountry(e.target.value);
    }
    if (e.target.id === "region") {
      setRegion(e.target.value);
    }
    if (e.target.id === "type") {
      setType(e.target.value);
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
      setAlcoholDegree(+e.target.value);
    }
    if (e.target.id === "isPicked") {
      setIsPicked(!isPicked);
    }
    if (e.target.id === "isBest") {
      setIsBest(!isBest);
    }
    if (e.target.id === "tags") {
      setTags(e.target.value.trim().split(","));
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
    if (window.confirm("정말로 취소하시겠습니까? 수정한 내용은 없어집니다.")) {
      return navigate("/manage/product_list");
    } else {
    }
  };

  // 폼 제출 핸들러
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    let arr = [];
    const data = {
      name,
      brand,
      type,
      country,
      region,
      imgUrl,
      info,
      price,
      discountPrice,
      saleCount: 0,
      saleState: "판매중",
      isPicked,
      isBest,
      inventory,
      tags: arr.concat(tags),
      features: {
        sugar,
        acidity,
        tannic,
        body,
        alcoholDegree,
      },
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
    if (type === "카테고리 선택") {
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

    try {
      const result = await editProductById(productId, data);
      console.log(result);
      client.invalidateQueries({ queryKey: ["products"] });
      alert("상품이 성공적으로 수정되었습니다.");
      navigate("/manage/product_list");
    } catch (error) {
      console.log(error);
    }

    // navigate("/manage/product_list");
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
    <div className="flex flex-col p-6 bg-color3 ">
      <span className="text-xl mb-3 font-bold px-5">상품 수정</span>
      <div className="mx-5 border-b"></div>
      {isImageModal ? (
        <div className="fixed border border-color2 w-[430px] h-[600px] bg-[#ffffff] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-50 p-10 rounded-xl flex flex-col items-center gap-5">
          <div className="flex w-full flex-col items-center border border-color2 p-5">
            <div className="h-96">
              <img
                className="h-[300px]"
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
          <div className="flex gap-3">
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
        <div className="flex px-10">
          <div className="flex flex-col gap-10 w-full p-10 bg-[#ffffff]">
            <div className="flex gap-24 pb-10 border-b border-color2 justify-between relative">
              <div className="flex flex-col justify-center gap-4">
                <div className="flex justify-center items-center h-[400px] w-[400px] border border-color2 rounded p-10">
                  <img className="h-[300px]" src={imgUrl} alt="wine" />
                </div>
                <button
                  className="border h-12 rounded border-color2 border-2 text-color1 font-bold"
                  onClick={toggleImageModalHandler}
                >
                  이미지 추가
                </button>
              </div>
              <div className="flex flex-grow flex-col gap-3 justify-center text-sm">
                <div className="flex gap-3 items-center">
                  <span className="w-20 font-bold">브랜드명</span>
                  <input
                    type="text"
                    className="border border-color2 rounded flex-grow h-7 px-2"
                    onChange={inputChangeHandler}
                    id="brand"
                    value={brand}
                  />
                </div>
                <div className="flex gap-3 items-center">
                  <span className="w-20 font-bold">상품명</span>
                  <input
                    type="text"
                    className="border border-color2 rounded flex-grow h-7 px-2"
                    onChange={inputChangeHandler}
                    id="name"
                    value={name}
                  />
                </div>
                <div className="flex gap-3 items-center">
                  <span className="w-20 font-bold">판매가격</span>
                  <input
                    type="number"
                    className="border border-color2 rounded flex-grow h-7 px-2"
                    onChange={inputChangeHandler}
                    id="price"
                    value={price}
                  />
                </div>
                <div className="flex gap-3 items-center">
                  <span className="w-20 font-bold">할인가격</span>
                  <input
                    type="number"
                    className="border border-color2 rounded flex-grow h-7 px-2"
                    onChange={inputChangeHandler}
                    id="discountPrice"
                    value={discountPrice}
                  />
                </div>
                <div className="flex gap-3 items-center justify-end">
                  <span className="w-20 font-bold">재고수량</span>
                  <input
                    type="number"
                    className="border border-color2 rounded h-7 px-2 flex-grow"
                    onChange={inputChangeHandler}
                    id="inventory"
                    value={inventory}
                  />
                </div>
                <div className="flex gap-3 items-center">
                  <span className="w-20 font-bold">생산국</span>
                  <select
                    className="border border-color2 rounded flex-grow h-7 px-1 "
                    onChange={inputChangeHandler}
                    id="country"
                    value={country}
                  >
                    <option value="카테고리 선택">카테고리 선택</option>
                    {categoriesByCountry?.map((category) => (
                      <option value={category.name}>{category.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="w-20 font-bold">생산지역</span>
                  <input
                    type="text"
                    className="border border-color2 rounded flex-grow h-7 px-2"
                    onChange={inputChangeHandler}
                    id="region"
                    value={region}
                  />
                </div>
                <div className="flex gap-3 items-center">
                  <span className="w-20 font-bold">와인종류</span>
                  <select
                    name=""
                    className="border border-color2 rounded flex-grow h-7 px-1"
                    onChange={inputChangeHandler}
                    id="type"
                    value={type}
                  >
                    <option value="카테고리 선택">카테고리 선택</option>
                    {categoriesByType?.map((category) => (
                      <option value={category.name}>{category.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-3 items-center">
                    <span className="w-20 font-bold">당도</span>
                    <select
                      name=""
                      className="border border-color2 rounded w-16 h-7 px-1"
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
                  <div className="flex gap-3 items-center">
                    <span className="w-20 font-bold">산도</span>
                    <select
                      name=""
                      className="border border-color2 rounded w-16 h-7 px-1"
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
                <div className="flex justify-between">
                  <div className="flex gap-3 items-center">
                    <span className="w-20 font-bold">탄닌</span>
                    <select
                      name=""
                      className="border border-color2 rounded w-16 h-7 px-1"
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
                  <div className="flex gap-3 items-center">
                    <span className="w-20 font-bold">바디</span>
                    <select
                      name=""
                      className="border border-color2 rounded w-16 h-7 px-1"
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
                <div className="flex justify-between">
                  <div className="flex gap-3 items-center">
                    <div className="flex gap-3 items-center">
                      <span className="w-20 font-bold">도수</span>
                      <input
                        type="number"
                        className="border border-color2 rounded flex-grow h-7 w-16 px-2"
                        onChange={inputChangeHandler}
                        id="alcoholDegree"
                        value={alcoholDegree}
                        min="0"
                        max="100"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-center">
                    <div className="flex gap-3 items-center  ">
                      <div className="flex gap-3 items-center justify-between w-[156px]">
                        <span className="w-20 font-bold">추천상품</span>
                        <input
                          type="checkbox"
                          className="border border-color2 rounded h-5 w-5 float-right"
                          id="isPicked"
                          onChange={inputChangeHandler}
                          defaultChecked={isPicked}
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="flex gap-3 items-center justify-between w-[156px]">
                        <span className="w-20 font-bold">베스트</span>
                        <input
                          type="checkbox"
                          className="border border-color2 rounded h-5 w-5 px-2"
                          id="isBest"
                          onChange={inputChangeHandler}
                          defaultChecked={isBest}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-full">
                <CKEditor
                  editor={ClassicEditor}
                  onChange={editorChangeHandler}
                  config={{
                    placeholder: "내용을 입력하세요.",
                  }}
                  data={info}
                />
              </div>
              <div className="flex border px-2 py-1 mb-5 rounded border-color2">
                <input
                  className="w-full"
                  type="text"
                  placeholder="태그들을 입력하세요. ex) 스페인, 레드, 달달함"
                  id="tags"
                  value={tags}
                  onChange={inputChangeHandler}
                />
              </div>

              <div className="flex justify-between">
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

export default EditProduct;
