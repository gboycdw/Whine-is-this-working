import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/user/main-page";

const router = createBrowserRouter([{ path: "/", element: <MainPage /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
