import Footer from "./footer";
import Header from "./header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main class="w-[1200px] m-auto">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
