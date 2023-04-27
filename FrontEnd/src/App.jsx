import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetailPage from "./pages/user/product/product-detail-page";
import MainPage from "./pages/main-page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// import CartContext from "./components/store/cart-context";
import ManageProductListPage from "./pages/admin/product/manage-product-list-page";
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
import ManageOrderDetailPage from "./pages/admin/order/manage-order-detail-page";
import OrderPage from "./pages/user/order/order-page";
import OrderCompletePage from "./pages/user/order/order-complete-page";
import SignUpCompletePage from "./pages/auth/signup-complete-page";
import AuthContex from "./components/store/auth-context";
import Layout from "./components/Layout/layout";

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
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
                  <Route
                    path="/ordercomplete"
                    element={<OrderCompletePage />}
                  />

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
                </Routes>
              </Layout>
            </QueryClientProvider>
          </CartContext>
        </AuthContex>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
