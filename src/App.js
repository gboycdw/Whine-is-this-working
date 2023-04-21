import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetailPage from "./pages/user/porduct/product-detail-page";
import MainPage from "./pages/user/main-page";
import { QueryClient, QueryClientProvider } from "react-query";
import CartContext from "./components/store/cart-context";
import ProductList from "./pages/user/porduct/product-list";

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
          </Routes>
        </QueryClientProvider>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
