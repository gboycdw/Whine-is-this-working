import { getAllProduct } from "../../api/api-product";
import Layout from "../../components/layout/layout";
import MainArticle from "../../components/main/main-article";
import MainItem from "../../components/main/main-item";
import OurPick from "../../components/main/ourpick";

const MainPage = () => {
  const products = getAllProduct();

  return (
    <>
      <Layout>
        <img
          class="max-w-none w-screen ml-[calc(-50vw+50%)]"
          src="banner.jpeg"
          alt="banner"
        />
        <OurPick products={products} />
        <MainItem title={"BEST"} products={products} />
        <MainItem title={"NEW ARRIVAL"} products={products} />
        <MainArticle />
      </Layout>
    </>
  );
};

export default MainPage;
