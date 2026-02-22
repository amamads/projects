import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { Separator } from "@/components/atoms/separator";
import { TabsList, TabsTrigger } from "@/components/atoms/tabs";
import { selectChatsData, useChatsStore } from "../../store/chats-store";
import type { Chat } from "../../types";
import TabsHeader from "../molecules/TabsHeader";

export default function ChatsTabs() {
  const chatsData: Chat[] = useChatsStore(selectChatsData);

  return (
    <div>
      <TabsHeader />
        <TabsList className="flex flex-col bg-transparent p-0 w-full overflow-auto h-[70vh]">
          {chatsData.map((chat, i) => (
            <div key={chat.username} className="w-full">
              <TabsTrigger
                value={chat.username}
                className="w-full justify-start py-2 data-[state=active]:p-2! data-[state=active]:bg-muted! dark:data-[state=active]:text-muted-foreground! dark:data-[state=active]:hover:text-foreground! data-[state=active]:border-0! hover:bg-muted my-1 hover:text-foreground!"
              >
                <Avatar className="size-7 mb-auto">
                  <AvatarImage src={chat.profile} />
                  <AvatarFallback className="text-xs font-bold">
                    {chat.fullName}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col items-start truncate text-inherit">
                  <span className="text-sm font-semibold text-foreground">
                    {chat.fullName}
                  </span>
                  <span className="text-xs truncate text-inherit text-wrap text-left">
                    {chat.messages[0]?.sender === "You" && "You: "}
                    {chat.messages[0]?.message}
                  </span>
                </div>
              </TabsTrigger>

              {i + 1 !== chatsData.length && <Separator />}
            </div>
          ))}
        </TabsList>
    </div>
  );
}
