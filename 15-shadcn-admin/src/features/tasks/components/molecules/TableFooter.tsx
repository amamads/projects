import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import type { Table as TableType } from "@tanstack/react-table";
import PaginationBtns from "./PaginationBtns";
import type { Task } from "@/features/tasks/types";

export default function TableFooter({ table }: { table: TableType<Task> }) {
  const defaultPageSize = table.getState().pagination.pageSize;

  const pageSizes = [10, 20, 30, 40, 50];

  if (!pageSizes.includes(defaultPageSize)) {
    pageSizes.push(defaultPageSize);
    pageSizes.sort((a, b) => a - b);
  }

  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;

  return (
    // <footer className="grid w-full justify-items-center mt-5">
    <footer className="flex flex-col gap-3 mt-5 ns:flex-row-reverse">
      <PaginationBtns table={table} pageDetails={{ pageCount, currentPage }} />
      <div className="flex items-center justify-between w-full lg:flex-row-reverse">
        <p className="text-nowrap ns:hidden lg:block">
          Page {currentPage} of {pageCount}
        </p>
        <div className="flex items-center gap-2 ns:flex-row-reverse">
          <p className="hidden text-sm font-semibold sm:block">Rows per page</p>
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
      </div>
    </footer>
  );
}
