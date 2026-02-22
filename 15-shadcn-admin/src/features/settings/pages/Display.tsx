import { Button } from "@/components/atoms/button";
import { Checkbox } from "@/components/atoms/checkbox";
import { Label } from "@/components/atoms/label";
import capitalizeFirstLetter from "@/shared/utils/capitalizeFirstLetter";

export function Display() {
  const checkboxsValue = [
    "recents",
    "home",
    "application",
    "desktop",
    "downloads",
    "documents",
  ];
  return (
    <div className="space-y-7">
      <div className="grid gap-1">
        <h5>Sidebar</h5>
        <p className="text-sm text-muted-foreground">
          Select the items you want to display in the sidebar.
        </p>
      </div>
      <div className="space-y-2">
        {checkboxsValue.map((value) => (
          <div key={value} className="flex  gap-2">
            <Checkbox id={`settings-display-chkbox-${value}`} />
            <Label htmlFor={`settings-display-chkbox-${value}`}>
              {capitalizeFirstLetter(value)}
            </Label>
          </div>
        ))}
      </div>
      <Button>Update display</Button>
    </div>
  );
}
