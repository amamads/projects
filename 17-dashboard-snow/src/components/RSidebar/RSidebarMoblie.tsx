import {
  sidebarActivitiesItems,
  sidebarContactsItems,
  sidebarNotificationsItems,
} from "@/consts";
import { cn } from "@/lib/utils";
import {
  selectRSidebar,
  selectSetRSidebar,
  useSidebarsStore,
} from "@/Stores/sidebars";
import type { ClassNameProps } from "@/types";
import { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../atoms/avatar";
import { Badge } from "../atoms/badge";
import { Separator } from "../atoms/separator";

export default function RSidebarMoblie({ className }: ClassNameProps) {
  const sidebarEl = useRef<HTMLDivElement | null>(null);
  const setRSidebar = useSidebarsStore(selectSetRSidebar);
  const rSidebarOpen = useSidebarsStore(selectRSidebar);

  function hiddenLayer() {
    setRSidebar(false);
  }
  return (
    <div
      ref={sidebarEl}
      className={cn(rSidebarOpen ? null : "hidden", "lg:hidden")}
    >
      <aside
        className={cn(
          className,
          "border-l col-flex gap-6 p-5 w-70 h-screen overflow-auto absolute right-0 bg-background z-20",
        )}
      >
        <div className="col-flex gap-2">
          <h6 className="px-1 py-2">Notifications</h6>
          {sidebarNotificationsItems.map(({ title, time, icon: Icon }) => (
            <div key={title} className="w-58 flex gap-2 p-1">
              <Badge className="size-6 rounded-xs">
                <Icon className="shrink-0" />
              </Badge>
              <div>
                <p className="line-clamp-1">{title}</p>
                <figcaption>{time}</figcaption>
              </div>
            </div>
          ))}
        </div>

        <div className="col-flex gap-2">
          <h6 className="px-1 py-2">Activities</h6>
          {sidebarActivitiesItems.map(({ title, time, img }, i) => (
            <div key={title} className="w-58 flex gap-2 p-1 relative">
              <Avatar className="size-6 relative">
                <AvatarImage src={img} className="rounded-full!" />
                <AvatarFallback>{title.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="line-clamp-1">{title}</p>
                <figcaption>{time}</figcaption>
              </div>
              {sidebarActivitiesItems.length !== i + 1 && (
                <Separator
                  orientation="vertical"
                  className="h-3.5! absolute left-3.75 top-8.75 w-px"
                />
              )}
            </div>
          ))}
        </div>

        <div className="col-flex gap-2">
          <h6 className="px-1 py-2">Activities</h6>
          {sidebarContactsItems.map(({ name, img }) => (
            <div key={name} className="w-58 flex gap-2 p-1 relative">
              <Avatar className="size-6 relative">
                <AvatarImage src={img} className="rounded-full!" />
                <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </aside>
      <div
        onClick={hiddenLayer}
        className="absolute inset-0 bg-background/70 z-10"
      />
    </div>
  );
}
