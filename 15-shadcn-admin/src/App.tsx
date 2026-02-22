import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import AppProvider from "./providers/AppProvider";

export default function App() {
  return (
    <AppProvider>
        <div className="w-full overflow-auto h-screen pt-0.5">
            <Navbar />
            <Outlet />
        </div>
    </AppProvider>
  );
}
