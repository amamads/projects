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
import AppSidebarButton from "../molecules/AppSidebarButton";
import AppSidebarCollapsible from "../molecules/AppSidebarCollapsible";

export default function GeneralGroup() {
  const { general } = useSidebarStore(selectMenuButtons);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>General</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {general.items &&
            general.items.map((item) => (
              <AppSidebarButton
                item={item}
                key={item.title}
              />
            ))}
          {general.collapsibles &&
            general.collapsibles.map((item) => (
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
