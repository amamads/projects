import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader } from "@/components/atoms/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "@/components/atoms/chart";
import { Separator } from "@/components/atoms/separator";
import Disc from "@/components/Disc";
import { cn } from "@/lib/utils";
import type { ClassNameProps } from "@/types";
import multiplyMilion from "@/utils/multiplyMilion";

export const description = "A multiple line chart";

const chartData = [
  { month: "January", previous: 15, current: 8 },
  { month: "February", previous: 8, current: 17 },
  { month: "March", previous: 9, current: 17 },
  { month: "April", previous: 13, current: 14 },
  { month: "May", previous: 17, current: 12 },
  { month: "June", previous: 20, current: 16 },
  { month: "July", previous: 19, current: 23 },
].map((prev) => ({
  ...prev,
  previous: multiplyMilion(prev.previous),
  current: multiplyMilion(prev.current),
}));

const chartConfig = {
  desktop: {
    label: "previous",
    color: "var(--chart-3)",
  },
  mobile: {
    label: "current",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function TotalUsersChart({ className }: ClassNameProps) {
  return (
    <Card className={cn(className,'overflow-auto')}>
        <CardHeader className="flex gap-4 ">
          <p>Total Users</p>
          <p className="text-muted-foreground">Total Projects</p>
          <p className="text-muted-foreground">Operating Status</p>
          <Separator orientation="vertical" />
          <div className="flex justify-center items-center">
            <Disc childClassName="bg-chart-3!"/>
            <small>Current Week</small>
          </div>
          <div className="flex">
            <Disc childClassName="bg-chart-5!"/>
            <small>Previous Week</small>
          </div>
        </CardHeader>
      <CardContent className="p-0">
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey="current"
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => (v === 0 ? v : `${String(v).slice(0, 2)}M`)}
              ticks={[0, 10e6, 20e6, 30e6]}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="previous"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="current"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
