import { Link } from "react-router-dom";
import AdminMainNav from "./admin-main-nav";

const AdminLayout = (props) => {
  return (
    <div className="flex w-[1300px] m-auto border-x border-color2">
      <AdminMainNav />
      <div className="w-full flex flex-col">
        <div className="flex px-10 justify-between items-center h-[80px] border-b border-color2">
          <h1 className="text-lg">{props.title}</h1>
          <div className="flex gap-6">
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
