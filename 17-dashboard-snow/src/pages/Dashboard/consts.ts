import type { MessagesCard } from "@/types";
import type {  Website } from "./types";

export const messagesCards:MessagesCard[]=[
    {title:'view',value:'721K',percent:11.01,isPositive:true},
    {title:'visits',value:'367K',percent:0.03,isPositive:false},
    {title:'new users',value:'1,156',percent:15.03,isPositive:true},
    {title:'active users',value:'239K',percent:6.08,isPositive:false},
]

export const websites:Website[] = [
    {title:'google',value:100},
    {title:'youTube',value:40},
    {title:'instagram',value:82,isPrimary:true},
    {title:'pinterest',value:44},
    {title:'facebook',value:75},
    {title:'twitter',value:50},
    {title:'tumblr',value:63},
]