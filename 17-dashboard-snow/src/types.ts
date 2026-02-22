import type { LucideIcon } from "lucide-react";

export type ClassNameProps = {className?:string};
export type ParentAndChildClassNameProps = {className?:string,childClassName?:string};
export type SidebarCollapItem = { title: string; icon: LucideIcon };
export type SidebarNotifications = { title: string; icon: LucideIcon ,time:string};
export type SidebarActivities = { title: string; img:string ,time:string};
export type SidebarContacts = { name: string; img:string};
export type MessagesCard={ title: string; value: string; percent: number; isPositive: boolean, }
