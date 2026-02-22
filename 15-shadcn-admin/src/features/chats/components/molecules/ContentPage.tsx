import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/atoms/card";
import { ScrollArea } from "@/components/atoms/scroll-area";
import { TabsContent } from "@/components/atoms/tabs";
import formatDate from "@/shared/utils/formatDate";
import { EllipsisVertical, Phone, Plus, Send, Video } from "lucide-react";
import type { Chat } from "../../types";
import formatTime from "@/shared/utils/formatTime";
import { cn } from "@/lib/utils";
import { Input } from "@/components/atoms/input";

export default function ContentPage({
  data: { username, title, profile, fullName, messages },
}: {
  data: Chat;
}) {
  return (
    <TabsContent value={username} key={username}>
      <Card>
        <CardHeader className="flex justify-between px-0 w-19/20 mx-auto">
          <div className="flex items-center gap-2">
            <Avatar className="size-7 mb-auto">
              <AvatarImage src={profile} />
              <AvatarFallback className="text-xs font-bold">
                {fullName}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start truncate text-inherit">
              <span className="text-sm font-semibold text-foreground">
                {fullName}
              </span>
              <span className="text-[12px] text-muted-foreground">{title}</span>
            </div>
          </div>
          <div>
            <Button variant="ghost" className="rounded-full size-7">
              <Video className="size-3.5 text-muted-foreground " />
            </Button>
            <Button variant="ghost" className="rounded-full size-7">
              <Phone className="size-3.5 text-muted-foreground " />
            </Button>
            <Button variant="ghost" className="rounded-full size-7">
              <EllipsisVertical className="size-3.5 text-muted-foreground " />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[60vh]" childClassName="flex items-end">
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
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <div className="border border-input rounded-lg flex items-center w-full px-3">
            <Plus className="size-4 text-muted-foreground" />
            <Input
              className="bg-background! border-0 placeholder:text-foreground/50 placeholder:text-sm focus-visible:ring-0"
              placeholder="Tupe Your messages..."
            />
            <Send className="size-4" />
          </div>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}
