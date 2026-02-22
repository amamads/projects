import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { createRegisterSchema } from "../schema/schema";
import type { RegisterFormFieldes } from "@/features/auth/schemas/register-schema";

export default function useUserForm(
    defaultValues: Partial<RegisterFormFieldes>,
    usernames: string[] | undefined
) {
  const schema = useMemo(() => createRegisterSchema(usernames), [usernames]);

  const form = useForm<RegisterFormFieldes>({
    resolver: zodResolver(schema),
    defaultValues,
  });
  return form;
}
