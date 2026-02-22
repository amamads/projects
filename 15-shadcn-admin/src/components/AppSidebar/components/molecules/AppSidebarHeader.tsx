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
  AppWindow,
  AudioWaveform,
  ChevronsUpDown,
  Command,
  Plus,
  type LucideIcon,
} from "lucide-react";

type Item = {
  title: string;
  icon: LucideIcon;
  number: number;
};

const items: Item[] = [
  {
    title: "Shadcn Admin",
    icon: Command,
    number: 1,
  },
  {
    title: "Acme Inc",
    icon: AppWindow,
    number: 2,
  },
  {
    title: "Acme Corp.",
    icon: AudioWaveform,
    number: 3,
  },
];

export default function AppSidebarHeader() {
  const { open, isMobile } = useSidebar();
  const isIconOnly = !open && !isMobile;
  return (
    <SidebarHeader>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className={`px-2 py-6 ${isIconOnly && 'justify-center px-0'}`}>
            <div className="grid grid-cols-[auto_1fr_auto] items-center w-full">
              <Badge className="size-8 rounded-lg row-span-2">
                <Command />
              </Badge>
              {!isIconOnly && (
                <>
                  <div className="place-self-start grid justify-items-start ml-2">
                    <p>Shadcn Admin</p>
                    <p className="text-xs ">Vite + ShadcnUI</p>
                  </div>
                  <ChevronsUpDown />
                </>
              )}
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-70">
          <DropdownMenuLabel>Teams</DropdownMenuLabel>
          {items.map((item, i) => (
            <DropdownMenuItem asChild key={i}>
              <div className="flex">
                <div className="flex items-center gap-1">
                  <Badge variant="outline" className="rounded-sm size-7">
                    <div>
                      <item.icon className="size-4" />
                    </div>
                  </Badge>
                  <span>{item.title}</span>
                </div>
                <div className="flex items-center ml-auto gap-0.5">
                  <Command className="size-3.5" />
                  <span className="text-xs">{item.number}</span>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <div className="flex items-center">
              <Badge variant="secondary" className="rounded-lg size-7">
                <Plus />
              </Badge>
              <span className="text-secondary-foreground">Add team</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarHeader>
  );
}
