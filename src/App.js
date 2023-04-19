import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./pages/user/product-list";

const router = createBrowserRouter([{ path: "/", element: <ProductList /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
