import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
};
