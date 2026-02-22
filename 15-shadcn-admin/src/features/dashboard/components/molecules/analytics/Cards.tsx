import MetricCard from "@/components/MetricCard";
import { Activity, ChartSpline, Clock, User } from "lucide-react";

const cardsDetail = [
  {
    title: "Total Clicks",
    icon: ChartSpline,
    value: 1248,
    changeText: "+12.4% vs last week",
  },
  {
    title: "Unique Visitors",
    icon: User,
    value: 832,
    changeText: "+5.8% vs last week",
  },
  {
    title: "Bounce Rate",
    icon: Activity,
    value: "42%",
    changeText: "-3.2% vs last week",
  },
  {
    title: "Avg. Session",
    icon: Clock,
    value: "3m 24s",
    changeText: "+18s vs last week",
  },
];

export default function Cards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:col-span-2">
      {cardsDetail.map(({ title, icon, value, changeText }) => (
        <MetricCard
          title={title}
          icon={icon}
          value={value}
          changeText={changeText}
        />
      ))}
    </div>
  );
}
