import { useParams } from "react-router";
import ProductDetail from "../../../components/user/product/product-detail";
import Layout from "../../../components/user/layout/layout";
import { getAllProduct } from "../../../api/api-product";

const ProductDetailPage = () => {
  const products = getAllProduct();

  const productID = +useParams().product_id;

  const product = products.find((product) => product.id === productID);

  return (
    <>
      <Layout>
        <ProductDetail product={product} />
      </Layout>
    </>
  );
};

export default ProductDetailPage;
