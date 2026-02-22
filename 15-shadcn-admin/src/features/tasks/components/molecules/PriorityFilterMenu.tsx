import { Badge } from "@/components/atoms/badge";
import { Button } from "@/components/atoms/button";
import { Checkbox } from "@/components/atoms/checkbox";
import { Command, CommandInput, CommandItem } from "@/components/atoms/command";
import { Label } from "@/components/atoms/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/popover";
import { Separator } from "@/components/atoms/separator";
import capitalizeFirstLetter from "@/shared/utils/capitalizeFirstLetter";
import type { Table as TableType } from "@tanstack/react-table";
import { CirclePlus } from "lucide-react";
import { useEffect } from "react";
import { prioritys } from "../../consts";
import {
  selectfilterPriority,
  selectsetFilterPriority,
  useTasksStore,
} from "../../store/tasks-store";
import type { Task } from "../../types";
import PriorityIcon from "./PriorityIcon";

export default function PriorityFilterMenu({
  table,
}: {
  table: TableType<Task>;
}) {
  const filterPrioritys = useTasksStore(selectfilterPriority);
  const setFilterPrioritys = useTasksStore(selectsetFilterPriority);

  useEffect(() => {
    table.getColumn("priority")?.setFilterValue(filterPrioritys);
  }, [filterPrioritys, table]);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="border-dashed">
          <CirclePlus />
          <span>Priority</span>
          {filterPrioritys.length === 0 || (
            <>
              <Separator orientation="vertical" />
              <Badge variant="secondary" className="rounded-sm w-3 lg:hidden">
                {filterPrioritys.length}
              </Badge>
              <div className="hidden lg:block space-x-1">
                {filterPrioritys.length < 3 ? (
                  filterPrioritys.map((filter) => (
                    <Badge variant="secondary" className="rounded-sm">
                      {capitalizeFirstLetter(filter)}
                    </Badge>
                  ))
                ) : (
                  <Badge variant="secondary" className="rounded-sm font-normal">
                    3 selected
                  </Badge>
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-50" align="start">
        <Command>
          <CommandInput placeholder="Status" />
          {prioritys.map((priority, i) => (
            <CommandItem key={priority}>
              <Checkbox
                id={priority + i}
                checked={filterPrioritys.includes(priority)}
                onCheckedChange={(checked) => {
                  const arr = filterPrioritys ?? [];
                  if (checked)
                    return setFilterPrioritys(
                      arr.includes(priority) ? arr : [...arr, priority],
                    );
                  return setFilterPrioritys(arr.filter((s) => s !== priority));
                  // setFilterPrioritys((prev) => {
                  //   const arr = prev ?? [];
                  //   if (checked)
                  //     return arr.includes(priority) ? arr : [...arr, priority];
                  //   return arr.filter((s) => s !== priority);
                  // });
                }}
              />
              <Label className="w-full" htmlFor={priority + i}>
                <PriorityIcon priority={priority} />
                <p>{capitalizeFirstLetter(priority)}</p>
                <p className="text-xs ml-auto">
                  {
                    table
                      .getCoreRowModel()
                      .rows.filter(
                        (row) => row.getValue("priority") === priority,
                      ).length
                  }
                </p>
              </Label>
            </CommandItem>
          ))}
        </Command>
        {filterPrioritys.length === 0 || (
          <>
            <Separator />
            <Button
              variant="ghost"
              className="w-full m-1"
              size="sm"
              onClick={() => setFilterPrioritys([])}
            >
              Clear filters
            </Button>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
