import { Badge } from "@/components/atoms/badge";
import { Button } from "@/components/atoms/button";
import { Card } from "@/components/atoms/card";
import { TabsContent } from "@/components/atoms/tabs";
import { MessagesSquare } from "lucide-react";
import { selectSetOpenNewMessageDialog, useChatsStore } from "../../store/chats-store";

export default function DefaultContentPage() {
  
  const setOpen = useChatsStore(selectSetOpenNewMessageDialog);
  return (
    <TabsContent value="default" className="h-full">
      <Card className="h-full flex justify-center items-center">
        <Badge variant="outline" className="size-16">
          <MessagesSquare className="size-8!" />
        </Badge>
        <div className="grid justify-items-center gap-2">
          <h4>Your messages</h4>
          <p className="text-sm text-muted-foreground">
            Send a message to start a chat.
          </p>
        </div>
        <Button
          onClick={()=>setOpen(true)}
        >Send message</Button>
      </Card>
    </TabsContent>
  );
}
