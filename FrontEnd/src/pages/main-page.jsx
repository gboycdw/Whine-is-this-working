import axios from "axios";
import { useQuery } from "react-query";
import Layout from "../components/user/layout/layout";
import MainArticle from "../components/user/main/main-article";
import MainItem from "../components/user/main/main-item";
import OurPick from "../components/user/main/ourpick";

const MainPage = () => {
  const { data, isLoading } = useQuery("products", async () => {
    const data = await axios.get(`http://34.22.85.44/api/products`);
    return data.data;
  });

  console.log(data);

  return (
    <>
      <Layout>
        <img
          class="max-w-none w-screen ml-[calc(-50vw+50%)]"
          src="banner.jpeg"
          alt="banner"
        />
        {data ? (
          <>
            <OurPick products={data} />
            <MainItem title={"BEST"} products={data} />
            <MainItem title={"NEW ARRIVAL"} products={data} />
            <MainArticle />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Layout>
    </>
  );
};

export default MainPage;
