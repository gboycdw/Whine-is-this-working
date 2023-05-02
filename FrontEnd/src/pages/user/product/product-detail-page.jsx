import { useParams } from "react-router";
import ProductDetail from "../../../components/user/product/product-detail";
import { useQuery } from "react-query";
import { getProductById } from "../../../api/api-product";

const ProductDetailPage = () => {
  const productId = useParams().product_id;

  const { data, isLoading, isError, error } = useQuery(
    ["product", productId],
    async () => await getProductById(productId)
  );

  return (
    <>
      {/* <div className="inline-block relative py-16 min-h-screen w-full"> */}
      <div>
        {isLoading ? (
          <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
            Loading...
          </div>
        ) : !isError ? (
          <ProductDetail product={data} />
        ) : (
          <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
            {error.message}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetailPage;
