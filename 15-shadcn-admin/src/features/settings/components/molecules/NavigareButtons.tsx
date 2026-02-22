import { Button } from "@/components/atoms/button";
import capitalizeFirstLetter from "@/shared/utils/capitalizeFirstLetter";
import { useLocation, useNavigate } from "react-router";
import { settingsPages } from "../../consts";
import SettingsPagesIcon from "./SettingsPagesIcon";

export default function NavigatreButtons() {
  const { pathname } = useLocation();
  const pageDetail = settingsPages.find((page) => page.path === pathname);
  const navigate = useNavigate();

  return (
      <div className="hidden md:flex py-2 gap-2  lg:flex-col lg:w-40 overflow-auto">
        {settingsPages.map((page) => (
          <Button
            variant="ghost"
            data-active={pageDetail === page}
            onClick={() => navigate(page.path)}
            className="data-[active=true]:bg-accent data-[active=true]:hover:no-underline hover:underline gap-3"
          >
            <SettingsPagesIcon title={page.title} />
            {capitalizeFirstLetter(page.title)}
          </Button>
        ))}
      </div>
  );
}
