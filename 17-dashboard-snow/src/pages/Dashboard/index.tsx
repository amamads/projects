import { ChevronDown } from "lucide-react";
import { messagesCards } from "./consts";
import MessageCard from "../../components/MessageCard";
import { TotalUsersChart } from "./components/TotalUsersChart";
import { WebsitesCard } from "./components/WebsitesCard";
import { DevicesChart } from "./components/DevicesChart";
import { LocationChart } from "./components/LocationsChart";
import { Card, CardDescription, CardTitle } from "@/components/atoms/card";

export default function Dashboard() {
  return (
    <>
      <header className="px-2 py-1 flex gap-1 items-center">
        <p>Today</p>
        <ChevronDown className="size-4 text-muted-foreground" />
      </header>
      <main className="grid grid-cols-4 max-xl:grid-cols-2 gap-7 max-xl:gap-4 xl:grid-rows-[112px_320px_280px_324px]">
        {messagesCards.map((data) => (
          <MessageCard
            data={data}
            {...(data.isPositive ? {} : { variant: "negative" })}
          />
        ))}
        <TotalUsersChart className="rounded-lg bg-card col-span-3 max-xl:col-span-2" />
        <WebsitesCard className="rounded-lg bg-card max-xl:col-span-2" />
        <DevicesChart className="rounded-lg bg-card col-span-2 max-xl:col-span-2" />
        <LocationChart className="rounded-lg bg-card col-span-2" />
        <Card className="col-span-4 max-xl:col-span-2">
          <CardTitle>Marketing & SEO</CardTitle>
          <CardDescription>30M</CardDescription>
        </Card>
      </main>
    </>   
  );
}
