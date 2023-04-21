import { Link } from "react-router-dom";

const AdminMainNav = () => {
  const NavCategory = (props) => {
    const { title, categories } = props;
    return (
      <div class="flex flex-col">
        <h3 class="font-bold text-lg">{title}</h3>
        <ul class="flex flex-col mb-5">
          {categories.map((category) => {
            return (
              <li key={categories.id} class="pl-2 mt-2">
                <Link to={category.link}>- {category.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div class="inline-block flex flex-col bg-[#4B4B4B] text-[rgb(255,255,255)] w-[16rem] h-screen">
      <div class="flex items-center justify-center h-[120px] bg-[#000000]">
        <h1 class="font-bold text-xl">ADMIN PAGE</h1>
      </div>
      <div class="flex flex-col p-8">
        <NavCategory
          title={"상품 관리"}
          categories={[
            { id: 0, name: "상품 등록", link: "/manage/add_product" },
            { id: 1, name: "상품 관리", link: "/manage/product_list" },
          ]}
        />
        <NavCategory
          title={"주문 관리"}
          categories={[
            { id: 0, name: "주문 내역", link: "/manage/order" },
            { id: 1, name: "주문 관리", link: "/manage/order_list" },
          ]}
        />
        <NavCategory
          title={"고객 관리"}
          categories={[
            { id: 0, name: "취소 내역" },
            { id: 1, name: "교환 내역" },
            { id: 2, name: "환불 내역" },
          ]}
        />
        <NavCategory
          title={"카테고리 관리"}
          categories={[
            { id: 0, name: "카테고리 관리", link: "/manage/category" },
          ]}
        />
      </div>
    </div>
  );
};

export default AdminMainNav;
