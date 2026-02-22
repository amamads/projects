import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { TabsContent } from "@/components/atoms/tabs";
import { cn } from "@/lib/utils";
import formatDate from "@/shared/utils/formatDate";
import formatTime from "@/shared/utils/formatTime";
import {
  ArrowLeft,
  EllipsisVertical,
  Plus,
  Send
} from "lucide-react";
import {
  selectChatsData,
  selectSetSelectTab,
  useChatsStore,
} from "../../store/chats-store";
import type { Chat } from "../../types";

export default function ChatsContentsSM() {
  const chatsData: Chat[] = useChatsStore(selectChatsData);
  const setSelectTab = useChatsStore(selectSetSelectTab);

  return (
    <div>
      {chatsData.map(({ username, title, profile, fullName, messages }) => (
        <TabsContent value={username} key={username} asChild>
          <div className="absolute bg-background top-0 bottom-0 right-0 left-0 px-[2.5vw]">
            <header className="flex gap-4 clear-start py-5">
              <Button
                variant="ghost"
                className="p-2!"
                onClick={() => setSelectTab("default")}
              >
                <ArrowLeft />
              </Button>
              <div className="flex items-center gap-2">
                <Avatar className="size-9 mb-auto">
                  <AvatarImage src={profile} />
                  <AvatarFallback className="text-xs font-bold">
                    {fullName}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start truncate text-inherit">
                  <span className="text-sm font-semibold text-foreground">
                    {fullName}
                  </span>
                  <span className="text-[12px] text-muted-foreground">
                    {title}
                  </span>
                </div>
              </div>
              <Button variant="ghost" className="p-1! ml-auto">
                <EllipsisVertical className="size-5.5 text-muted-foreground " />
              </Button>
            </header>
              <main>
                <div className="grid gap-8">
                  {[...messages]
                    .reverse()
                    .map(({ sender, message, timestamp }, i) => {
                      const date = formatDate(timestamp);
                      const showDate =
                        !messages?.[i - 1]?.timestamp ||
                        date !== formatDate(messages?.[i - 1]?.timestamp);

                      return (
                        <>
                          {showDate && (
                            <p className="text-center text-xs">{date}</p>
                          )}
                          <div
                            className={cn(
                              "max-w-3/5 rounded-xl px-3 py-2",
                              sender === "You"
                                ? "bg-card-foreground/90 text-muted ml-auto rounded-br-none!"
                                : "bg-muted  rounded-bl-none!",
                            )}
                          >
                            <p className="">{message}</p>
                            <p className="text-[0.7rem] ">
                              {formatTime(timestamp)}
                            </p>
                          </div>
                        </>
                      );
                    })}
                </div>
              </main>
            <footer className="">
              <div className="border border-input rounded-lg flex items-center w-full px-3">
                <Plus className="size-4 text-muted-foreground" />
                <Input
                  className="bg-background! border-0 placeholder:text-foreground/50 placeholder:text-sm focus-visible:ring-0"
                  placeholder="Tupe Your messages..."
                />
                <Send className="size-4" />
              </div>
            </footer>
          </div>
        </TabsContent>
      ))}
    </div>
  );
}
