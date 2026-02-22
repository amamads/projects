import { settingsPages } from "../consts";
import type { SettingsPageTitles } from "../types";

export default function settingPageName(): SettingsPageTitles | void {
  const pathnameArr = location.pathname.split("/");
  const pageName = pathnameArr[pathnameArr.length - 1];

  if (settingsPages.some((page) => page.title === pageName)) {
    return pageName as SettingsPageTitles;
  }
  return undefined;
}
