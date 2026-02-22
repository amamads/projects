import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/atoms/sidebar";
import {
  selectMenuButtons,
  useSidebarStore,
} from "@/stores/sidebar-store";
import AppSidebarCollapsible from "../molecules/AppSidebarCollapsible";

export default function PagesGroup() {
  const { pages } = useSidebarStore(selectMenuButtons);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Pages</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {pages.collapsibles &&
            pages.collapsibles.map((item) => (
              <AppSidebarCollapsible
                details={item}
                key={item.title}
              />
            ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
