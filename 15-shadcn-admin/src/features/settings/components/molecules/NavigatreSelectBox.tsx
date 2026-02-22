import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/atoms/select";
import { SelectValue } from "@radix-ui/react-select";
import { useLocation, useNavigate } from "react-router";
import { settingsPages } from "../../consts";
import SettingsPagesIcon from "./SettingsPagesIcon";

export default function NavigatreSelectBox() {
  const { pathname } = useLocation();
  const pageDetail = settingsPages.find((page) => page.path === pathname);
  const navigate = useNavigate();

  return (
    <div className="md:hidden">
      <Select
        defaultValue={pageDetail?.title}
        onValueChange={(e) => {
          const pd = settingsPages.find((page) => page.title === e);
          if (!pd) return;
          navigate(pd.path);
        }}
      >
        <SelectTrigger className="w-50">
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="popper">
          {settingsPages.map(({ title }) => (
            <SelectItem value={title}>
              <div className="flex items-center gap-3">
                <SettingsPagesIcon title={title} className="size-5" />
                <p>{title}</p>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
