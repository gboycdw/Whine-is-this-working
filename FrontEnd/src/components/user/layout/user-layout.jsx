import Footer from "./footer";
import Header from "./header";

const UserLayout = (props) => {
  const authData = props.authData;
  return (
    <>
      <Header authData={authData} />
      <main className="w-[1200px] m-auto min-h-screen">{props.children}</main>
      <Footer />
    </>
  );
};

export default UserLayout;
