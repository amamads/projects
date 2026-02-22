import { Button } from "@/components/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import { Menu } from "lucide-react";

export default function MenuDropdown() {
  return (
    <>
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="size-8">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <DropdownMenuItem>Overview</DropdownMenuItem>
            <DropdownMenuItem disabled>Products</DropdownMenuItem>
            <DropdownMenuItem disabled>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden lg:flex gap-5">
        <Button variant='ghost' className="p-0 hover:bg-background! hover:text-foreground/85">Overview</Button>
        <Button variant='ghost' className="p-0 hover:bg-background! text-muted-foreground hover:text-foreground">Customers</Button>
        <Button variant='ghost' className="p-0 hover:bg-background! text-muted-foreground hover:text-foreground">Products</Button>
        <Button variant='ghost' className="p-0 hover:bg-background! text-muted-foreground hover:text-foreground">Settings</Button>
      </div>
    </>
  );
}
