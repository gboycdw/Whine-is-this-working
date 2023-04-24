import Product from "../../../components/user/product/product";
import classes from "./product-list.module.css";
import Pagination from "../../../components/user/product/pagination";
import { useState } from "react";
import Layout from "../../../components/user/layout/layout";
import { useParams } from "react-router";
import styled from "styled-components";
import { getAllProduct } from "../../../api/api-product";

const ProductListPage = () => {
  const products = getAllProduct(); //데이터 받아오는 함수 (백엔드 연결 전 임시용)

  // App.js에 정의한 라우터를 통해 받아온 url의 category 정보를 받음
  const urlParams = useParams().category;
  let categoryName = "";

  if (urlParams === "usa") {
    categoryName = "United States";
  } else {
    categoryName = urlParams;
  }

  const filteredProducts = products.filter((data) => {
    if (Object.values(data.feature).indexOf(categoryName) !== -1) {
      return true;
    } else {
      return false;
    }
  }); // url로 받아온 카테고리명을 특징으로 가지고 있는 데이터를 필터링

  // 전체 데이터인데 쓸 지는 미정
  // const [productData, setProductData] = useState(filteredData);

  // 추가기능) 개수 설정에 따라 n개씩 보여주기 기능 구현할 경우 사용
  // const limit, setLimit] = useState(12);
  const limit = 20;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  // grid에 rows를 동적으로 줘서 아이템 개수에 따라
  // pagination 위치가 마지막 아이템 줄 밑에 바로 붙도록 설정
  const rows = Math.ceil(filteredProducts.length / 4);

  // styled.ul = css가 적용된 ul 태그
  const ProductListUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(${rows}, 1fr);
    gap: 60px;
    row-gap: 90px;
    margin-bottom: 90px;
  `;

  return (
    <>
      <Layout>
        <div class="py-16">
          <div>
            <h1 className={classes.categoryName}>
              {categoryName.toUpperCase()}
            </h1>
          </div>
          <ProductListUl>
            {filteredProducts.slice(offset, offset + limit).map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </ProductListUl>
          <div>
            <Pagination
              // 필터된 데이터 개수에 따라 창 개수로 설정
              total={filteredProducts.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductListPage;
