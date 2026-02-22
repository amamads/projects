import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type User from "@/types/user";
import type { Table as TableType } from "@tanstack/react-table";
import PaginationBtns from "./PaginationBtns";
import { CardFooter } from "@/components/ui/card";

export default function Footer({ table }: { table: TableType<User> }) {
  const defaultPageSize = table.getState().pagination.pageSize;

  const pageSizes = [5, 7, 10, 15];

  if (!pageSizes.includes(defaultPageSize)) {
    pageSizes.push(defaultPageSize);
    pageSizes.sort((a, b) => a - b);
  }

  return (
    <CardFooter className="flex ">
      <div className="flex gap-3 items-center">
        <p className="text-nowrap">Row per page</p>
        <Select
          onValueChange={(e) => table?.setPageSize(Number(e))}
          value={String(defaultPageSize)}
        >
          <SelectTrigger>
            <SelectValue
              placeholder={table?.getState().pagination.pageSize ?? "?"}
            />
          </SelectTrigger>
          <SelectContent>
            {pageSizes.map((size, i) => (
              <SelectItem key={i} value={String(size)}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <PaginationBtns table={table} />
    </CardFooter>
  );
}
