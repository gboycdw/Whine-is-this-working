import { Link } from "react-router-dom";
import uuid from "react-uuid";

const AdminMainNav = () => {
  const NavCategory = (props) => {
    const { title, categories } = props;
    return (
      <div className="flex flex-col">
        <h3 className="font-bold text-base">{title}</h3>
        <ul className="flex flex-col mb-5">
          {categories.map((category) => {
            return (
              <li key={uuid()} className="pl-2 mt-2 text-sm">
                <Link to={category.link}>- {category.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-[16rem] border-r border-color2">
      <div className="flex items-center justify-center h-[80px] border-b border-color2 bg-color2">
        <Link to="/manage">
          <h1 className="text-xl">ADMIN PAGE</h1>
        </Link>
      </div>
      <div className="flex flex-col py-6 px-12 h-vh">
        <NavCategory
          title={"상품 관리"}
          categories={[
            { name: "상품 관리", link: "/manage/product_list" },
            { name: "상품 등록", link: "/manage/new_product" },
          ]}
        />
        <NavCategory
          title={"주문 관리"}
          categories={[{ name: "주문 내역", link: "/manage/order_list" }]}
        />
        {/* <NavCategory
          title={"고객 관리"}
          categories={[
            { name: "취소 내역" },
            { name: "교환 내역" },
            { name: "환불 내역" },
          ]}
        /> */}
        <NavCategory
          title={"카테고리 관리"}
          categories={[{ name: "카테고리 관리", link: "/manage/category" }]}
        />
      </div>
    </div>
  );
};

export default AdminMainNav;
