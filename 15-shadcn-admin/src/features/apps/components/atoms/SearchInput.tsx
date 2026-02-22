import { Input } from "@/components/atoms/input";
import {
  selectSearchTerm,
  selectSetSearchTerm,
  useAppsStore,
} from "../../store/apps-store";

export default function SearchInput() {
  const searchTerm = useAppsStore(selectSearchTerm);
  const setSearchTerm = useAppsStore(selectSetSearchTerm);
  return (
    <Input
      placeholder={searchTerm || "Filter apps..."}
      className="w-38 lg:w-63"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
