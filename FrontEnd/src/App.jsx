import { HashRouter, Route, Routes } from "react-router-dom";
import ProductDetailPage from "./pages/user/product/product-detail-page";
import MainPage from "./pages/main-page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// import CartContext from "./components/store/cart-context";
import ManageProductListPage from "./pages/admin/product/manage-product-list-page";
import NewProductPage from "./pages/admin/product/new-product-page";
import EditProductPage from "./pages/admin/product/edit-product-page";
import CartContext from "./components/store/cart-context";
import ManageOrderListPage from "./pages/admin/order/manage-order-list-page";
import ProductListPage from "./pages/user/product/product-list-page";
import CartPage from "./pages/user/order/cart-page";
import SignUpPage from "./pages/auth/signup-page";
import LoginPage from "./pages/auth/login-page";
import PersonalInfo from "./components/user/my-page-component/personal-info";
import ManageCategoryPage from "./pages/admin/category/manage-category-page";
import ManageOrderDetailPage from "./pages/admin/order/manage-order-detail-page";
import OrderPage from "./pages/user/order/order-page";
import OrderCompletePage from "./pages/user/order/order-complete-page";
import SignUpCompletePage from "./pages/auth/signup-complete-page";
import AuthContex from "./components/store/auth-context";
import Layout from "./components/Layout/layout";
import OrderedItemsList from "./components/user/my-page-component/ordered-items-list/ordered-items-list";
import PersonalInfoModify from "./components/user/my-page-component/personal-info-modify";
import CusServiceCenter from "./components/user/my-page-component/cus-service-center";
import Withdrawl from "./components/user/my-page-component/withdrawal";
import MyPage from "./pages/user/my-page/my-page";
import OrderedItemDetail from "./components/user/my-page-component/ordered-items-list/ordered-item-detail";

const queryClient = new QueryClient();

function App() {
  return (
    <HashRouter>
      <AuthContex>
        <CartContext>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={true} />
            <Layout>
              <Routes>
                <Route path="/" element={<MainPage />} />

                {/* 장바구니 페이지 라우터 */}
                <Route path="/cart" element={<CartPage />} />

                {/* 로그인 페이지 라우터 */}
                <Route path="/login" element={<LoginPage />} />

                {/* 회원가입 페이지 라우터 */}
                <Route path="/signup" element={<SignUpPage />} />

                {/* 회원가입 완료 페이지 라우터 */}
                <Route
                  path="/signupcomplete"
                  element={<SignUpCompletePage />}
                />

                {/* 주문 페이지 라우터 */}
                <Route path="/order" element={<OrderPage />} />

                {/* 주문 완료 페이지 라우터 */}
                <Route path="/ordercomplete" element={<OrderCompletePage />} />

                <Route
                  path="/category/:category_best"
                  element={<ProductListPage />}
                />
                <Route
                  path="/category/:category_bundle_title/:category_name"
                  element={<ProductListPage />}
                />
                <Route
                  path="/category/prices/:price_1/:price_2"
                  element={<ProductListPage />}
                />

                <Route
                  path="/product/:product_id"
                  element={<ProductDetailPage />}
                />
                <Route path="/manage" element={<ManageProductListPage />} />
                <Route
                  path="/manage/product_list"
                  element={<ManageProductListPage />}
                />
                <Route
                  path="/manage/new_product"
                  element={<NewProductPage />}
                />
                <Route
                  path="/manage/edit_product/:product_id"
                  element={<EditProductPage />}
                />

                <Route
                  path="/manage/order_list"
                  element={<ManageOrderListPage />}
                />
                <Route
                  path="/manage/order_manage/:order_index"
                  element={<ManageOrderDetailPage />}
                />
                <Route
                  path="/manage/category"
                  element={<ManageCategoryPage />}
                />
                <Route path="/mypage" element={<MyPage />}>
                  <Route path="/mypage" element={<OrderedItemsList />} />
                  {/* //마이페이지 네비게이션 중첩라우터 */}
                  <Route
                    path="ordered-items-list"
                    element={<OrderedItemsList />}
                  />
                  <Route path="personal-info" element={<PersonalInfo />} />
                  <Route
                    path="personal-info-modify"
                    element={<PersonalInfoModify />}
                  />
                  <Route
                    path="cus-service-center"
                    element={<CusServiceCenter />}
                  />
                  <Route path="withdrawl" element={<Withdrawl />} />
                  <Route
                    path="ordered-item-detail"
                    element={<OrderedItemDetail />}
                  />
                </Route>
              </Routes>
            </Layout>
          </QueryClientProvider>
        </CartContext>
      </AuthContex>
    </HashRouter>
  );
}

export default App;
