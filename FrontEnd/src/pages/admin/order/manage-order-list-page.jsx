import { useQuery } from "react-query";
import { getAllOrders } from "../../../api/api-order";
import AdminLayout from "../../../components/admin/layout/admin-layout";
import ManageOrderList from "../../../components/admin/order/manage-order-list";

const ManageOrderListPage = () => {
  const { data, isLoading, isError, error } = useQuery("orders", async () =>
    getAllOrders()
  );

  console.log(data);

  return (
    <AdminLayout title="주문 내역">
      {isLoading ? (
        <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
          Loading...
        </div>
      ) : !isError ? (
        <ManageOrderList orders={data} />
      ) : (
        <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
          {error.message}
        </div>
      )}
    </AdminLayout>
  );
};

export default ManageOrderListPage;
