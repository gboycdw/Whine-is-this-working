import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getOrderByOrderBuyerEmail } from "../../../api/api-order";
import AdminLayout from "../../../components/admin/layout/admin-layout";
import ManageOrderDetail from "../../../components/admin/order/manage-order-detail";

const ManageOrderDetailPage = () => {
  const buyerEmail = useParams().buyer_email;

  console.log(buyerEmail);

  const { data, isLoading, isError, error } = useQuery("orders", async () =>
    getOrderByOrderBuyerEmail(buyerEmail)
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
