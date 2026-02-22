import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { ChartContainer, type ChartConfig } from "@/components/atoms/chart";

export const description = "A bar chart";

const chartData = [
  { month: "January", price: 2100 },
  { month: "February", price: 2800 },
  { month: "Mar", price: 5700 },
  { month: "April", price: 1400 },
  { month: "May", price: 1500 },
  { month: "June", price: 1000 },
  { month: "July", price: 3000 },
  { month: "Agust", price: 3100 },
  { month: "Septamber", price: 2800 },
  { month: "October", price: 3200 },
  { month: "Novamber", price: 2700 },
  { month: "Decambr", price: 3750 },
];

const chartConfig = {
  desktop: {
    label: "price",
    color: "var(--foreground)",
  },
} satisfies ChartConfig;

export default function Chart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              tickMargin={35}
              axisLine={false}
              width={50}
              tickFormatter={(a) => "$" + a}
              tick={({ x, y, payload }) => (
                <text
                  x={x}
                  y={y}
                  dominantBaseline="middle"
                  className="fill-red-600 text-xs text-right"
                >
                  ${payload.value}
                </text>
              )}
            />

            <Bar dataKey="price" fill="var(--color-desktop)" radius={4}/>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
