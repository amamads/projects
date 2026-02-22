import { TabsList, TabsTrigger } from "@/components/atoms/tabs";
import dashboardTabs from "../../config/dashboard-tabs";

export default function DashboardTabsList() {
  return (
      <TabsList className="bg-secondary rounded-lg p-1  w-85 mb-5 overflow-auto">
        {dashboardTabs.map(({ value, name }) => (
          <TabsTrigger
            key={value}
            value={value}
            disabled={value === "reports" || value === "notifications"}
            className="
                            data-[state=active]:bg-ring
                            data-[state=active]:shadow-sm
                            data-[state=active]:border
                            data-[state=active]:border-border
                            dark:data-[state=active]:bg-input/50
                          "
          >
            {name}
          </TabsTrigger>
        ))}
      </TabsList>
  );
}
