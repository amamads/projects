import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import {
  selectConnectionFilter,
  selectSetConnectionFilter,
  useAppsStore,
} from "../../store/apps-store";
import type { ConnectionFilter } from "../../types";

type Item = { title: string; value: ConnectionFilter };
const items: Item[] = [
  { title: "All Apps", value: "all-apps" },
  { title: "Connected", value: "connected" },
  { title: "Not Connected", value: "not-connected" },
];

export default function FilterConnectionSelectBox() {
  const setConnectionFilter = useAppsStore(selectSetConnectionFilter);
  const connectionFilter = useAppsStore(selectConnectionFilter);
  return (
    <Select
      defaultValue={connectionFilter}
      onValueChange={(value: ConnectionFilter) => setConnectionFilter(value)}
    >
      <SelectTrigger>
        <div className="w-22 text-left">
          <SelectValue placeholder="test" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map(({ title, value }) => (
            <SelectItem value={value} key={value}>
              {title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
