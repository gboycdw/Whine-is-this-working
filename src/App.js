import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetailPage from "./pages/product-detail-page";

const router = createBrowserRouter([{ path: "/product/:product_id", element: <ProductDetailPage /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
