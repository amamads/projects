import {
  Circle,
  CircleCheckBig,
  CircleOff,
  CircleQuestionMark,
  Timer,
} from "lucide-react";
import type { Status } from "../../types";

export default function StatusIcon({
  status,
  className = "",
}: {
  status: Status;
  className?: string;
}) {
  switch (status) {
    case "canceled":
      return <CircleOff className={className} />;
    case "done":
      return <CircleCheckBig className={className} />;
    case "todo":
      return <Circle className={className} />;
    case "backlog":
      return <CircleQuestionMark className={className} />;
    case "in progress":
      return <Timer className={className} />;
  }
}
