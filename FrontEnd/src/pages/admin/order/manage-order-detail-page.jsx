import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getOrderByOrderIndex } from "../../../api/api-order";
import AdminLayout from "../../../components/admin/layout/admin-layout";
import ManageOrderDetail from "../../../components/admin/order/manage-order-detail";

const ManageOrderDetailPage = () => {
  const orderIndex = useParams().order_index;

  const { data, isLoading, isError, error } = useQuery(
    ["orders", orderIndex],
    async () => getOrderByOrderIndex(orderIndex)
  );

  console.log(data, isLoading, isError, error);

  return (
    <AdminLayout title="주문 상세 관리">
      {isLoading ? (
        <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
          Loading...
        </div>
      ) : !isError ? (
        <ManageOrderDetail order={data} />
      ) : (
        <div className="flex absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-2">
          {error.message}
        </div>
      )}
    </AdminLayout>
  );
};

export default ManageOrderDetailPage;
