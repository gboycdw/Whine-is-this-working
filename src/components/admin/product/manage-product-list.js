import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../user/product/pagination";
import Button from "../../UI/button";
import ManageProductListItem from "./manage-product-list-item";

const products = [
  {
    id: 0,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 1,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 2,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 3,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 4,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 5,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 6,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 7,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 8,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 9,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 0,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 1,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 2,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 3,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 4,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 5,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 6,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 7,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 8,
    no: 1,
    name: "모노플 클라시코",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
  {
    id: 9,
    no: 1,
    name: "와인",
    imgUrl:
      "https://images.vivino.com/thumbs/1iSKLGNDSSCm8_MW6HK2Hw_pb_x960.png",
    price: 52000,
    category: "white",
    state: "판매중",
    inventory: 200,
    registerDay: "2023.02.27",
    editDay: "2023.03.03",
  },
];

const ManageProductList = () => {
  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <div class="flex flex-col p-6">
      <div class="border-b">
        <span>전체 10</span>
        <span> | </span>
        <span>판매중 8</span>
        <span> | </span>
        <span>품절 0</span>
        <span> | </span>
        <span>숨김 0</span>
      </div>
      <div class="py-4 flex gap-4">
        <div class="w-36 bg-[#ffffff] flex justify-center py-3 px-3">
          카테고리 선택 | v
        </div>
        <input
          class="flex-grow py-3 px-3 "
          type="text"
          placeholder="상품명 검색"
        />
        <div class="w-36 flex justify-center bg-[#ffffff] py-3 px-3">
          엑셀 다운로드 | v
        </div>
      </div>
      <div class="flex flex-col py-2 px-5 bg-[#ffffff]">
        <ul>
          <li class=" flex text-center border-b w-full pt-2 pb-3 gap-3 text-sm font-bold">
            <input type="checkbox" />
            <span class="w-10 ">No</span>
            <img src="" alt="" />
            <span class="grow ">상품명</span>
            <span class="w-24 ">판매가</span>
            <span class="w-20 ">카테고리</span>
            <span class="w-20 ">상태</span>
            <span class="w-16 ">재고</span>
            <span class="w-32 ">등록일</span>
            <span class="w-32 ">수정일</span>
            <button class="w-20">수정하기</button>
          </li>
          {products.slice(offset, offset + limit).map((item) => {
            console.log(item);
            return <ManageProductListItem key={item.id} product={item} />;
          })}
        </ul>
        <div class="relative flex justify-between items-center h-20">
          <Button isConfirm={false}>선택 상품 삭제</Button>
          <div class="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
            <Pagination
              total={products.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </div>
          <Button isConfirm={true}>
            <Link to="/manage/product/new_product">상품 등록</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ManageProductList;
