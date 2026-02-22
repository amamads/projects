import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { Checkbox } from "@/components/atoms/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import { Calendar, Ellipsis } from "lucide-react";
import StatusCell from "./components/StatusCell";
import type { Order, Status } from "./types";

export const ordersColumns: ColumnDef<Order>[] = [
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
    accessorKey: "orderId",
    header: "Order ID",
    cell: ({ getValue }) => (
      <small className="px-3 py-2">{String(getValue())}</small>
    ),
  },
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row, getValue }) => (
      <div className="flex gap-2 px-3 py-2 items-center">
        <Avatar className="size-6">
          <AvatarImage src={row.getValue("image")} />
          <AvatarFallback>AMS</AvatarFallback>
        </Avatar>
        <small>{String(getValue())}</small>
      </div>
    ),
  },
  {
    accessorKey: "project",
    header: "Project",
    // header: () => (
    //   <div className="w-[214.5px]">
    //     <small>Project</small>,
    //   </div>
    // ),
  },
  { accessorKey: "address", header: "Address" },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => (
      <div className="flex gap-1">
        <Calendar className="size-4" />
        <small>{String(getValue())}</small>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => <StatusCell value={String(getValue()) as Status} />,
  },
  { id: "menu", cell: () => <Ellipsis className="size-4" /> },
  { accessorKey: "image" },
];
