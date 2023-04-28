import { useEffect } from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getUserDataByToken } from "../../api/api-auth";
import AdminLayout from "../admin/layout/admin-layout";
import { authCtx } from "../store/auth-context";
import UserLayout from "../user/layout/user-layout";

const Layout = (props) => {
  const isAdminPage = useLocation().pathname.split("/")[1];
  const { setIsLoggedIn, setIsAdmin, setAuth } = useContext(authCtx);

  const token = JSON.parse(localStorage.getItem("token"));

  const { data: authData } = useQuery(["auth", token], () =>
    getUserDataByToken()
  );

  useEffect(() => {
    if (authData) {
      setIsLoggedIn(true);
      setAuth(authData);
      if (authData?.role === "admin") {
        setIsAdmin(true);
      }
    }
  }, [authData]);

  return (
    <>
      {isAdminPage === "manage" ? (
        <AdminLayout authData={authData}>{props.children}</AdminLayout>
      ) : (
        <UserLayout authData={authData}>{props.children}</UserLayout>
      )}
    </>
  );
};

export default Layout;
