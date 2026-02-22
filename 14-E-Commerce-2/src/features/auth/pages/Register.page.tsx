import { Card } from "@/components/ui/card";
import { selectIsLogged, useUserStore } from "@/stores/user-store";
import RegisterForm from "../components/organisms/RegisterForm";
import LogoutComponent from "../components/molecules/LogoutComponent";

export const Register = () => {
  const userIsLogged = useUserStore(selectIsLogged);

  if (userIsLogged) return <LogoutComponent title="register" />;

  return (
    <Card>
      <RegisterForm />
    </Card>
  );
};
