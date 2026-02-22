import { MessagesSquare } from "lucide-react";
import SearchInput from "../atoms/SearchInput";
import NewMessageDialog from "../organisms/NewMessageDialog";

export default function TabsHeader() {
  return (
    <header className="grid grid-cols-2 gap-y-3 mb-5 items-center">
      <div className="flex gap-2 items-center">
        <h3 className="font-bold">Inbox</h3>
        <MessagesSquare className="size-5" />
      </div>
      <NewMessageDialog />
      <SearchInput />
    </header>
  );
}
