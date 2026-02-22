import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import type { RegisterFormFieldes } from "@/features/auth/schemas/register-schema";
import useUserForm from "./hooks/use-user-form";
import BirthDatePicker from "./molecules/BirthDatePicker";
import FormSelectInput from "./molecules/FormSelectInput";
import FormTextInput from "./molecules/FormTextInput";
import {
  genderStatus,
  maritalStatus,
  roleStatus,
  type UserFormFieldes,
} from "./schema/schema";

interface UserFormProps {
  // form: UseFormReturn<UserFormFieldes>;
  onSubmit: (data: UserFormFieldes) => void;
  buttonLabels: {
    idle: string;
    loading: string;
  };
  defaultValues: Partial<RegisterFormFieldes>;
  usernames: string[] | undefined;
  title: string;
}
export default function UserForm({
  // form,
  onSubmit,
  buttonLabels,
  defaultValues,
  usernames,
  title,
}: UserFormProps) {
  const form = useUserForm(defaultValues, usernames);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-5 px-7 lg:grid-cols-2"
      >
        <CardTitle className="text-center text-4xl lg:col-span-2">
          {title}
        </CardTitle>
        <FormTextInput
          name="username"
          control={form.control}
          error={form.formState.errors.username}
        />
        <FormTextInput
          name="email"
          control={form.control}
          error={form.formState.errors.email}
        />
        <FormTextInput
          name="password"
          control={form.control}
          error={form.formState.errors.password}
        />
        <FormTextInput
          name="firstName"
          control={form.control}
          error={form.formState.errors.firstName}
        />
        <FormTextInput
          name="lastName"
          control={form.control}
          error={form.formState.errors.lastName}
        />
        <FormTextInput
          name="phone"
          control={form.control}
          error={form.formState.errors.phone}
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-3 lg:col-span-2">
          <FormSelectInput
            name="gender"
            control={form.control}
            error={form.formState.errors.gender}
            values={genderStatus}
          />
          <FormSelectInput
            name="maritalStatus"
            control={form.control}
            error={form.formState.errors.maritalStatus}
            values={maritalStatus}
          />
          <FormSelectInput
            name="role"
            control={form.control}
            error={form.formState.errors.role}
            values={roleStatus}
          />
          <BirthDatePicker
            name="birthDate"
            control={form.control}
            error={form.formState.errors.birthDate}
          />
        </div>

        <Button type="submit" className="text-lg lg:col-span-2">
          {form.formState.isSubmitting
            ? buttonLabels.loading
            : buttonLabels.idle}
        </Button>
      </form>
    </Form>
  );
}
