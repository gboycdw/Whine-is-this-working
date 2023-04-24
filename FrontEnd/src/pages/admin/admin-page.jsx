import AdminLayout from "../../components/admin/layout/admin-layout";
import AdminMainContent from "../../components/admin/main/admin-main-content";

const AdminPage = () => {
  return (
    <>
      <AdminLayout title={"메인"}>
        <AdminMainContent />
      </AdminLayout>
    </>
  );
};

export default AdminPage;
