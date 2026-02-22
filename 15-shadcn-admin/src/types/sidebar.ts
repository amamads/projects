import type { LucideIcon } from "lucide-react";

export type MenuButton = {
  title: string;
  path: string;
  icon?: LucideIcon;
};

export type CollapsibleButton = {
  title: string;
  icon?: LucideIcon;
  items: MenuButton[];
};
export type MenuButtonsSection = {
  items?: MenuButton[];
  collapsibles?: CollapsibleButton[];
};

export type MenuButtons = {
  general: MenuButtonsSection;
  pages: MenuButtonsSection;
  other: MenuButtonsSection;
};
