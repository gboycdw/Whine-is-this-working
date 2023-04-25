import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import AdminLayout from "../../../components/admin/layout/admin-layout";
import EditProduct from "../../../components/admin/product/edit-product";

const EditProductPage = () => {
  const productId = useParams().product_id;

  const { data, isLoading, error } = useQuery(
    ["product", productId],
    async () => {
      const data = await axios.get(
        `http://34.22.85.44/api/products/${productId}`
      );
      return data.data;
    }
  );

  console.log(error);
  return (
    <AdminLayout title="상품수정">
      {isLoading ? <div>Loading... </div> : <EditProduct product={data} />}
    </AdminLayout>
  );
};

export default EditProductPage;
