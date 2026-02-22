import type { LucideIcon } from "lucide-react"
import type { IconType } from "react-icons/lib"

export type AppData = {
    title:string,
    description:string,
    icon:LucideIcon | IconType,
    isConnected:boolean
}

export type ConnectionFilter = "all-apps" | "connected" | "not-connected";

export type Sort = "ascending" | "descending";