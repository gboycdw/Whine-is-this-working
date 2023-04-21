import { Link } from "react-router-dom";
import AdminMainNav from "./admin-main-nav";

const AdminLayout = (props) => {
  return (
    <div class="flex bg-[rgb(230,230,230)]">
      <AdminMainNav />
      <div class="w-full flex flex-col">
        <div class="flex p-10 justify-between items-center h-[125px] border-b">
          <h1>MAIN PAGE</h1>
          <Link to="">로그아웃</Link>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default AdminLayout;
