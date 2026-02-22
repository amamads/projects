import { Button } from "@/components/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import {
  ArrowDownAZ,
  ArrowDownZa,
  Check,
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react";
import {
  selectSetSort,
  selectSort,
  useAppsStore,
} from "../../store/apps-store";

export default function SortAppsDropdown() {
  const sort = useAppsStore(selectSort);
  const setSort = useAppsStore(selectSetSort);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-muted-foreground">
          <SlidersHorizontal />
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setSort("ascending")}>
          <ArrowDownAZ />
          <span>Ascending</span>
          {sort === "ascending" && <Check />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSort("descending")}>
          <ArrowDownZa />
          <span>descending</span>
          {sort === "descending" && <Check />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
