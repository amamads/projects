import { CardTitle } from "@/components/ui/card";
import { Form, FormDescription } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/router";
import { useUserStore, selectIsLogged, selectLogin } from "@/stores/user-store";
import type User from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useGetUsers from "../../hooks/use-get-users";
import LogoutComponent from "../molecules/LogoutComponent";
import { loginSchema, type LoginFormFieldes } from "../../schemas/login.schema";
import FormTextInput from "@/components/UserForm/molecules/FormTextInput";

export const LoginForm = () => {
  const userIsLogged = useUserStore(selectIsLogged);
  const { data: users } = useGetUsers();
  const login = useUserStore(selectLogin);
  const navigate = useNavigate();

  const form = useForm<LoginFormFieldes>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "user21",
      password: "12345678",
    },
  });
  const {
    formState: { errors, isSubmitting },
    setError,
  } = form;

  async function formOnSubmit({ password, username }: LoginFormFieldes) {
    // await new Promise(res => setTimeout(res, 1000))

    const targetUser: User | undefined = users?.find(
      (user) => user.username === username && user.password === password
    );

    if (!targetUser)
      return setError("root", {
        message: "The username or password is incorrect",
      });

    login(targetUser);
    navigate(ROUTES.default.home);
    // console.log(targetUser);
  }

  if (userIsLogged) return <LogoutComponent title="login" />;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(formOnSubmit)}
        className="grid gap-5 px-7"
      >
        <CardTitle className="text-center text-4xl">LOGIN</CardTitle>

        <FormTextInput
          name="username"
          control={form.control}
          error={form.formState.errors.username}
        />
        <FormTextInput
          name="password"
          control={form.control}
          error={form.formState.errors.password}
        />
        <Button type="submit" className="text-lg">
          {isSubmitting ? "Loading..." : "Login"}
        </Button>
        {errors.root && (
          <FormDescription className="text-destructive">
            {errors.root?.message}
          </FormDescription>
        )}
      </form>
    </Form>
  );
};
