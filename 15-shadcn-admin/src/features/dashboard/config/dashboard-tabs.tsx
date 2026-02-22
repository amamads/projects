import Analytics from "../components/organisms/Analytics";
import Overview from "../components/organisms/Overview";

const dashboardTabs = [
  {
    name: "Overview",
    value: "overview",
    content: <Overview />,
  },
  {
    name: "Analytics",
    value: "analytics",
    content: <Analytics />,
  },
  {
    name: "Reports",
    value: "reports",
    content: <h1>Reports</h1>,
  },
  {
    name: "Notificatoins",
    value: "notifications",
    content: <h1>Notificatoins</h1>,
  },
];
export default dashboardTabs;
