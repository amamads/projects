import { Avatar, AvatarFallback } from "@/components/atoms/avatar";
import { Badge } from "@/components/atoms/badge";
import { Button } from "@/components/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import { SidebarHeader, useSidebar } from "@/components/atoms/sidebar";
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Item = {
  title: string;
  icon: LucideIcon;
};

const items: Item[] = [
  {
    title: "Account",
    icon: BadgeCheck,
  },
  {
    title: "Biling",
    icon: CreditCard,
  },
  {
    title: "Notifications",
    icon: Bell,
  },
];

export default function AppSidebarFooter() {
  const { open, isMobile } = useSidebar();
  const isIconOnly = !open && !isMobile;
  return (
    <SidebarHeader>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={`px-2 py-6 ${isIconOnly && "justify-center px-0"}`}
          >
            <div className="grid grid-cols-[auto_1fr_auto] items-center w-full">
              <Badge variant="secondary" className="size-8 rounded-lg">
                <p className="text-sm font-normal">SN</p>
              </Badge>
              {!isIconOnly && (
                <>
                  <div className="place-self-start grid justify-items-start ml-2">
                    <p>satnaing</p>
                    <p className="text-xs font-light">test@sample.demo</p>
                  </div>
                  <ChevronsUpDown />
                </>
              )}
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-70">
          <DropdownMenuLabel className="flex">
            <Avatar>
              <AvatarFallback className="text-sm font-bold">SN</AvatarFallback>
            </Avatar>
            <div className="place-self-start grid justify-items-start ml-2">
              <p>satnaing</p>
              <p className="text-xs">test@sample.demo</p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-2">
            <Sparkles className="size-4.5" />
            <span>Upgrade to Pro</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          {items.map((item, i) => (
            <DropdownMenuItem key={i} className="flex items-center">
              <item.icon className="size-4.5" />
              <span>{item.title}</span>
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex items-center gap-2"
            variant="destructive"
          >
            <LogOut className="size-4.5" />
            <span>Sign out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarHeader>
  );
}
