import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./pages/user/product-list";
import ProductDetailPage from "./pages/user/product-detail-page";
import MainPage from "./pages/user/main-page";
import { QueryClient, QueryClientProvider } from "react-query";
import CartContext from "./components/store/cart-context";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/product/category/:category", element: <ProductList /> },
  { path: "/product/:product_id", element: <ProductDetailPage /> },
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
