import { useParams } from "react-router";
import ProductDetail from "../../../components/user/product/product-detail";
import Layout from "../../../components/user/layout/layout";
import { useQuery } from "react-query";
import axios from "axios";

const ProductDetailPage = () => {
  const productId = useParams().product_id;

  const { data, isLoading, error } = useQuery(
    ["product", productId],
    async () => {
      const data = await axios.get(
        `http://34.22.85.44/api/products/${productId}`
      );
      return data.data;
    }
  );
  return (
    <>
      <Layout>
        {isLoading ? <div>Loading...</div> : <ProductDetail product={data} />}
      </Layout>
    </>
  );
};

export default ProductDetailPage;
