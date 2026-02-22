import { TabsContent } from "@/components/atoms/tabs";
import dashboardTabs from "../../config/dashboard-tabs";

export default function DashboardTabsContent() {
  return (
    <>
      {dashboardTabs.map(({ value, content }) => (
        <TabsContent key={value} value={value}>
          {content}
        </TabsContent>
      ))}
    </>
  );
}
