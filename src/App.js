import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProductList from "./pages/user/product-list";

import MainPage from "./pages/user/main-page";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/product/product_list/:category", element: <ProductList /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
