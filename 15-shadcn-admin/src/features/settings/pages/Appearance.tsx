import { Button } from "@/components/atoms/button";
import { Label } from "@/components/atoms/label";
import { RadioGroup } from "@/components/atoms/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";

export const Appearance = () => {
  const fontValues = ["inter", "manrope", "system"];
  return (
    <div className="space-y-7">
      <div className="grid gap-2">
        <Label>Font</Label>
        <Select defaultValue={fontValues[0]}>
          <SelectTrigger className="bg-card! w-47">
            <SelectValue />
          </SelectTrigger>
          <SelectContent position="popper" className="bg-card">
            {fontValues.map((font) => (
              <SelectItem value={font} key={font}>
                {font}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">
          Set the font you want to use in the dashboard.
        </p>
      </div>
      <div className="grid gap-2">
        <Label>Theme </Label>
        <p className="text-sm text-muted-foreground">
          Select the theme for the dashboard.
        </p>

        <div>
          {/* <div className="bg-foreground w-1/3 border border-chart-2 p-2">
            <div className="bg-card-foreground">
              <Skeleton className="w-3/5 h-3 bg-card-foreground" />
              <Skeleton className="w-3/5 h-3 bg-card-foreground" />
            </div>
          </div> */}

          {/* <div className="w-44 rounded-xl bg-white p-4 space-y-3">
            <div className="h-3 w-3/4 rounded bg-gray-200" />
            <div className="h-3 w-full rounded bg-gray-200" />

            <div className="flex items-center gap-2 pt-3">
              <div className="h-6 w-6 rounded-full bg-gray-200" />
              <div className="h-3 w-full rounded bg-gray-200" />
            </div>

            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gray-200" />
              <div className="h-3 w-full rounded bg-gray-200" />
            </div>
          </div> */}
        </div>
        <RadioGroup
          // onValueChange={field.onChange}
          // defaultValue={field.value}
          className="grid max-w-md grid-cols-2 gap-8 pt-2"
        >
          <div>
            <Label className="[&:has([data-state=checked])>div]:border-primary">
              {/* <FormControl>
                <RadioGroupItem value="light" className="sr-only" />
              </FormControl> */}
              <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                  <div className="space-y-2 rounded-md bg-white p-2 shadow-xs">
                    <div className="h-2 w-20 rounded-lg bg-[#ecedef]" />
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-xs">
                    <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-xs">
                    <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                </div>
              </div>
              <span className="block w-full p-2 text-center font-normal">
                Light
              </span>
            </Label>
          </div>
          <div>
            <Label className="[&:has([data-state=checked])>div]:border-primary">
              {/* <FormControl>
                <RadioGroupItem value="dark" className="sr-only" />
              </FormControl> */}
              <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
                <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                  <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-xs">
                    <div className="h-2 w-20 rounded-lg bg-slate-400" />
                    <div className="h-2 w-25 rounded-lg bg-slate-400" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-xs">
                    <div className="h-4 w-4 rounded-full bg-slate-400" />
                    <div className="h-2 w-25 rounded-lg bg-slate-400" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-xs">
                    <div className="h-4 w-4 rounded-full bg-slate-400" />
                    <div className="h-2 w-25 rounded-lg bg-slate-400" />
                  </div>
                </div>
              </div>
              <span className="block w-full p-2 text-center font-normal">
                Dark
              </span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      <Button>Update profile</Button>
    </div>
  );
};
