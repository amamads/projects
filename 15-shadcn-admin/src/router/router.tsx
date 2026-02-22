import { createBrowserRouter } from "react-router";
import App from "../App";
import {
  Account,
  Appearance,
  Apps,
  Chats,
  Dashboard,
  Display,
  Forbidden,
  ForgotPassword,
  InternalServerError,
  MaintenanceError,
  NotFount,
  Notifications,
  OTP,
  Profile,
  SignIn,
  SignIn2,
  SignUp,
  Tasks,
  Unauthorized,
  Users,
} from "../features";
import { ROUTES } from "./paths";
import { SettingsLayout, ErrorsLayout, AuthLayout } from "@/layouts";
import { Help } from "@/pages";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: ROUTES.dashboard.root, element: <Dashboard />, index: true },
      { path: ROUTES.tasks.root, element: <Tasks /> },
      { path: ROUTES.apps.root, element: <Apps /> },
      { path: ROUTES.chats.root, element: <Chats /> },
      { path: ROUTES.users.root, element: <Users /> },
      {
        path: ROUTES.settings.root,
        element: <SettingsLayout />,
        children: [
          { path: ROUTES.settings.profile, element: <Profile /> },
          { path: ROUTES.settings.account, element: <Account /> },
          { path: ROUTES.settings.appearance, element: <Appearance /> },
          { path: ROUTES.settings.notifications, element: <Notifications /> },
          { path: ROUTES.settings.display, element: <Display /> },
        ],
      },
      {
        element: <ErrorsLayout />,
        children: [
          { path: ROUTES.errors.unauthorized, element: <Unauthorized /> },
          { path: ROUTES.errors.forbidden, element: <Forbidden /> },
          { path: ROUTES.errors.notFound, element: <NotFount /> },
          {
            path: ROUTES.errors.internalServerError,
            element: <InternalServerError />,
          },
          {
            path: ROUTES.errors.maintenanceError,
            element: <MaintenanceError />,
          },
        ],
      },
      { path: ROUTES.generals.help, element: <Help /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: ROUTES.auth.signUp, element: <SignUp /> },
      { path: ROUTES.auth.signIn, element: <SignIn /> },
      { path: ROUTES.auth.signIn2, element: <SignIn2 /> },
      { path: ROUTES.auth.forgotPassword, element: <ForgotPassword /> },
      { path: ROUTES.auth.otp, element: <OTP /> },
    ],
  },
]);
export default router;
