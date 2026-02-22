import { Bell, Monitor, Palette, UserCog, Wrench } from "lucide-react";
import type { SettingsPageTitles } from "../../types";

export default function SettingsPagesIcon({
  title,
  className = "",
}: {
  title: SettingsPageTitles;
  className?: string;
}) {
  switch (title) {
    case "profile":
      return <UserCog className={className} />;
    case "account":
      return <Wrench className={className} />;
    case "appearance":
      return <Palette className={className} />;
    case "notifications":
      return <Bell className={className} />;
    case "display":
      return <Monitor className={className} />;
  }
}