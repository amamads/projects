import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/atoms/card";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import LinkBtn from "@/components/LinkBtn";
import { ROUTES } from "@/router/paths";
import { ArrowRight, Command } from "lucide-react";

export const ForgotPassword = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="flex items-center gap-3">
        <Command />
        <h4>Shadcn Admin</h4>
      </div>
      <Card className="w-100 mx-auto gap-3">
        <CardHeader>
          <h4>Forgot Password</h4>
          <p className="text-sm text-muted-foreground">
            Enter your registered email and <br />
            we will send you a link to reset your password.
          </p>
        </CardHeader>
        <CardContent className="grid gap-5">
          <div className="space-y-2">
            <Label id="auth-sign-in-email">Email</Label>
            <Input id="auth-sign-in-email" placeholder="name@example.com" />
          </div>
          <Button>
            <p>Continue</p>
            <ArrowRight />
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 w-full ">
          <p className="text-center text-sm w-4/5 text-muted-foreground">
            Don't have an account?{" "}
            <LinkBtn to={ROUTES.auth.signUp}>Sign up</LinkBtn>.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
