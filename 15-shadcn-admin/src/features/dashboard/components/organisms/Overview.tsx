import Cards from "../molecules/overview/Cards";
import Chart from "../molecules/overview/Chart";
import RecentSales from "../molecules/overview/RecentSales";

export default function Overview() {
  return (
    <div className="grid gap-4 lg:grid-cols-[4fr_3fr]">
      <Cards />
      <Chart />
      <RecentSales/>
    </div>
  );
}
