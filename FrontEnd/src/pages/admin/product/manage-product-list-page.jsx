import { useQuery } from "react-query";
import { getAllProducts } from "../../../api/api-product";
import ManageProductList from "../../../components/admin/product/manage-product-list";

const ManageProductListPage = () => {
  const { data, isLoading, isError, error } = useQuery(
    "products",
    async () => await getAllProducts()
  );

  return (
    <>
      {isLoading ? (
        <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
          Loading...
        </div>
      ) : !isError ? (
        <ManageProductList products={data} />
      ) : (
        <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
          {error.message}
        </div>
      )}
    </>
  );
};

export default ManageProductListPage;
