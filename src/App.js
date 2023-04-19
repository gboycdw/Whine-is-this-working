import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./pages/user/product-list";
import ProductDetailPage from "./pages/user/product-detail-page";

const router = createBrowserRouter([
  { path: "/", element: <ProductList /> },
  { path: "/product/:product_id", element: <ProductDetailPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
