import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetailPage from "./pages/user/product/product-detail-page";
import MainPage from "./pages/user/main-page";
import { QueryClient, QueryClientProvider } from "react-query";
import CartContext from "./components/store/cart-context";
import ProductList from "./pages/user/product/product-list-page";
import AdminPage from "./pages/admin/admin-page";
import ManageProductListPage from "./pages/admin/product/manage-product-list-page";
import Cart from "./pages/user/order/cart-page";

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
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </QueryClientProvider>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
