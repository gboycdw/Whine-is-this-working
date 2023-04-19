import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./pages/user/product-list";
import ProductDetailPage from "./pages/product-detail-page";
import MainPage from "./pages/user/main-page";

const router = createBrowserRouter([{ path: "/", element: <ProductList /> },{ path: "/product/:product_id", element: <ProductDetailPage /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
