import { ScrollArea, ScrollBar } from "@/components/atoms/scroll-area";
import { Separator } from "@/components/atoms/separator";
import AppsContent from "../components/organisms/AppsContent";
import AppsHeader from "../components/organisms/AppsHeader";

export const Apps = () => {
  return (
    <div className="space-y-5 mt-4 h-full">
      <AppsHeader />
      <Separator />
      <div className="h-95 overflow-auto">
        <AppsContent />
      </div>
    </div>
  );
};
