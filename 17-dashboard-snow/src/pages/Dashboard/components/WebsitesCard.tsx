import { Card } from "@/components/atoms/card";
import { Progress } from "@/components/atoms/progress";
import { cn } from "@/lib/utils";
import capitalize from "@/utils/capitalize";
import { websites } from "../consts";
import type { ClassProp } from "class-variance-authority/types";

export function WebsitesCard({ className }: ClassProp) {
  return (
    <Card className={cn(className, "flex flex-col gap-4 max-xl:gap-10 p-6")}>
      <h6>Trafic by website</h6>
      <div className="grid grid-cols-2 justify-items-start max-xl:flex-1 gap-4 content-between">
        {websites.map(({ title, value, isPrimary }) => (
          <>
            <small>{capitalize(title)}</small>
            <Progress
              value={value}
              childClassName={cn(
                isPrimary ? "bg-chart-1" : "bg-muted",
                "rounded-lg",
              )}
              className="bg-transparent! h-1.5"
            />
          </>
        ))}
      </div>
    </Card>
  );
}
