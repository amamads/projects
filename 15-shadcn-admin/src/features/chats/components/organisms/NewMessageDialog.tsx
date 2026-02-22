import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { Button } from "@/components/atoms/button";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/atoms/command";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/atoms/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Check, SquarePen, X } from "lucide-react";
import {
  selectChatsData,
  selectOpenNewMessageDialog,
  selectSetOpenNewMessageDialog,
  useChatsStore,
} from "../../store/chats-store";
import type { Chat } from "../../types";
import { useState } from "react";
import { Badge } from "@/components/atoms/badge";

export default function NewMessageDialog() {
  const chatsData: Chat[] = useChatsStore(selectChatsData);
  const open = useChatsStore(selectOpenNewMessageDialog);
  const setOpen = useChatsStore(selectSetOpenNewMessageDialog);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  function selectItemsFn(value: string) {
    setSelectedItems((prev) => {
      if (prev.includes(value)) return prev.filter((item) => item !== value);
      return [...prev, value];
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="size-6 rounded-full justify-self-end"
        >
          <SquarePen className="text-muted-foreground size-3.5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-base p-0">New message</DialogTitle>
          <div className="flex gap-2 gap-y-3 items-center flex-wrap">
            <p className="text-sm text-muted-foreground">To:</p>
            {selectedItems.map((text) => (
              <Badge className="text-[0.65rem] rounded-sm" key={text}>
                <p>{text}</p>
                <button
                  onClick={() => selectItemsFn(text)}
                  className="text-ring cursor-pointer hover:text-foreground"
                >
                  <X className="size-3 " />
                </button>
              </Badge>
            ))}
          </div>
        </DialogHeader>

        <Command className="rounded-lg border">
          <CommandInput placeholder="Search people..." />
          <CommandList asChild>
            {chatsData.map(({ profile, fullName, username }) => (
              <CommandItem asChild key={username}>
                <button
                  onClick={() => selectItemsFn(fullName)}
                  className="w-full"
                >
                  <Avatar className="size-7 mb-auto">
                    <AvatarImage src={profile} />
                    <AvatarFallback className="text-xs font-bold">
                      {fullName}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col items-start">
                    <span className="text-xs font-semibold">{fullName}</span>
                    <span className="text-[0.7rem] text-muted-foreground">
                      {username}
                    </span>
                  </div>
                  {selectedItems.includes(fullName) && (
                    <Check className="ml-auto" />
                  )}
                </button>
              </CommandItem>
            ))}
          </CommandList>
        </Command>
        <Button>Chat</Button>
      </DialogContent>
    </Dialog>
  );
}
