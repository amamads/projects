import { Separator } from "@/components/atoms/separator";
import { Outlet } from "react-router";
import NavigatreSelectBox from "../components/molecules/NavigatreSelectBox";
import PageDetail from "../components/molecules/PageDetail";
import { ScrollArea } from "@/components/atoms/scroll-area";
import NavigatreButtons from "../components/molecules/NavigareButtons";

export const SettingsLayout = () => {
  return (
    <div className="space-y-4">
      <div className="py-3">
        <h4 className="font-bold">Settings</h4>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className="bg-muted" />
      <NavigatreSelectBox />
      <div className="flex flex-col gap-4 lg:flex-row">
        <NavigatreButtons />
        <div className="space-y-4 flex-1 relative">
          <PageDetail />
          <Separator />
          <div className="h-[50vh] overflow-auto">
            <Outlet />
          </div>
          <div className="absolute w-full bottom-0 h-15 bg-linear-to-t from-background to-transparent" />
        </div>
      </div>
    </div>
  );
};
