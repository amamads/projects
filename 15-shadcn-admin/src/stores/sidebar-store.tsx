import { ROUTES } from "@/router/paths";
import type { MenuButtons } from "@/types/sidebar";
import {
  Bell,
  Bug,
  CircleQuestionMark,
  Fence,
  FileX,
  LayoutDashboard,
  ListTodo,
  Lock,
  MessagesSquare,
  Monitor,
  Package,
  Palette,
  ServerOff,
  Settings,
  ShieldCheck,
  UserCog,
  UserLock,
  Users,
  UserX,
  Wrench,
} from "lucide-react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type SidebarStoreState = {
  menuButtons: MenuButtons;
  open: boolean;
  setOpen: (value: boolean) => void;
};

const menuButtons: MenuButtons = {
  general: {
    items: [
      {
        title: "Dashboard",
        path: ROUTES.dashboard.root,
        icon: LayoutDashboard,
      },
      {
        title: "Tasks",
        path: ROUTES.tasks.root,
        icon: ListTodo,
      },
      {
        title: "Apps",
        path: ROUTES.apps.root,
        icon: Package,
      },
      {
        title: "Chats",
        path: ROUTES.chats.root,
        icon: MessagesSquare,
      },
      {
        title: "Users",
        path: ROUTES.users.root,
        icon: Users,
      },
    ],
    collapsibles: [
      {
        title: "Secured by Clerk",
        icon: UserLock,
        items: [
          { title: "Sign In", path: "#" },
          { title: "Sign Up", path: "#" },
          { title: "User Management", path: "#" },
        ],
      },
    ],
  },
  pages: {
    collapsibles: [
      {
        title: "Auth",
        icon: ShieldCheck,
        items: [
          { title: "Sign In", path: ROUTES.auth.signIn },
          { title: "Sign in (2 Col)", path: ROUTES.auth.signIn2 },
          { title: "Sign Up", path: ROUTES.auth.signUp },
          { title: "Forgot Password", path: ROUTES.auth.forgotPassword },
          { title: "OTP", path: ROUTES.auth.otp },
        ],
      },
      {
        title: "Errors",
        icon: Bug,
        items: [
          {
            title: "Unauthorizes",
            icon: Lock,
            path: ROUTES.errors.unauthorized,
          },
          { title: "Forbidden", icon: UserX, path: ROUTES.errors.forbidden },
          { title: "Not Found", icon: FileX, path: ROUTES.errors.notFound },
          {
            title: "Internal Server Error",
            icon: ServerOff,
            path: ROUTES.errors.internalServerError,
          },
          {
            title: "Maintenace Error",
            icon: Fence,
            path: ROUTES.errors.maintenanceError,
          },
        ],
      },
    ],
  },
  other: {
    items: [
      {
        title: "Help Center",
        path: ROUTES.generals.help,
        icon: CircleQuestionMark,
      },
    ],
    collapsibles: [
      {
        title: "Settings",
        icon: Settings,
        items: [
          { title: "Profile", icon: UserCog, path: ROUTES.settings.profile },
          { title: "Account", icon: Wrench, path: ROUTES.settings.account },
          {
            title: "Appearance",
            icon: Palette,
            path: ROUTES.settings.appearance,
          },
          {
            title: "Notifications",
            icon: Bell,
            path: ROUTES.settings.notifications,
          },
          { title: "Display", icon: Monitor, path: ROUTES.settings.display },
        ],
      },
    ],
  },
};

export const useSidebarStore = create<SidebarStoreState>()(
  persist(
    (set) => ({
      menuButtons,
      open: false,
      setOpen: (value) => set({ open: value }),
    }),
    {
      name: "user",
      partialize: (state) => ({
        open: state.open,
      }),
    },
  ),
);

export const selectMenuButtons = (s: SidebarStoreState) => s.menuButtons;
export const selectOpen = (s: SidebarStoreState) => s.open;
export const selectSetOpen = (s: SidebarStoreState) => s.setOpen;
