import { Chart } from "../molecules/analytics/Chart";
import Cards from "../molecules/analytics/Cards";
import Referrenrs from "../molecules/analytics/Referrenrs";
import Devices from "../molecules/analytics/Devices";

export default function Analytics() {
  return (
    <div className="grid gap-4 lg:grid-cols-[4fr_3fr]">
      <Chart />
      <Cards />
      <Referrenrs/>
      <Devices/>
    </div>
  );
}
