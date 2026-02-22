import { Badge } from "@/components/atoms/badge";
import {
  SidebarMenuButton,
  SidebarMenuSubItem,
} from "@/components/atoms/sidebar";
import type { MenuButton } from "@/types/sidebar";
import { Link, useLocation } from "react-router";

export default function AppSidebarButton({
  item: { title, icon: Icon, path },
}: {
  item: MenuButton;
}) {
  const { pathname } = useLocation();
  return (
    <SidebarMenuSubItem>
      <SidebarMenuButton asChild isActive={path === pathname}>
        <Link to={path}>
          {Icon && <Icon />}
          <span>{title}</span>
          {title === "Chats" && <Badge className="size-4 px-1!">3</Badge>}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuSubItem>
  );
}
