import AdminLayout from "../../../components/admin/layout/admin-layout";
import BreakdownOrderList from "../../../components/admin/order/breakdown-order-list";

const BreakdownOrderPage = () => {
  return (
    <AdminLayout title="주문 내역">
      <BreakdownOrderList />
    </AdminLayout>
  );
};

export default BreakdownOrderPage;
