import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/main-page";
import ProductDetailPage from "./pages/product-detail-page";

const router = createBrowserRouter([{ path: "/", element: <MainPage /> },{ path: "/ProductDetail", element: <ProductDetailPage /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
