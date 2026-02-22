import { isMobilePhone } from "validator";
import { z } from "zod";

export const genderStatus = [
  { value: "male", text: "Male" },
  { value: "female", text: "Female" },
];
export const maritalStatus = [
  { value: "single", text: "Single" },
  { value: "married", text: "Married" },
];
export const roleStatus = [
  { value: "admin", text: "Admin" },
  { value: "user", text: "User" },
];

export const createRegisterSchema = (usernames?: string[]) =>
  z.object({
    username: z
      .string()
      .min(3)
      .refine(
        (value) => !usernames?.some((username: string) => username === value),
        "This is a duplicate username"
      ),
    email: z.string().min(1).email(),
    password: z.string().min(8),
    firstName: z
      .string()
      .min(2)
      .regex(/^[A-Za-z\s]+$/, "Only letters are allowed"),
    lastName: z
      .string()
      .min(2)
      .regex(/^[A-Za-z\s]+$/, "Only letters are allowed"),
    phone: z
      .string()
      .refine((val) => isMobilePhone(val, "fa-IR"), {
        message: "Phone number is invalid",
      })
      .nullable(),
    gender: z.enum(genderStatus.map((opt) => opt.value)),
    maritalStatus: z.enum(maritalStatus.map((opt) => opt.value)),
    role: z.enum(roleStatus.map((opt) => opt.value)),
    birthDate: z.date().nullable(),
  });

export type UserFormFieldes = {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string | null;
  gender: string;
  maritalStatus: string;
  role: string;
  birthDate: Date | null;
};
