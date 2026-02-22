import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import type { Priority } from "../../types";

export default function PriorityIcon({
  priority,
  className = "",
}: {
  priority: Priority;
  className?: string;
}) {
  switch (priority) {
    case "high":
      return <ArrowUp className={className} />;
    case "medium":
      return <ArrowRight className={className} />;
    case "low":
      return <ArrowDown className={className} />;
  }
}
