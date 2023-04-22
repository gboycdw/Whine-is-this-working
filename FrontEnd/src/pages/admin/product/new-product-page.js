import AdminLayout from "../../../components/admin/layout/admin-layout";
import NewProduct from "../../../components/admin/product/new-product";

const NewProductPage = () => {
  return (
    <AdminLayout title="상품등록">
      <NewProduct />
    </AdminLayout>
  );
};

export default NewProductPage;
