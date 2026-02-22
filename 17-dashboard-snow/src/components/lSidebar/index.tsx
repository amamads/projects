import avatarImg from "@/assets/avatar.png";
import {
  sidebarUserProfileItems,
  siedebarDashboardItems,
  siedebarPagesItems,
} from "@/consts";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/router/paths";
import capitalize from "@/utils/capitalize";
import type { ClassProp } from "class-variance-authority/types";
import { SquareUserRound, UserCircle } from "lucide-react";
import { useNavigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "../atoms/avatar";
import { Button } from "../atoms/button";
import {
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from "../atoms/sidebar";
import Disc from "../Disc";
import SubMenuButton from "./components/SubMenuButton";

export function LSidebar({ className }: ClassProp) {
  const navigate = useNavigate();
  return (
    <aside className={cn(className, "border-r col-flex gap-4 px-4 py-5")}>
      <header className="flex gap-2 items-center">
        <Avatar className="size-6">
          <AvatarImage src={avatarImg} />
          <AvatarFallback>AMS</AvatarFallback>
        </Avatar>
        <small>ByeWind</small>
      </header>

      <SidebarMenu>
        <div className="flex gap-2">
          <small className="text-muted-foreground">Favorites</small>
          <small className="text-muted">Recently</small>
        </div>
        <SidebarMenuItem>
          <Disc />
          <small>Overview</small>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Disc />
          <small>Projects</small>
        </SidebarMenuItem>
      </SidebarMenu>

      <SidebarMenu>
        <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
        <SidebarMenuItem className="bg-muted/50 rounded-xs items-center px-0">
          <div className="w-6  flex items-center justify-center">
            <div className="w-1 h-4 rounded-lg bg-chart-1 mr-auto"></div>
          </div>
          <div className="flex gap-1">
            <UserCircle className="size-4" />
            <small>Default</small>
          </div>
        </SidebarMenuItem>

        {siedebarDashboardItems.map(({ title, icon }) => (
          <SubMenuButton title={title} icon={icon} />
        ))}
      </SidebarMenu>

      <SidebarMenu>
        <SidebarGroupLabel>Pages</SidebarGroupLabel>

        <SubMenuButton title="user profile" icon={SquareUserRound} isOpen />
        <SidebarMenuSub className="border-0">
          {sidebarUserProfileItems.map((item) => (
            <SidebarMenuItem key={item}>
              <SidebarMenuSubButton className="w-full">
                {capitalize(item)}
              </SidebarMenuSubButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenuSub>

        {siedebarPagesItems.map(({ title, icon }) => (
          <SubMenuButton title={title} icon={icon} />
        ))}
      </SidebarMenu>

      <div className="grid w-4/5 mx-auto gap-2">
        <Button onClick={() => navigate(ROUTES.dashboard.root)}>
          Dashboard
        </Button>
        <Button onClick={() => navigate(ROUTES.eCommerce.root)}>
          eCommerce
        </Button>
        <Button onClick={() => navigate(ROUTES.userProfile.overview)}>
          Overview
        </Button>
      </div>
    </aside>
  );
}
