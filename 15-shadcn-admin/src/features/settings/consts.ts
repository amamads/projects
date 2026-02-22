import { ROUTES } from "@/router/paths";
import type { SettingPageDetail } from "./types";

export const settingsPages:SettingPageDetail[] = [
  {  
    title:'profile',
    description:'This is how others will see you on the site.',
    path:ROUTES.settings.profile,
},
  {  
    title:'account',
    description:'Update your account settings. Set your preferred language and timezone.',
    path:ROUTES.settings.account,
},
  {  
    title:'appearance',
    description:'Customize the appearance of the app. Automatically switch between day and night themes.',
    path:ROUTES.settings.appearance,
},
  {  
    title:'notifications',
    description:'Configure how you receive notifications.',
    path:ROUTES.settings.notifications,
},
  {  
    title:'display',
    description:'Configure how you receive notifications.',
    path:ROUTES.settings.display,
},
]
export const languages = [
  "english",
  "persian",
  "french",
  "german",
  "spanish",
  "portuguese",
  "russian",
  "korean",
  "chinese",
];