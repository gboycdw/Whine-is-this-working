import Footer from "./footer";
import Header from "./header";

import classes from "./layout.module.css";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <div class="mb-20"></div>
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
