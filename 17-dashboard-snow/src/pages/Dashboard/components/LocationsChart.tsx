"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/atoms/chart";
import Disc from "@/components/Disc";
import { cn } from "@/lib/utils";
import type { ClassProp } from "class-variance-authority/types";

export const description = "A donut chart with text";

const chartData = [
  { country: "Mexico", value: 30.8, fill: "var(--chart-1)", bg: "chart-1" },
  { country: "Other", value: 8.1, fill: "var(--chart-4)", bg: "chart-4" },
  { country: "Canada", value: 22.5, fill: "var(--chart-6)", bg: "chart-6" },
  {
    country: "United States",
    value: 38.6,
    fill: "var(--chart-3)",
    bg: "chart-3",
  },
];

const chartConfig = {
  value: {
    label: "Value",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function LocationChart({ className }: ClassProp) {
  return (
    <Card className={cn(className, "overflow-auto")}>
      <CardHeader className="p-0">
        <CardTitle>Traffic by Location</CardTitle>
      </CardHeader>
      <CardContent className="px-4 flex items-center justify-center gap-10">
        <div className="size-40 flex justify-start">
          <ChartContainer config={chartConfig} className="size-full">
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="browser"
                innerRadius={40}
                paddingAngle={10}
                cornerRadius={10}
              />
            </PieChart>
          </ChartContainer>
        </div>
        <div className="col-flex gap-3 w-45.5 max-xl:w-full">
          {chartData.map(({ country, value, bg }) => (
            <div className="flex justify-between">
              <span className="flex">
                <Disc childClassName={`bg-${bg}!`}/>
                <small>{country}</small>
              </span>
              <small>{value}$</small>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
