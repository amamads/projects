import FilterConnectionSelectBox from "../molecules/FilterConnectionSelectBox";
import SearchInput from "../atoms/SearchInput";
import SortAppsDropdown from "../molecules/SortAppsDropdown";
export default function AppsHeader() {
  return (
    <header className="grid gap-4">
      <div>
        <h3 className="font-bold">App Inregrations</h3>
        <h6 className="text-muted-foreground">
          Here's a list of your apps for the integration!
        </h6>
      </div>
      <div className="flex flex-col gap-5 sm:flex-row">
        <SearchInput />
        <div className="flex w-full justify-between">
          <FilterConnectionSelectBox />
          <SortAppsDropdown />
        </div>
      </div>
    </header>
  );
}
