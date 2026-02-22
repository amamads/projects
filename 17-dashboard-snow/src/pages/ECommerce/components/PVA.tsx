"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
    Card,
    CardContent,
    CardTitle
} from "@/components/atoms/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig
} from "@/components/atoms/chart";
import { cn } from "@/lib/utils";
import type { ClassNameProps } from "@/types";
import { useTheme } from "@/providers/thme-provider/use-theme";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { month: "January", projection: 18, acutual: 3 },
  { month: "February", projection: 21, acutual: 4 },
  { month: "March", projection: 19, acutual: 3 },
  { month: "April", projection: 23, acutual: 5 },
  { month: "May", projection: 16, acutual: 3 },
  { month: "June", projection: 21, acutual: 4 },
].map((prev) => ({
  ...prev,
  acutual: prev.acutual * 1e6,
  projection: prev.projection * 1e6,
}));


export function PVA({ className }: ClassNameProps) {
  const {theme} = useTheme();
  const chartConfig = {
    desktop: {
      label: "projection",
      color: "var(--chart-5)",
    },
    mobile: {
      label: "acutual",
      color: theme === 'dark'?"rgb(104, 118, 129)":'rgb(208, 223, 235)',
    },
  } satisfies ChartConfig;
  return (
    <Card className={cn(className)}>
      <CardTitle>Projections vs Actuals</CardTitle>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              width={26}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => (v === 0 ? v : `${String(v).slice(0, 2)}M`)}
              ticks={[0, 10e6, 20e6, 30e6]}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey="projection"
              stackId="a"
              fill="var(--color-desktop)"
              radius={[0, 0, 4, 4]}
              barSize={20}
            />
            <Bar
              dataKey="acutual"
              stackId="a"
              fill="var(--color-mobile)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
