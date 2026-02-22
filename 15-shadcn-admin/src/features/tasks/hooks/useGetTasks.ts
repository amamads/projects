import { databaseId, tableId } from "@/consts";
import { db } from "@/services/appwrite";
import type { Task } from "@/features/tasks/types";
import { useQuery } from "@tanstack/react-query";
import { Query, type Models } from "appwrite";

export default function useGetTasks() {
  return useQuery<
    Models.RowList<Models.Row>,
    Error,
    { total: number; rows: Task[] }
  >({
    queryKey: ["tasks"],
    // queryFn: () => db.listRows({ databaseId, tableId }),
    queryFn: async () =>
      // await db.listRows({ databaseId, tableId }),
    await db.listRows({ databaseId, tableId, queries: [Query.limit(100)] }),
  });
}
