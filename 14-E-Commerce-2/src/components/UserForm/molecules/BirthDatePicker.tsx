import CalendarWithSelection from "@/components/calendar";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import type { Control, FieldError, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
}

export default function BirthDatePicker<T extends FieldValues>({
  name,
  control,
  error,
}: Props<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Date of birth</FormLabel>
          <FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  {field.value
                    ? new Date(field.value).toLocaleDateString()
                    : "Select date"}
                  <ChevronDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <CalendarWithSelection
                  defaultValue={field.value}
                  onSelect={field.onChange}
                />
              </PopoverContent>
            </Popover>
          </FormControl>
          {error && <FormDescription>{error.message}</FormDescription>}
        </FormItem>
      )}
    />
  );
}
