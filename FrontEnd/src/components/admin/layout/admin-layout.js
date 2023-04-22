import { Link } from "react-router-dom";
import AdminMainNav from "./admin-main-nav";

const AdminLayout = (props) => {
  return (
    <div class="flex bg-[rgb(243,235,235)]">
      <AdminMainNav />
      <div class="w-full flex flex-col ">
        <div class="flex p-10 justify-between items-center h-[80px] bg-color2">
          <h1 class="font-bold text-lg">{props.title}</h1>
          <div class="flex gap-6">
            <Link to="/">고객페이지</Link>
            <Link to="/">로그아웃</Link>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default AdminLayout;
