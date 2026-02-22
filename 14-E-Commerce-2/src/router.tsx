import App from "./App";
import { createBrowserRouter } from "react-router";
import { AuthLayout, MainLayout } from "./layouts";
import {
  Cart,
  Dashboard,
  Home,
  Login,
  NotFoundPage,
  PDP,
  PLP,
  Register,
} from "./features";

export const ROUTES = {
  default: { home: "/" },
  auth: {
    login: "/login",
    register: "/register",
  },
  main: {
    PLP: "/products",
    PDP: "/products/:product-id",
    dashboard: "/dashboard",
    cart: "/cart",
    toPDP: (id: number | string) => `/products/${id}`,
  },
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: ROUTES.main.PDP, element: <PDP /> },
          { path: ROUTES.main.PLP, element: <PLP /> },
          { path: ROUTES.main.dashboard, element: <Dashboard /> },
          { path: ROUTES.main.cart, element: <Cart /> },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          { path: ROUTES.auth.register, element: <Register /> },
          { path: ROUTES.auth.login, element: <Login /> },
        ],
      },
      { path: "/*", element: <NotFoundPage /> },
    ],
  },
]);
export default router;
