import Product from "../../../components/user/product/product";
import Pagination from "../../../components/user/product/pagination";
import { useState } from "react";
import Layout from "../../../components/user/layout/layout";
import { useParams } from "react-router";
import styled from "styled-components";
import { useQuery } from "react-query";
import axios from "axios";

const ProductListPage = () => {
  // App.js에 정의한 라우터를 통해 받아온 url의 category 정보를 받음
  const urlParams = useParams().category;

  const categoryName = urlParams;

  const { data, isLoading, isError, error } = useQuery(
    ["products", categoryName],
    async () => {
      const data = await axios.get(
        `http://34.22.85.44/api/products/types/${categoryName}`
      );
      return data.data;
    }
  );

  // const filteredProducts = products.filter((data) => {
  //   if (Object.values(data.feature).indexOf(categoryName) !== -1) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }); // url로 받아온 카테고리명을 특징으로 가지고 있는 데이터를 필터링

  // 전체 데이터인데 쓸 지는 미정
  // const [productData, setProductData] = useState(filteredData);

  // 추가기능) 개수 설정에 따라 n개씩 보여주기 기능 구현할 경우 사용
  // const limit, setLimit] = useState(12);
  const limit = 20;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  // grid에 rows를 동적으로 줘서 아이템 개수에 따라
  // pagination 위치가 마지막 아이템 줄 밑에 바로 붙도록 설정

  // styled.ul = css가 적용된 ul 태그

  return (
    <Layout>
      <div class="inline-block relative py-16 min-h-screen w-full">
        <div>
          <h1 className="ml-[30px] mb-[50px] text-2xl">
            {categoryName.toUpperCase()}({data?.length})
          </h1>
        </div>
        {isLoading ? (
          <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
            Loading...
          </div>
        ) : !isError ? (
          <>
            <ProductListUl>
              {data?.slice(offset, offset + limit).map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </ProductListUl>
            <div>
              <Pagination
                // 필터된 데이터 개수에 따라 창 개수로 설정
                total={data?.length}
                limit={limit}
                page={page}
                setPage={setPage}
              />
            </div>
          </>
        ) : (
          <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
            {error.message}
          </div>
        )}
      </div>
    </Layout>
  );
};

const ProductListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(5, minmax(0, 1fr));
  gap: 60px;
  row-gap: 90px;
  margin-bottom: 90px;
`;

export default ProductListPage;
