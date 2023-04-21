import AdminLayout from "../../../components/admin/layout/admin-layout";
import ManageProductList from "../../../components/admin/product/manage-product-list";

const ManageProductListPage = (props) => {
  return (
    <>
      <AdminLayout title={"상품 관리"}>
        <ManageProductList />
      </AdminLayout>
    </>
  );
};

export default ManageProductListPage;
