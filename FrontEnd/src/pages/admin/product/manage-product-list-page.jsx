import axios from "axios";
import { useQuery } from "react-query";
import { getAllProduct } from "../../../api/api-product";
import AdminLayout from "../../../components/admin/layout/admin-layout";
import ManageProductList from "../../../components/admin/product/manage-product-list";

const ManageProductListPage = (props) => {
  const { data, isLoading } = useQuery("products", getAllProduct);

  return (
    <>
      <AdminLayout title={"상품 관리"}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ManageProductList products={data} />
        )}
      </AdminLayout>
    </>
  );
};

export default ManageProductListPage;
