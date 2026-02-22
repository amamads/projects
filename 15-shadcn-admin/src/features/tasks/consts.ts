import type { Priority, Status, Label } from "./types";

export const statuses: Status[] = [
    "backlog",
    "todo",
    "in progress",
    "done",
    "canceled",
  ],
  prioritys: Priority[] = ["low", "medium", "high"],
  labels: Label[] = ["documentation", "feature", "bug"];

// const statuses: Status[] = [
//     "backlog",
//     "todo",
//     "in Progress",
//     "done",
//     "canceled",
//   ],
//   prioritys: Priority[] = ["low", "medium", "high"],
//   labels: Label[] = ["documentation", "feature", "bug"];

// export { statuses, prioritys, labels };