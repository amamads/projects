import MetricCard from "@/components/MetricCard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

const cardsDetail = [
  {
    title: "Total Revenue",
    icon: DollarSign,
    value: 45_231.89,
    changeText: "+20.1% from last month",
    badge:'%'
  },
  {
    title: "Subscriptions",
    icon: Users,
    value: 2350,
    changeText: "+180.1% from last month",
    badge:'+'
  },
  {
    title: "Sales",
    icon: CreditCard,
    value: 12_234,
    changeText: "+19% from last month",
    badge:'+'
  },
  {
    title: "Active Now",
    icon: Activity,
    value: 573,
    changeText: "+201 sice last hour",
    badge:'+'
  },
];

export default function Cards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:col-span-2">
      {cardsDetail.map(({ title, icon, value, changeText ,badge}) => (
        <MetricCard
          title={title}
          icon={icon}
          value={value}
          changeText={changeText}
          badge={badge}
          key={title}
        />
      ))}
    </div>
  );
}
