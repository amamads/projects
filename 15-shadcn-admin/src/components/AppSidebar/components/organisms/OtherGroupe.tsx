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
export default function OtherGroup() {
  const { other } = useSidebarStore(selectMenuButtons);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Other</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {other.collapsibles &&
            other.collapsibles.map((item) => (
              <AppSidebarCollapsible
                details={item}
                key={item.title}
              />
            ))}
          {other.items &&
            other.items.map((item) => (
              <AppSidebarButton
                item={item}
                key={item.title}
              />
            ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
