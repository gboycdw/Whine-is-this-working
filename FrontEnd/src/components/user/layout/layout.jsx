import Footer from "./footer";
import Header from "./header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className="lg:w-[1200px] md:w-[900px] sm:w-[600px] m-auto">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
