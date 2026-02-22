import type { Task } from "@/features/tasks/types";
import type { RowSelectionState, VisibilityState } from "@tanstack/react-table";
import {
  type ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { tasksColumns } from "../config/tasks-columns";
// import useGetTasks from "./useGetTasks";
import tasksData from "../data/tasks.json";
const defaultData = {
  data: tasksData,
  isLoading: false,
  isError: false,
  error: null,
};

export default function useTasksTable() {
  // const { data, isLoading, isError, error } = useGetTasks();
  const { data, isLoading, isError, error } = defaultData;
  const tasks = data?.rows;

  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  // const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    label: false,
  });

  const table = useReactTable({
    data: tasks as Task[],
    columns: tasksColumns,
    getCoreRowModel: getCoreRowModel(),

    columnResizeMode:'onChange',
    enableColumnResizing:true,
    // defaultColumn:{},

    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,

    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,

    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,

    onRowSelectionChange: setRowSelection,

    onColumnVisibilityChange: setColumnVisibility,

    state: {
      sorting,
      globalFilter,
      columnFilters,
      pagination,
      rowSelection,
      columnVisibility,
    },
  });

  return {
    table,
    isLoading,
    isError,
    error,
  };
}
