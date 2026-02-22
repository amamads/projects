import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type {
  Control,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";

type FormTextInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
};

export default function FormTextInput<T extends FieldValues>({
  name,
  control,
  error,
}: FormTextInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{name}</FormLabel>
          <FormControl>
            <Input
              {...field}
              value={field.value ?? ""}
              placeholder={`Enter ${name}`}
            />
          </FormControl>
          {error && <FormDescription>{error.message}</FormDescription>}
        </FormItem>
      )}
    />
  );
}
