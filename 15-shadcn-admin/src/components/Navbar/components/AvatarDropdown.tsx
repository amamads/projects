import { Avatar, AvatarFallback } from "@/components/atoms/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import { ROUTES } from "@/router/paths";
import { Link } from "react-router";
import SingOutDialog from "./SingOutDialog";
import { ArrowBigUp, Command } from "lucide-react";

const items = [
  {
    title: "Profile",
    path: ROUTES.settings.profile,
    shortcut: (
      <div className="flex items-center text-muted-foreground gap-1">
        <ArrowBigUp className="size-3" />
        <Command className="size-3" />
        <span className="text-xs">P</span>
      </div>
    ),
  },
  {
    title: "Billing",
    path: ROUTES.settings.profile,
    shortcut: (
      <div className="flex items-center gap-1  text-muted-foreground">
        <Command className="size-3" />
        <span className="text-xs">B</span>
      </div>
    ),
  },
  {
    title: "Settings",
    path: ROUTES.settings.profile,
    shortcut: (
      <div className="flex items-center gap-1  text-muted-foreground">
        <Command className="size-3" />
        <span className="text-xs">S</span>
      </div>
    ),
  },
  {
    title: "New Team",
    path: ROUTES.settings.profile,
    shortcut: <div></div>,
  },
];

export default function AvatarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback className="text-sm font-bold">SN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-55">
        <DropdownMenuLabel>
          <p className="text-base">satnaing</p>
          <p className="text-muted-foreground text-xs">satnaingdev@gmail.com</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map(({ title, path, shortcut }) => (
          <DropdownMenuItem key={title}>
            <Link to={path} className="flex justify-between w-full">
              <p>{title}</p>
              {shortcut}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <SingOutDialog />
          <div className="flex items-center ml-auto">
            <ArrowBigUp className="size-3 text-destructive"/>
            <Command className="size-3 text-destructive" />
            <span className="text-xs">Q</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
