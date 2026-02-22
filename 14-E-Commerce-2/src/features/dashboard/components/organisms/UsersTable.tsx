import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ViewColumnsPopover } from "../molecules/ViewColumnsPopover";
import useUserTable from "../../hooks/useUserTable";
import SearchInput from "../molecules/SearchInput";
import Table from "../molecules/Table";
import Footer from "../molecules/Footer";

export default function UsersTable() {
  const { table, isLoading, isError, error } = useUserTable();

  if (isLoading)
    return <h1 className="text-center text-2xl font-bold">Loading...</h1>;
  if (isError)
    return <h1 className="text-center text-2xl font-bold">{error?.message}</h1>;

  return (
    <Card>
      <CardHeader className="flex flex-col gap-6 items-center">
        <CardTitle className="col-span-2 text-center text-2xl text-primary">
          Users Table
        </CardTitle>

        <div className=" flex items-end justify-between w-full">
          <SearchInput table={table} />
          <ViewColumnsPopover table={table} />
        </div>
      </CardHeader>
      <CardContent>
        <Table table={table} />
      </CardContent>
      <Footer table={table} />
    </Card>
  );
}
