import { useLocation } from "react-router-dom";
import AdminLayout from "../admin/layout/admin-layout";
import UserLayout from "../user/layout/user-layout";

const Layout = (props) => {
  const isAdminPage = useLocation().pathname.split("/")[1];

  return (
    <>
      {isAdminPage === "manage" ? (
        <AdminLayout>{props.children}</AdminLayout>
      ) : (
        <UserLayout>{props.children}</UserLayout>
      )}
    </>
  );
};

export default Layout;
