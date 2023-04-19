
import { useParams } from "react-router";
import ProductDetail from "../components/UI/product-detail";
import Layout from "../components/layout/layout";
const wine = 
{
    id: 0,
    name: "17년산 레드와인",
    country: "미국",
    price: 50000,
    alcoholDegree: 13,
    info:"제품 상세 설명",
};


const ProductDetailPage = () => {

  const productID = useParams().product_id;

  console.log(productID);
  return (
    <>
    <Layout>
      <ProductDetail wine={wine}/>
      </Layout>
    </>
  );
};

export default ProductDetailPage;
