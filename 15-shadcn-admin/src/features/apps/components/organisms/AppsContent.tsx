import { selectAppsData, useAppsStore } from "../../store/apps-store";
import AppCard from "../molecules/AppCard";

export default function AppsContent() {
  const appsData = useAppsStore(selectAppsData);
  return (
    <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {appsData.map((data) => (
        <AppCard data={data} key={data.title}/>
      ))}
    </main>
  );
}
