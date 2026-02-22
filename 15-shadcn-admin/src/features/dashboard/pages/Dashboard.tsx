import { Button } from "@/components/atoms/button";
import { Tabs } from "@/components/atoms/tabs";
import DashboardTabsContent from "../components/molecules/DashboardTabsContent";
import DashboardTabsList from "../components/molecules/DashboardTabsList";

export function Dashboard() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-bold">Dashboard</h3>
        <Button>Download</Button>
      </div>
      <div>
        <Tabs defaultValue="overview">
          <DashboardTabsList />
          <DashboardTabsContent />
        </Tabs>
      </div>
    </div>
  );
}
