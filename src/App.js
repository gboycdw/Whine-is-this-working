import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetailPage from "./pages/user/porduct/product-detail-page";
import MainPage from "./pages/main-page";
import { QueryClient, QueryClientProvider } from "react-query";
import CartContext from "./components/store/cart-context";
import ProductList from "./pages/user/porduct/product-list";
import AdminPage from "./pages/admin/admin-page";
import ManageProductListPage from "./pages/admin/product/manage-product-list-page";
import MyPage from "./pages/user/my-page/my-page";
import OrderInfomation from "./components/user/my-page-component/order-information";
import CusServiceCenter from "./components/user/my-page-component/cus-service-center";
import OrderCancelInfo from "./components/user/my-page-component/oreder-cancel-info";
import PersonalInfoModify from "./components/user/my-page-component/personal-info-modify";
import Withdrawl from "./components/user/my-page-component/withdrawal";
const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/product/category/:category"
              element={<ProductList />}
            />
            <Route
              path="/product/:product_id"
              element={<ProductDetailPage />}
            />
            <Route path="/manage" element={<AdminPage />} />
            <Route
              path="/manage/product_list"
              element={<ManageProductListPage />}
            />
            <Route path="/mypage" element={<MyPage />}>
              {/* 마이페이지 중첩라우터 */}
              <Route path="order-infromation" element={<OrderInfomation />} />
              <Route path="" element={<OrderInfomation />} />
              <Route path="order-cancel" element={<OrderCancelInfo />} />
              <Route
                path="personal-info-modify"
                element={<PersonalInfoModify />}
              />
              <Route path="cus-service-center" element={<CusServiceCenter />} />
              <Route path="withdrawl" element={<Withdrawl />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
