import MessageCard from "@/components/MessageCard";
import { PVA } from "./components/PVA";
import RBL from "./components/RBL";
import { Revenue } from "./components/Revenue";
import TSP from "./components/TSP";
import { TotalSalesChart } from "./components/TotalSalesChart";
import { messagesCards } from "./consts";

export default function ECommerce() {
  return (
    <>
      <h6 className="px-2 py-1">eCommerce</h6>
      <main className="grid grid-cols-4 gap-7 max-xl:gap-4 xL:grid-rows-[112px_112px_318px_336px] max-xl:grid-cols-2">
        {messagesCards.map((data) => (
          <MessageCard
            data={data}
            {...(data.title === "customers"
              ? {}
              : data.title === "growth"
                ? { variant: "negative" }
                : { variant: "third" })}
          />
        ))}

        <PVA className="col-span-2 xl:row-span-2 xl:row-start-1 xl:-col-end-1"/>
        <Revenue className="xl:col-span-3 max-xl:col-span-2"/>
        <RBL className="max-xl:col-span-2"/>
        <TSP className="xl:col-span-3 max-xl:col-span-2"/>
        <TotalSalesChart className='max-xl:col-span-2'/>
      </main>
    </>
  );
}
