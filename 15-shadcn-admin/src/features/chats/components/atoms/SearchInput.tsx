import { Input } from "@/components/atoms/input";
import { selectSetSearchTerm, useChatsStore } from "../../store/chats-store";
import { Search } from "lucide-react";

export default function SearchInput() {
  const setSearchTerm = useChatsStore(selectSetSearchTerm);
  return (
    <div className="relative col-span-2">
      <Search className="size-4 text-muted-foreground/50 absolute bottom-1/2 translate-1/2 left-0" />
      <Input
        className="pl-8 bg-background! w-full placeholder:text-foreground/50 border-muted focus:border-foreground focus-visible:ring-0"
        placeholder="Search Chat..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
