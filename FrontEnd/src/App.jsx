import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetailPage from "./pages/user/product/product-detail-page";
import MainPage from "./pages/main-page";
import { QueryClient, QueryClientProvider } from "react-query";
// import CartContext from "./components/store/cart-context";
import AdminPage from "./pages/admin/admin-page";
import ManageProductListPage from "./pages/admin/product/manage-product-list-page";
import MyPage from "./pages/user/my-page/my-page";
import OrderInfomation from "./components/user/my-page-component/order-information";
import CusServiceCenter from "./components/user/my-page-component/cus-service-center";
import PersonalInfoModify from "./components/user/my-page-component/personal-info-modify";
import Withdrawl from "./components/user/my-page-component/withdrawal";
import Cart from "./pages/user/order/cart-page";
import NewProductPage from "./pages/admin/product/new-product-page";
import EditProductPage from "./pages/admin/product/edit-product-page";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import CartContext from "./components/store/cart-context";
import ManageOrderListPage from "./pages/admin/order/manage-order-list-page";
import ProductListPage from "./pages/user/product/product-list-page";
import CartPage from "./pages/user/order/cart-page";
import SignUpPage from "./pages/auth/signup-page";
import LoginPage from "./pages/auth/login-page";
import PersonalInfo from "./components/user/my-page-component/personal-info";
import ManageCategoryPage from "./pages/admin/category/manage-category-page";
import ManageOrderPage from "./pages/admin/order/manage-order-page";
const queryClient = new QueryClient();

function App() {
  return (
    // <RecoilRoot>
    <BrowserRouter>
      <CartContext>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            {/* 장바구니 페이지 라우터 */}
            <Route path="/cart" element={<CartPage />} />

            {/* 로그인 페이지 라우터 */}
            <Route path="/login" element={<LoginPage />} />

            {/* 회원가입 페이지 라우터 */}
            <Route path="/signup" element={<SignUpPage />} />
            <Route
              path="/product/category/:category"
              element={<ProductListPage />}
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
            <Route path="/manage/new_product" element={<NewProductPage />} />
            <Route
              path="/manage/edit_product/:product_id"
              element={<EditProductPage />}
            />
            <Route path="/manage/order_manage" element={<ManageOrderPage />} />
            <Route
              path="/manage/order_list"
              element={<ManageOrderListPage />}
            />

            <Route path="/manage/category" element={<ManageCategoryPage />} />
            <Route path="/mypage" element={<MyPage />}>
              <Route path="order-infromation" element={<OrderInfomation />} />
              {/* //마이페이지 네비게이션 중첩라우터 */}
              <Route path="" element={<OrderInfomation />} />
              <Route path="personal-info" element={<PersonalInfo />} />
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
    // </RecoilRoot>
  );
}

export default App;
