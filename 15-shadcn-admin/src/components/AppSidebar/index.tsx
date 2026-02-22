import { Sidebar, SidebarContent } from "@/components/atoms/sidebar";
import { ScrollArea } from "../atoms/scroll-area";
import AppSidebarFooter from "./components/molecules/AppSidebarFooter";
import AppSidebarHeader from "./components/molecules/AppSidebarHeader";
import GeneralGroup from "./components/organisms/GeneralGroup";
import OtherGroup from "./components/organisms/OtherGroupe";
import PagesGroup from "./components/organisms/PagesGroup";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-0! w-64 p-2">
      <button className="group/resize absolute h-screen w-2 cursor-e-resize z-10 left-full top-0 flex justify-center">
        <div className="h-screen w-0.5 bg-background group-hover/resize:bg-muted-foreground z-20 pointer" />
      </button>
      <AppSidebarHeader />
      <SidebarContent className="gap-2">
        <GeneralGroup />
        <PagesGroup />
        <OtherGroup />
      </SidebarContent>
      <AppSidebarFooter />
    </Sidebar>
  );
}
