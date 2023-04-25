import AdminLayout from "../../../components/admin/layout/admin-layout";
import ManageOrderDetail from "../../../components/admin/order/manage-order-detail";

const ManageOrderDetailPage = () => {
  return (
    <AdminLayout title="주문 상세 관리">
      <ManageOrderDetail />
    </AdminLayout>
  );
};

export default ManageOrderDetailPage;
