import Layout from "../components/user/layout/layout";
import MainArticle from "../components/user/main/main-article";
import MainItem from "../components/user/main/main-item";
import OurPick from "../components/user/main/ourpick";

const MainPage = () => {
  return (
    <>
      <Layout>
        <img
          className="max-w-none w-screen ml-[calc(-50vw+50%)]"
          src="banner.jpeg"
          alt="banner"
        />
        <>
          <OurPick />
          <MainItem title={"BEST"} />
          <MainItem title={"NEW ARRIVAL"} />
          <MainArticle />
        </>
      </Layout>
    </>
  );
};

export default MainPage;
