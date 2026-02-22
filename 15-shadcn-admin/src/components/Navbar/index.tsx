import { useLocation } from "react-router";
import { Separator } from "../atoms/separator";
import { SidebarTrigger } from "../atoms/sidebar";
// import { SidebarTrigger } from "../atoms/sidebar";
import AvatarDropdown from "./components/AvatarDropdown";
import MenuDropdown from "./components/MenuDropdown";
import SearchDialog from "./components/SearchDialog";
import ThemeDropdown from "./components/ThemeDropdown";
import ThemeSettinga from "./components/ThemeSettings";
import { ROUTES } from "@/router/paths";

export default function Navbar() {
  const { pathname } = useLocation();
  const inDashboardPage = pathname === ROUTES.dashboard.root;
  return (
    <div className="flex justify-between p-4 w-full gap-2">
      <div className="flex gap-3 items-center">
        <SidebarTrigger variant="outline" className="size-8" />

        <Separator orientation="vertical" />
        {inDashboardPage && <MenuDropdown />}
      </div>

      <div className="flex gap-3 items-center w-full justify-end">
        <SearchDialog inDashboardPage={inDashboardPage} />
        <ThemeDropdown />
        <ThemeSettinga />
        <AvatarDropdown />
      </div>
    </div>
  );
}
