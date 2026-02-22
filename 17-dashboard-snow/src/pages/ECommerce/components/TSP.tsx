import { Card } from "@/components/atoms/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@/components/atoms/table";
import { cn } from "@/lib/utils";
import type { ClassNameProps } from "@/types";
import capitalize from "@/utils/capitalize";
import { eCommerceTableCells } from "../consts";

export default function TSP({ className }: ClassNameProps) {
  return (
    <Card className={cn(className,'gap-1')}>
      <h6>Top Selling Products</h6>
      <Table>
        <TableHeader>
          <TableRow>
            {eCommerceTableCells.header.map((name) => (
              <TableCell className="text-muted-foreground">{capitalize(name)}</TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
            {eCommerceTableCells.body.map(({name,price,quantity,amount})=>(
                <TableRow className="border-0">
                    {[name,price,quantity,amount].map(value=>(
                        <TableCell>{value}</TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
}
