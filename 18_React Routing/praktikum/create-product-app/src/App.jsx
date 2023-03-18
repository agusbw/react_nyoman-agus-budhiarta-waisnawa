import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import CreateProductPage from "./pages/CreateProduct/CreateProductPage";
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage";
import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/Errors/404/404";
import Navbar from "./components/layouts/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { path: "/", element: <HomePage />, index: true },
        {
          path: "/products",
          element: <PrivateRoute component={CreateProductPage} />,
        },
        {
          path: "/products/:id",
          element: <PrivateRoute component={ProductDetailPage} />,
        },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/notfound", element: <NotFoundPage /> },
    {
      path: "*",
      element: (
        <Navigate
          to={{
            pathname: "/notfound",
          }}
          replace
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
