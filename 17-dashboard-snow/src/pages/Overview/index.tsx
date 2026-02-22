import { Input } from "@/components/atoms/input";
import {
  ArrowDownUp,
  ChevronLeft,
  ChevronRight,
  ListFilter,
  Plus,
  Search,
} from "lucide-react";
import { orders } from "./consts";
import {
  getCoreRowModel,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { useState } from "react";
import { ordersColumns } from "./orders-columns";
import Table from "@/components/Table";
import { Button } from "@/components/atoms/button";

export default function Overview() {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    image: false,
  });

  const table = useReactTable({
    data: orders,
    columns: ordersColumns,
    getCoreRowModel: getCoreRowModel(),

    onColumnVisibilityChange: setColumnVisibility,
    state: {
      columnVisibility,
    },
  });
  return (
    <>
      <h6>Order List</h6>
      <main className="col-flex gap-3">
        <header className="flex p-2 bg-card w-full rounded-xs justify-between w-293">
          <div className="flex gap-2">
            {[Plus, ListFilter, ArrowDownUp].map((Icon) => (
              <div className="flex-center size-7">
                <Icon className="size-5" />
              </div>
            ))}
          </div>
          <div className="relative text-muted">
            <Search className="size-4 absolute bottom-1/2 translate-y-1/2 left-2" />
            <Input
              className="px-2 pl-7 placeholder:text-muted bg-[$fafbfd]! dark:bg-[#232323]! border-ring w-40 h-6.25"
              placeholder="Search"
            />
          </div>
        </header>
        <Table table={table} />
        <div className="flex gap-2 w-61 ml-auto max-md:mx-auto">
          <Button variant="ghost" className="size-7 rounded-xs">
            <ChevronLeft className="size-4" />
          </Button>

          {[1, 2, 3, 4, 5].map((num) => (
            <Button
              variant="ghost"
              key={num}
              className={`size-7 rounded-xs ${num === 1 ? "bg-accent" : null}`}
            >
              {num}
            </Button>
          ))}

          <Button variant="ghost" className="size-7 rounded-xs">
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </main>
    </>
  );
}
