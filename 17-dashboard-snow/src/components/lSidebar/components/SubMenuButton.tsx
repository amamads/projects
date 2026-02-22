import { Button } from "@/components/atoms/button";
import { cn } from "@/lib/utils";
import type { SidebarCollapItem } from "@/types";
import capitalize from "@/utils/capitalize";
import { ChevronRight } from "lucide-react";

export default function SubMenuButton({
  title,
  icon: Icon,
  isOpen,
}: SidebarCollapItem & { isOpen?: boolean }) {
  return (
    <Button
      key={title}
      variant="ghost"
      className="size-auto flex justify-start gap-1 px-2! py-1 h-7!"
    >
      <ChevronRight
        className={cn(
          "size-4 text-muted",
          isOpen ? "rotate-90" : null,
        )}
      />
      <Icon />
      <small>{capitalize(title)}</small>
    </Button>
  );
}
