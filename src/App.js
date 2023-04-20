import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetailPage from "./pages/user/porduct/product-detail-page";
import MainPage from "./pages/user/main-page";
import { QueryClient, QueryClientProvider } from "react-query";
import CartContext from "./components/store/cart-context";
import MyPage from "./pages/user/my-page/my-page";
import ProductList from "./pages/user/porduct/product-list";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/product/category/:category", element: <ProductList /> },
  { path: "/product/:product_id", element: <ProductDetailPage /> },
  { path: "/mypage", element: <MyPage /> },
]);

function App() {
  return (
    <CartContext>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </CartContext>
  );
}

export default App;
