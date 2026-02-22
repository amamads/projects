import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import type { Table as TableType } from "@tanstack/react-table";
import { X } from "lucide-react";
import {
  selectfilterPriority,
  selectfilterStatus,
  selectsetFilterPriority,
  selectsetFilterStatus,
  useTasksStore,
} from "../../store/tasks-store";
import type { Task } from "../../types";
import PriorityFilterMenu from "./PriorityFilterMenu";
import StatusFilterMenu from "./StatusFilterMenu";
import { ViewColumnsDropDown } from "./ViewColumnsDropdown";

export default function TableHeader({ table }: { table: TableType<Task> }) {
  const filterStatuses = useTasksStore(selectfilterStatus);
  const setFilterStatuses = useTasksStore(selectsetFilterStatus);
  const filterPrioritys = useTasksStore(selectfilterPriority);
  const setFilterPrioritys = useTasksStore(selectsetFilterPriority);

  const showResetBtn = [filterStatuses, filterPrioritys].some(
    (filter) => filter.length > 0,
  );

  function resetFilter() {
    setFilterPrioritys([]);
    setFilterStatuses([]);
  }

  return (
    <header className="flex flex-col gap-2 items-start sm:flex-row-reverse sm:justify-end">
      <ViewColumnsDropDown table={table} />
      {showResetBtn && (
        <Button variant="ghost" onClick={resetFilter}>
          Reset <X />
        </Button>
      )}
      <div className="space-x-2 flex">
        <StatusFilterMenu table={table} />
        <PriorityFilterMenu table={table} />
      </div>
      <Input
        placeholder="Filter By title or ID..."
        className="w-37 lg:w-62"
        onChange={(e) =>
          table.getColumn("title")?.setFilterValue(e.target.value)
        }
      />
    </header>
  );
}
