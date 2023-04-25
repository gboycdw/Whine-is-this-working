import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../user/product/pagination";
import Button from "../../UI/button";
import ManageProductListItem from "./manage-product-list-item";
import axios from "axios";

const categories = ["레드", "화이트", "로제", "논알콜"];

const ManageProductList = (props) => {
  const products = props.products;

  const [checkedProductIds, setCheckedProductIds] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);

  const [page, setPage] = useState(1); // 페이징처리를 위한 현재 페이지
  const limit = 10; // 페이징처리를 위한 한화면 게시글 리밋
  const offset = (page - 1) * limit; // 페이징처리를위한 배열 슬라이스를 위한 오프셋


  /* 체크박스 전체 선택 핸들러 
  이미 모두 체크가 되어있는경우 클릭하면 모든 체크를 해제하고 상품IDs라는 배열이 담긴 상태를 빈배열로 초기화
  모든 체크가 해제되어있거나 일부만 체크되어있을경우 모두 체크하고 상품IDs 이 페이지의 모든 상품id들을 배열로 업데이트*/
  const clickAllHandler = () => {
    if (isCheckAll) {
      setIsCheckAll(false);
      setCheckedProductIds([]);
    } else {
      let arr = [];
      products.slice(offset, offset + limit).forEach((item) => {
        arr.push(item.id);
      });
      setIsCheckAll(true);
      setCheckedProductIds(arr);
    }
  };

  // 체크된 상품 삭제 핸들러 (체크된 상품들의 id들을 배열로 백엔드에 넘겨줌)
  const deleteCheckedProductsHandler = () => {
    axios.post(
      "url주소",
      {
        checkedProductIds, // 체크된 상품들의 id 배열을 엑시오스로 넘겨줌
      },
      {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
  };

  return (
    <div class="flex flex-col p-6">
      <div class="border-b">
        <span>전체 {products.length}</span>
        <span> | </span>
        <span>
          판매중 {products.filter((item) => item.saleState === "판매중").length}
        </span>
        <span> | </span>
        <span>품절 0</span>
        <span> | </span>
        <span>숨김 0</span>
      </div>
      <div class="py-4 flex gap-4">
        <div class="w-36 bg-[#ffffff] flex justify-center py-3 px-3">
          <select class="w-full">
            <option value="카테고리선택">카테고리 선택</option>
            {categories.map((category) => {
              return <option value={category}>{category}</option>;
            })}
          </select>
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
            <input type="checkbox" onClick={clickAllHandler} />
            <span class="w-10 ">No</span>
            <span class="w-10"></span>
            <span class="grow ">상품명</span>
            <span class="w-24 ">판매가</span>
            <span class="w-20 ">카테고리</span>
            <span class="w-16 ">상태</span>
            <span class="w-16 ">재고</span>
            <span class="w-32 ">등록일</span>
            <span class="w-32 ">수정일</span>
            <button class="w-20">수정하기</button>
          </li>
          {products.slice(offset, offset + limit).map((item) => {
            return (
              <ManageProductListItem
                key={item.id}
                product={item}
                checkedProductIds={checkedProductIds}
                setCheckedProductIds={setCheckedProductIds}
                isCheckAll={isCheckAll}
              />
            );
          })}
        </ul>
        <div class="relative flex justify-between items-center h-20">
          <div onClick={deleteCheckedProductsHandler}>
            <Button isConfirm={false}>선택 상품 삭제</Button>
          </div>
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
