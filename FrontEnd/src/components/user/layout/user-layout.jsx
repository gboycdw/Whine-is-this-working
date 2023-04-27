import Footer from "./footer";
import Header from "./header";

const UserLayout = (props) => {
  return (
    <>
      <Header />
      <main class="w-[1200px] m-auto">{props.children}</main>
      <Footer />
    </>
  );
};

export default UserLayout;
