import { useQuery } from "react-query";
import { getAllCategories } from "../../../api/api-category";
import ManageCategory from "../../../components/admin/category/manage-category";

const ManageCategoryPage = () => {
  const { data, isLoading, isError, error } = useQuery(
    "category",
    async () => await getAllCategories()
  );

  return (
    <>
      {isLoading ? (
        <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
          Loading...
        </div>
      ) : !isError ? (
        <ManageCategory categoryBundle={data} />
      ) : (
        <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
          {error.message}
        </div>
      )}
    </>
  );
};

export default ManageCategoryPage;
