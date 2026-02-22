import { Outlet } from "react-router";
import { LSidebar } from "./components/lSidebar";
import { LSidebarMobile } from "./components/lSidebar/LSidebarMoblie";
import Navbar from "./components/Navbar";
import RSidebar from "./components/RSidebar";
import RSidebarMoblie from "./components/RSidebar/RSidebarMoblie";
import {
  selectLSidebar,
  selectRSidebar,
  useSidebarsStore,
} from "./Stores/sidebars";

export default function App() {
  const rSidebarOpen = useSidebarsStore(selectRSidebar);
  const lSidebarOpen = useSidebarsStore(selectLSidebar);

  return (
    <div className="bg-background flex m-auto box-content border-l border-r overflow-hidden h-screen min-w-sm">
      {/* {lSidebarOpen && (
        <>
        </>
      )} */}
      <LSidebar className="max-md:hidden" />
      <LSidebarMobile />

      <main className="flex-1 overflow-auto">
        <Navbar />
        <div className="p-7 space-y-4">
          <Outlet />
        </div>
      </main>

      {/* {rSidebarOpen && (
        <>
          </>
        )} */}
          <RSidebar className="max-lg:hidden" />
          <RSidebarMoblie />
    </div>
  );
}
