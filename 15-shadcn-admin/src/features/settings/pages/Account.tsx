import { Button } from "@/components/atoms/button";
import { Calendar } from "@/components/atoms/calendar";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { Popover, PopoverContent } from "@/components/atoms/popover";
import formatDate from "@/shared/utils/formatDate";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import SelectLanguageMenu from "../components/molecules/SelectLanguageMenu";

export const Account = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="space-y-7">
      <div className="grid gap-2">
        <Label htmlFor="settings-account-name-input">Name</Label>
        <Input placeholder="Your name" id="settings-account-name-input" />
        <p className="text-sm text-muted-foreground">
          This is the name that will be displayed on your profile and in emails.
        </p>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="settings-profile-email-input">Date of birth</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="justify-self-start w-59">
              {date ? (
                <p className="font-normal">{formatDate(date.toISOString())}</p>
              ) : (
                <p className="text-muted-foreground/60">Pick a date</p>
              )}
              <CalendarIcon className="size-4 text-muted-foreground/60 ml-auto" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-60">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg border w-full"
              captionLayout="dropdown"
            />
          </PopoverContent>
        </Popover>
        <p className="text-sm text-muted-foreground">
          Your date of birth is used to calculate your age.
        </p>
      </div>
      <div className="grid gap-2">
        <Label>Language</Label>
        <SelectLanguageMenu/>
        <p className="text-sm text-muted-foreground">
          This is the language that will be used in the dashboard.
        </p>
      </div>

      <Button>Update profile</Button>
    </div>
  );
};
