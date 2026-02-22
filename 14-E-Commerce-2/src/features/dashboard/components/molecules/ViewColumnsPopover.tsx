import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import type User from "@/types/user";
import type { Table as TableType } from "@tanstack/react-table";
import { Columns3 } from "lucide-react";

export const ViewColumnsPopover = ({ table }: { table: TableType<User> }) => {
    const dropdownColumnsIds = [
        'row',
        "id",
        "email",
        "password",
        "firstName",
        "lastName",
        "gender",
        "birthDate",
        "maritalStatus",
        "phone",
        "role",
    ]

    return (
        <DropdownMenu
        >
            <DropdownMenuTrigger asChild>
                <Button variant='outline' className="h-11 px-8 ">
                    <Columns3 />
                    <span>View</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {table.getAllColumns()
                    .filter(column => dropdownColumnsIds.some(columnId => columnId === column.id))
                    .map(column => (
                        <DropdownMenuCheckboxItem
                            key={column.id}
                            id={column.id}
                            checked={column.getIsVisible()}
                            onCheckedChange={value => column.toggleVisibility(!!value)}
                        >
                            {column.id}
                        </DropdownMenuCheckboxItem>

                    ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
