import { Card } from "@/components/ui/card";
import { selectIsLogged, useUserStore } from "@/stores/user-store";
import LogoutComponent from "../components/molecules/LogoutComponent";
import { LoginForm } from "../components/organisms/LoginForm";

export const Login = () => {
  const userIsLogged = useUserStore(selectIsLogged);

  if (userIsLogged) return <LogoutComponent title="login" />;

  return (
    <Card className="mx-auto md:w-2/3 lg:w-1/2 ">
      <LoginForm />
    </Card>
  );
};
