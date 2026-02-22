import {
  FaCamera,
  FaDiscord,
  FaDocker,
  FaFigma,
  FaGithub,
  FaGitlab,
  FaMedium,
  FaSkype,
  FaSlack,
  FaStripe,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { LuSquareKanban } from "react-icons/lu";
import { RiNotionLine } from "react-icons/ri";
import { TbBrandGmail } from "react-icons/tb";
import type { AppData } from "../types";

export const appsData: AppData[] = [
  {
    title: "Discord",
    description: "Connect with Discord for seamless team communication.",
    icon: FaDiscord,
    isConnected: false,
  },
  {
    title: "Docker",
    description: "Effortlessly manage Docker containers on your dashboard.",
    icon: FaDocker,
    isConnected: false,
  },
  {
    title: "Figma",
    description: "View and collaborate on Figma designs in one place.",
    icon: FaFigma,
    isConnected: true,
  },
  {
    title: "GitHub",
    description: "Streamline code management with GitHub integration.",
    icon: FaGithub,
    isConnected: false,
  },
  {
    title: "GitLab",
    description: "Efficiently manage code projects with GitLab integration.",
    icon: FaGitlab,
    isConnected: false,
  },
  {
    title: "Gmail",
    description: "Access and manage Gmail messages effortlessly.",
    icon: TbBrandGmail,
    isConnected: true,
  },
  {
    title: "Medium",
    description: "Explore and share Medium stories on your dashboard.",
    icon: FaMedium,
    isConnected: false,
  },
  {
    title: "Notion",
    description: "Effortlessly sync Notion pages for seamless collaboration.",
    icon: RiNotionLine,
    isConnected: true,
  },
  {
    title: "Skype",
    description: "Connect with Skype contacts seamlessly.",
    icon: FaSkype,
    isConnected: false,
  },
  {
    title: "Slack",
    description: "Integrate Slack for efficient team communication",
    icon: FaSlack,
    isConnected: false,
  },
  {
    title: "Stripe",
    description: "Easily manage Stripe transactions and payments.",
    icon: FaStripe,
    isConnected: false,
  },
  {
    title: "Telegram",
    description: "Connect with Telegram for real-time communication.",
    icon: FaTelegram,
    isConnected: false,
  },
  {
    title: "Trello",
    description: "Sync Trello cards for streamlined project management.",
    icon: LuSquareKanban,
    isConnected: false,
  },
  {
    title: "WhatsApp",
    description: "Easily integrate WhatsApp for direct messaging.",
    icon: FaWhatsapp,
    isConnected: false,
  },
  {
    title: "Zoom",
    description: "Host Zoom meetings directly from the dashboard.",
    icon: FaCamera,
    isConnected: true,
  },
];