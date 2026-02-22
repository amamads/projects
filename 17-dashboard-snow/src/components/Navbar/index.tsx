import {
  Bell,
  Moon,
  Search,
  Sidebar,
  Star,
  Sun,
  TimerReset,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../atoms/breadcrumb";
import { Input } from "../atoms/input";
import { useTheme } from "@/providers/thme-provider/use-theme";
import { selectToggleLSidebar, selectToggleRSidebar, useSidebarsStore } from "@/Stores/sidebars";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === "light" ? "dark" : "light";
  const toggleRSidebar = useSidebarsStore(selectToggleRSidebar)
  const toggleLSidebar = useSidebarsStore(selectToggleLSidebar)

  return (
    <div className="w-full h-17 flex py-5 px-7 items-center justify-between border-b">
      <div className="flex gap-2 items-center">
        <button onClick={toggleLSidebar}>
        <Sidebar className="size-5" />
        </button>
        <Star className="size-5" />
        <Breadcrumb>
          <BreadcrumbList className="gap-2 flex-nowrap max-sm:hidden">
            <BreadcrumbItem>Dashboard</BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem className="text-foreground">Default</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex gap-5 items-center ml-auto max-sm:flex-1 max-sm:justify-end">
        <div className="relative max-sm:mr-auto">
          <Search className="size-4 absolute bottom-1/2 left-2 translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="w-40 h-7 border-0 pl-7 max-sm:w-30"
          />
          <p className="absolute bottom-1/2 right-5 translate-1/2 flex items-center text-muted-foreground">
            ⌘/
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setTheme(nextTheme)}
            className="flex-center cursor-pointer"
          >
            <Sun className="size-5 hidden dark:inline" />
            <Moon className="size-5 dark:hidden" />
          </button>
          <TimerReset className="size-5" />
          <Bell className="size-5" />
        <button onClick={toggleRSidebar}>
          <Sidebar className="size-5" />
        </button>
        </div>
      </div>
    </div>
  );
}
