import UserForm from "@/components/UserForm";
import type { UserFormFieldes } from "@/components/UserForm/schema/schema";
import { ROUTES } from "@/router";
import type User from "@/types/user";
import { useNavigate } from "react-router";
import useAddUser from "../../hooks/use-add-user";
import useGetUsers from "../../hooks/use-get-users";

export default function RegisterForm() {
  const { data: users } = useGetUsers();
  const { mutate: addUser } = useAddUser();
  const navigate = useNavigate();
  const usernames = users?.map((user) => user.username);

  const defaultValues: Partial<UserFormFieldes> = {
    username: "amamads",
    email: "demo@text.as",
    password: "12345678",
    firstName: "ams",
    lastName: "rad",
    phone: "09192777157",
    gender: "female",
    maritalStatus: "married",
    role: "admin",
    birthDate: new Date("2006-04-10"),
  };

  async function formOnSubmit(data: UserFormFieldes) {
    console.log(data);
    await new Promise((res) => setTimeout(res, 1000));
    const newUser: User = {
      ...data,
      id: crypto.randomUUID(),
    };
    addUser(newUser);
    navigate(ROUTES.auth.login);
  }
  return (
    <UserForm
      onSubmit={formOnSubmit}
      buttonLabels={{ idle: "submit", loading: "submitting..." }}
      defaultValues={defaultValues}
      usernames={usernames}
      title="REGISTER"
    />
  );
}
