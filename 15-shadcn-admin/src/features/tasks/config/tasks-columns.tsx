import { Badge } from "@/components/atoms/badge";
import { Checkbox } from "@/components/atoms/checkbox";
import { SortableHeader } from "@/components/SortableHeader";
import type { Priority, Status, Task } from "@/features/tasks/types";
import capitalizeFirstLetter from "@/shared/utils/capitalizeFirstLetter";
import { type ColumnDef } from "@tanstack/react-table";
import PriorityIcon from "../components/molecules/PriorityIcon";
import StatusIcon from "../components/molecules/StatusIcon";
import TableMenu from "../components/molecules/TableMenu";

export const tasksColumns: ColumnDef<Task>[] = [
  {
    id: "checkbox",
    header: ({ table }) => (
      <Checkbox
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        checked={row.getIsSelected()}
      />
    ),
  },
  {
    accessorKey: "id",
    header: "Task",
    cell: ({ renderValue }) => <p className="py-2">{String(renderValue())}</p>,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <SortableHeader<Task> column={column} lable="Title" />
    ),
    cell: ({ renderValue, row }) => (
      <div className="flex gap-3">
        <Badge variant="outline">
          {capitalizeFirstLetter(row.getValue("label"))}
        </Badge>
        <p className="truncate ">{String(renderValue())}</p>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <SortableHeader<Task> column={column} lable="Status" />
    ),
    cell: ({ renderValue }) => (
      <div className="flex gap-1 items-center">
        <StatusIcon
          status={renderValue() as Status}
          className="size-4 text-muted-foreground"
        />
        <p>{capitalizeFirstLetter(String(renderValue()))}</p>
      </div>
    ),
    filterFn: (row, columnId, filterValues: string[]) => {
      // console.log(filterValues);
      if (!Array.isArray(filterValues) || filterValues.length === 0)
        return true;
      return filterValues.some((s) => s === row.getValue(columnId));
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <SortableHeader<Task> column={column} lable="Priority" />
    ),
    cell: ({ renderValue }) => (
      <div className="flex gap-1 items-center">
        <PriorityIcon
          priority={renderValue() as Priority}
          className="size-4 text-muted-foreground"
        />
        <p>{capitalizeFirstLetter(String(renderValue()))}</p>
      </div>
    ),
    filterFn: (row, columnId, filterValues: string[]) => {
      if (!Array.isArray(filterValues) || filterValues.length === 0)
        return true;
      return filterValues.some((s) => s === row.getValue(columnId));
    },
  },
  {
    accessorKey: "label",
  },
  {
    id: "menu",
    cell: ({ row }) => <TableMenu row={row} />,
  },
];
