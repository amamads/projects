import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import type { Control, FieldError, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  values: { value: string; text: string }[];
  error?: FieldError;
}

export default function FormSelectInput<T extends FieldValues>({
  name,
  control,
  error,
  values,
}: Props<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>maritalStatus</FormLabel>
          <FormControl>
            <Select defaultValue={field.value} onValueChange={field.onChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select your maritalStatus" />
              </SelectTrigger>
              <SelectContent>
                {values.map(({ value, text }, i) => (
                  <SelectItem key={i} value={value}>
                    {text}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          {error && <FormDescription>{error?.message}</FormDescription>}
        </FormItem>
      )}
    />
  );
}
