import axios from "axios";
import { useQuery } from "react-query";
import AdminLayout from "../../../components/admin/layout/admin-layout";
import ManageProductList from "../../../components/admin/product/manage-product-list";

const ManageProductListPage = (props) => {
  const { data, isLoading } = useQuery("products", async () => {
    const data = await axios.get(`http://34.22.85.44/api/products`);
    return data.data;
  });

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
