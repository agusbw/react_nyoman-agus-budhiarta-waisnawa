import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import CreateProductPage from "./pages/CreateProduct/CreateProductPage";
import NotFoundPage from "./pages/Errors/404/404";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage";

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
