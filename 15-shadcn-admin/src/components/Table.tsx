import {
  TableBody,
  TableCell,
  Table as TableEl,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/table";
import { cn } from "@/lib/utils";
import { flexRender, type Table as TableType } from "@tanstack/react-table";
type CustomColumnMeta = {
  className?: string;
  tdClassName?: string;
};

export default function Table<T>({ table }: { table: TableType<T> }) {
  return (
    <TableEl>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => {
              const meta = cell.column.columnDef.meta as
                | CustomColumnMeta
                | undefined;
              return (
                <TableCell
                  key={cell.id}
                  className={cn(meta?.className, meta?.tdClassName)}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </TableEl>
  );
}
