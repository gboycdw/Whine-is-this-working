import Layout from "../../components/layout/layout";
import Banner from "../../assets/banner.jpeg";

const MainPage = () => {
  const bannerStyle = { width: "100vw", position: "absolute", left: 0 };

  return (
    <>
      <Layout>
        <img src={Banner} alt="banner" style={bannerStyle} />
      </Layout>
    </>
  );
};

export default MainPage;
