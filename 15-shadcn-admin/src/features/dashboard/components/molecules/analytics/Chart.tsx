import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/atoms/card";
import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig
} from "@/components/atoms/chart";
import { Area, AreaChart, XAxis, YAxis } from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--color-foreground)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--color-foreground)",
  },
} satisfies ChartConfig;

const chartData = [
  { date: "Monday", desktop: 330, mobile: 120 },
  { date: "Tuesday", desktop:550, mobile: 480 },
  { date: "Wednesday", desktop: 750, mobile: 450 },
  { date: "Thursday", desktop: 300, mobile: 300 },
  { date: "Friday", desktop: 373, mobile: 40 },
  { date: "Saturday", desktop: 450, mobile: 250 },
  { date: "Sunday", desktop: 800, mobile: 200 },
];

export function Chart() {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Traffic Overview</CardTitle>
        <p className="text-sm text-muted-foreground">
          Weekly clicks and unique visitors
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-73">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              tickMargin={35}
              axisLine={false}
              width={70}
            />
            <ChartTooltip content={<p></p>} />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
