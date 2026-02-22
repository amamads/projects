// import type { Task } from "@/data/tasks-data";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/atoms/dropdown-menu";
import type { Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import { GrHide } from "react-icons/gr";

interface SortableHeaderProps<T> {
  column: Column<T, unknown>;
  lable: string;
  showHideOption?: boolean;
}

export const SortableHeader = <T,>({
  column,
  lable,
  showHideOption = true,
}: SortableHeaderProps<T>) => {
  const isSorted = column.getIsSorted();
  const SortingIcon =
    isSorted == "asc"
      ? ArrowUp
      : isSorted === "desc"
        ? ArrowDown
        : ChevronsUpDown;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={`flex justify-start items-center py-3.5 select-none cursor-pointer p-2 gap-1 ${
            isSorted && "text-primary"
          }`}
        >
          <span>{lable}</span>
          <SortingIcon className="size-3.5" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
          <ArrowUp className="size-4 mr-2" />
          Asc
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
          <ArrowDown className="size-4 mr-2" />
          Desc
        </DropdownMenuItem>
        {showHideOption && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => column.clearSorting()}>
              <GrHide className="size-4 mr-2 opacity-90" />
              Hide
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
