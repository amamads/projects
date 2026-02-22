export type Status = "canceled" | "done" | "todo" | "backlog" | "in progress";
export type Priority = "low" | "medium" | "high";
export type Label = "feature" | "documentation" | "bug";

export interface Task {
  id: string;
  title: string;
  status: Status;
  label: Label;
  priority: Priority;
  createdAt: string;
  updatedAt: string;
  assignee: string;
  description: string;
  dueDate: string;
}
