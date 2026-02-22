import type User from "@/types/user";
import { type ColumnDef } from "@tanstack/react-table";
import { Cog } from "lucide-react";
import OptionsDropdown from "../components/molecules/OptionsDropdown";
import PasswordCell from "../components/molecules/PassWordCell";



export const usersColumns: ColumnDef<User>[] = [
  {
    id: "row",
    header: "row",
    cell: ({ row }) => +row.id + 1 + ".",
  },
  {
    accessorKey: "username",
  },
  {
    accessorKey: "role",
  },
  {
    accessorKey: "firstName",
  },
  {
    accessorKey: "lastName",
  },
  {
    accessorKey: "email",
  },
  {
    accessorKey: "phone",
  },
  {
    accessorKey: "gender",
  },
  {
    accessorKey: "maritalStatus",
  },
  {
    accessorKey: "id",
  },
  {
    accessorKey: "birthDate",
  },
  {
    accessorKey: "password",
    cell: ({ getValue }) => <PasswordCell value={String(getValue())} />,
  },
  {
    id: "options",
    header: () => <Cog className="size-5" />,
    cell: ({ row }) => <OptionsDropdown user={row.original} />,
  },
];
