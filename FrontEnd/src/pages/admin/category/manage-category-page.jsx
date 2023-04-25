import ManageCategory from "../../../components/admin/category/manage-category";
import AdminLayout from "../../../components/admin/layout/admin-layout";

const categoryBundle = [
  // 카테고리 더미데이터 (각 카테고리의 타이틀이 있고 카테고리리스트들이 자식요소로있음)
  {
    id: 0,
    title: "wine", // 카테고리 번들의 타이틀
    link: "/product/category/wine", // 카테고리 타이틀의 링크주소
    categories: [
      // 카테고리 번들의 각 카테고리 객체들
      { id: 1, name: "레드와인", link: "/product/category/red" },
      { id: 2, name: "화이트와인", link: "/product/category/white" },
      { id: 3, name: "로제와인", link: "/product/category/rose" },
      { id: 4, name: "무알콜", link: "/product/category/nonealchol" },
    ],
  },
  {
    id: 1,
    title: "country",
    link: "/product/category/country",
    categories: [
      { id: 1, name: "스페인", link: "/product/category/spain" },
      { id: 2, name: "프랑스", link: "/product/category/france" },
      { id: 3, name: "미국", link: "/product/category/usa" },
    ],
  },
  {
    id: 2,
    title: "가격대별",
    link: "/product/category/price",
    categories: [
      { id: 1, name: "10000 ~ 30000", link: "/product/category/lowprice" },
    ],
  },
  {
    id: 3,
    title: "best",
    link: "/product/category/best",
    categories: [],
  },
];

const ManageCategoryPage = () => {
  return (
    <AdminLayout title="카테고리 관리">
      <ManageCategory categoryBundle={categoryBundle} />
    </AdminLayout>
  );
};

export default ManageCategoryPage;
