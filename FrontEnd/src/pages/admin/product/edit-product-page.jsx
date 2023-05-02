import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../api/api-product";
import EditProduct from "../../../components/admin/product/edit-product";

const EditProductPage = () => {
  const productId = useParams().product_id;

  const { data, isLoading, isError, error } = useQuery(
    ["product", productId],
    async () => await getProductById(productId)
  );

  console.log(data);

  return (
    <>
      {isLoading ? (
        <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
          Loading...
        </div>
      ) : !isError ? (
        <EditProduct product={data} />
      ) : (
        <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
          {error.message}
        </div>
      )}
    </>
  );
};

export default EditProductPage;
