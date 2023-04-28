import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../../user/product/pagination";
import Button from "../../UI/button";
import ManageProductListItem from "./manage-product-list-item";
import { useQueryClient } from "react-query";
import { deleteCheckedProductsById } from "../../../api/api-product";

const categories = ["레드와인", "화이트와인", "로제와인", "스파클링", "논알콜"];

const ManageProductList = (props) => {
  const products = props.products;

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [fileteredProducts, setFilteredProducts] = useState();
  const [checkedProductIds, setCheckedProductIds] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);

  const [page, setPage] = useState(1); // 페이징처리를 위한 현재 페이지
  const limit = 10; // 페이징처리를 위한 한화면 게시글 리밋
  const offset = (page - 1) * limit; // 페이징처리를위한 배열 슬라이스를 위한 오프셋

  const categorySelectHandler = (e) => {
    if (e.target.value === "전체보기") {
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter(
        (item) =>
          item.type === e.target.value || item.country === e.target.value
      );

      setFilteredProducts(filteredProducts);
    }
  };

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
        arr.push(item._id);
      });
      setIsCheckAll(true);
      setCheckedProductIds(arr);
    }
  };
  // 체크된 상품 삭제 핸들러 (체크된 상품들의 id들을 배열로 백엔드에 넘겨줌)

  const deleteCheckedProductsHandler = async () => {
    try {
      const result = await deleteCheckedProductsById(checkedProductIds);
      console.log(result);
      alert("선택한 상품이 삭제되었습니다.");
      navigate("/manage/product_list");
      queryClient.invalidateQueries(["products", page]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col p-6">
      <span className="text-xl mb-3 font-bold px-5">상품 관리</span>
      <div className="mx-5 border-b">
        <span>전체 {products.length}</span>
        <span> | </span>
        <span>
          판매중 {products.filter((item) => item.saleState === "판매중").length}
        </span>
        <span> | </span>
        <span>
          품절 {products.filter((item) => item.saleState === "품절").length}
        </span>
        <span> | </span>
        <span>
          숨김 {products.filter((item) => item.saleState === "숨김").length}
        </span>
      </div>
      <div className="py-1 flex gap-4 text-sm">
        {/* <div className="w-32 h-11 flex justify-center px-3 border border-color2 rounded">
          <select
            className="w-full"
            onChange={categorySelectHandler}
            value="전체보기"
          >
            <option value="전체보기">전체보기</option>
            {categories.map((category) => {
              return (
                <option key={category.id} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <input
          className="flex-grow h-11 px-3 border border-color2 rounded"
          type="text"
          placeholder="상품명 검색"
        />
        <div className="w-32 h-11 flex justify-center bg-[#ffffff] px-2 border border-color2 rounded items-center">
          엑셀 다운로드 | v
        </div> */}
      </div>
      <div className="flex flex-col py-2 px-5 bg-[#ffffff]">
        <ul>
          <li className="flex text-center border-b w-full pt-2 pb-3 gap-3 text-sm font-bold">
            <input type="checkbox" onChange={clickAllHandler} />
            <span className="w-10 ">No</span>
            <span className="w-10"></span>
            <span className="grow ">상품명</span>
            <span className="w-24 ">판매가</span>
            <span className="w-20 ">카테고리</span>
            <span className="w-16 ">상태</span>
            <span className="w-16 ">재고</span>
            <span className="w-32 ">등록일</span>
            <span className="w-32 ">수정일</span>
            <button className="w-20">수정하기</button>
          </li>
          {products?.slice(offset, offset + limit).map((item) => {
            return (
              <ManageProductListItem
                key={item._id}
                product={item}
                checkedProductIds={checkedProductIds}
                setCheckedProductIds={setCheckedProductIds}
                isCheckAll={isCheckAll}
              />
            );
          })}
        </ul>
        <div className="relative flex justify-between items-center h-20">
          <div onClick={deleteCheckedProductsHandler}>
            <Button isConfirm={false}>선택 상품 삭제</Button>
          </div>
          <div className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
            <Pagination
              total={products.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </div>
          <Button isConfirm={true}>
            <Link to="/manage/new_product">상품 등록</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ManageProductList;
