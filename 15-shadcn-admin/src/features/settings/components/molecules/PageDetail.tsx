import { ROUTES } from "@/router/paths";
import capitalizeFirstLetter from "@/shared/utils/capitalizeFirstLetter";
import { Navigate } from "react-router";
import { settingsPages } from "../../consts";
import { useSettingsStore, selectPageTitle } from "../../store/settings-store";

export default function PageDetail() {
  const pageTitle = useSettingsStore(selectPageTitle);

  const pageDetail = settingsPages.filter(
    (page) => page.title === pageTitle,
  )[0];

  if (!pageDetail) return <Navigate to={ROUTES.errors.notFound} />;
  return (
    <div>
      <h5>{capitalizeFirstLetter(pageDetail.title)}</h5>
      <p className="text-sm text-muted-foreground">{pageDetail.description}</p>
    </div>
  );
}
