import {
  BookOpen,
  Bug,
  FolderClosed,
  IdCard,
  MessagesSquare,
  NotebookText,
  Radio,
  ShoppingBag,
  UserRound,
  Users,
} from "lucide-react";
import type {
  SidebarActivities,
  SidebarCollapItem,
  SidebarContacts,
  SidebarNotifications,
} from "./types";
import ac1 from "@/assets/activity-1.png";
import ac2 from "@/assets/activity-2.png";
import ac3 from "@/assets/activity-3.png";
import ac4 from "@/assets/activity-4.png";
import ac5 from "@/assets/activity-5.png";
import co1 from "@/assets/contact-1.png";
import co2 from "@/assets/contact-2.png";
import co3 from "@/assets/contact-3.png";
import co4 from "@/assets/contact-4.png";
import co5 from "@/assets/contact-5.png";
import co6 from "@/assets/contact-6.png";

export const siedebarDashboardItems: SidebarCollapItem[] = [
  { title: "eCommerce", icon: ShoppingBag },
  { title: "projects", icon: FolderClosed },
  { title: "online courses", icon: BookOpen },
];

export const sidebarUserProfileItems = [
  "overview",
  "projects",
  "campaigns",
  "ocuments",
  "followers",
];

export const siedebarPagesItems: SidebarCollapItem[] = [
  { title: "account", icon: IdCard },
  { title: "corporate", icon: Users },
  { title: "blog", icon: NotebookText },
  { title: "social", icon: MessagesSquare },
];

export const sidebarNotificationsItems: SidebarNotifications[] = [
  {
    title: "You have a bug that needs to be fixed",
    icon: Bug,
    time: "Just now",
  },
  { title: "New user registered", icon: UserRound, time: "59 minutes ago" },
  {
    title: "You have a bug that needs to be fixed.",
    icon: Bug,
    time: "12 hours ago",
  },
  {
    title: "Andi Lane subscribed to you",
    icon: Radio,
    time: "Today, 11:59 AM",
  },
];

export const sidebarActivitiesItems: SidebarActivities[] = [
  {
    title: "You have a bug that needs to be fixed.",
    img: ac1,
    time: "Just now",
  },
  { title: "Released a new version", img: ac2, time: "59 minutes ago" },
  { title: "Submitted a bug", img: ac3, time: "12 hours ago" },
  { title: "Modified A data in Page X", img: ac4, time: "Today, 11:59 AM" },
  { title: "Deleted a page in Project X", img: ac5, time: "Feb 2, 2023" },
];

export const sidebarContactsItems: SidebarContacts[] = [
  { name: "Natali Craig", img: co1 },
  { name: "Drew Cano", img: co2 },
  { name: "Orlando Diggs", img: co3 },
  { name: "Andi Lane", img: co4 },
  { name: "Kate Morrison", img: co5 },
  { name: "Koray Okumus", img: co6 },
];
