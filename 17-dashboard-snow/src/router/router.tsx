import App from "@/App";
import Dashboard from "@/pages/Dashboard";
import { createBrowserRouter } from "react-router";
import { ROUTES } from "./paths";
import ECommerce from "@/pages/ECommerce";
import Overview from "@/pages/Overview";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: ROUTES.eCommerce.root, element: <ECommerce /> },
      { path: ROUTES.userProfile.overview, element: <Overview /> },
    ],
  },
]);
export default router;
