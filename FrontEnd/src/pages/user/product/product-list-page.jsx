import Product from "../../../components/user/product/product";
import Pagination from "../../../components/user/product/pagination";
import { useState } from "react";
import Layout from "../../../components/user/layout/layout";
import { useParams } from "react-router";
import styled from "styled-components";
import { useQuery, useQueryClient } from "react-query";
import {
  getProductsByCategory,
  getProductsByCategoryPrice,
  getProductsByIsBest,
} from "../../../api/api-product";

const ProductListPage = () => {
  // App.js에 정의한 라우터를 통해 받아온 url의 category 정보를 받음
  const categoryBest = useParams().category_best;
  const categoryBundleTitle = useParams().category_bundle_title;
  const categoryName = useParams().category_name;
  const categoryPrice1 = useParams().price_1;
  const categoryPrice2 = useParams().price_2;
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery(
    ["products", categoryName],
    async () => {
      if (categoryPrice2) {
        return getProductsByCategoryPrice(categoryPrice1, categoryPrice2);
      } else if (categoryName) {
        return getProductsByCategory(categoryBundleTitle, categoryName);
      } else if (categoryBest === "best") {
        return getProductsByIsBest();
      } else {
        return [];
      }
    }
  );

  const filteredByIsLarvate = data?.filter((item) => item.saleState !== "숨김");
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
      <div className="inline-block relative py-16 min-h-screen w-full">
        <div>
          <h1 className="ml-[30px] mb-[50px] text-2xl">
            {categoryName}({data?.length})
          </h1>
        </div>
        {isLoading ? (
          <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
            Loading...
          </div>
        ) : !isError ? (
          <>
            <ul className="grid grid-rows-fr xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[60px] gap-y-[90px] mb-[90px] place-items-center mx-auto">
              {filteredByIsLarvate
                ?.slice(offset, offset + limit)
                .map((product) => {
                  return <Product key={product._id} product={product} />;
                })}
            </ul>
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

export default ProductListPage;
