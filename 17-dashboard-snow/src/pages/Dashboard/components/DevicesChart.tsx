import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/atoms/chart";
import { cn } from "@/lib/utils";
import type { ClassNameProps } from "@/types";

export const description = "A bar chart";

const chartData = [
  { month: "Linux", device: 20 },
  { month: "Mac", device: 24 },
  { month: "IOS", device: 21 },
  { month: "Windows", device: 28 },
  { month: "Android", device: 8 },
  { month: "Other", device: 25 },
].map((prev) => ({ ...prev, device: prev.device * 1e6 }));

const chartConfig = {
  desktop: {
    label: "Device",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const colors = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
  "var(--chart-6)",
];

export function DevicesChart({ className }: ClassNameProps) {
  return (
    <Card className={cn(className, "overflow-auto")}>
      <CardHeader>
        <CardTitle>Trafffic by Device</CardTitle>
      </CardHeader>
      <CardContent className="p-0!">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} tickMargin={10} />
            {/* <YAxis/> */}
            <YAxis
              width={26}
            //   tickMargin={16}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => (v === 0 ? v : `${String(v).slice(0, 2)}M`)}
              ticks={[0, 10e6, 20e6, 30e6]}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar
              dataKey="device"
              fill="var(--color-desktop)"
              radius={[5, 5, 0, 0]}
              barSize={20}
            >
              {chartData.map((_, i) => (
                <Cell key={`cell_${i}`} fill={colors[i]} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
