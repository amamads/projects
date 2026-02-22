import { Card, CardTitle } from "@/components/atoms/card";
import Map from "@/assets/Map.svg?react";
import { RBLItems } from "../consts";
import capitalize from "@/utils/capitalize";
import { Progress } from "@/components/atoms/progress";
import type { ClassNameProps } from "@/types";
import { cn } from "@/lib/utils";

export default function RBL({className}:ClassNameProps) {
  return (
    <Card className={cn(className)}>
      <CardTitle>Revenue by location</CardTitle>
      <Map className="h-20.5 w-38.5 max-xl:size-full"/>

      {RBLItems.map(({ title, value }) => (
        <div>
          <div className="flex justify-between h-5">
            <small>{capitalize(title)}</small>
            <small>{value}K</small>
          </div>
          <Progress className="h-0.5" value={value} childClassName="bg-chart-5" />
        </div>
      ))}
    </Card>
  );
}
