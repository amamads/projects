import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/atoms/card";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { Separator } from "@/components/atoms/separator";
import LinkBtn from "@/components/LinkBtn";
import { ROUTES } from "@/router/paths";
import { Command } from "lucide-react";
import { LuFacebook, LuGithub } from "react-icons/lu";

export const SignUp = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="flex items-center gap-3">
        <Command />
        <h4>Shadcn Admin</h4>
      </div>
      <Card className="w-100 mx-auto">
        <CardHeader className="">
          <h4>Create an account</h4>
          <p className="text-sm text-muted-foreground">
            Enter your email and password to create an account. Already have an
            account? <LinkBtn to={ROUTES.auth.signIn}>Sign In</LinkBtn>
          </p>
        </CardHeader>
        <CardContent className="grid gap-5">
          <div className="space-y-2">
            <Label id="auth-sign-up-email">Email</Label>
            <Input id="auth-sign-up-email" placeholder="name@example.com" />
          </div>
          <div className="space-y-2">
            <Label id="auth-sign-up-password">Password</Label>
            <Input
              id="auth-sign-up-password"
              placeholder="*******"
              type="password"
            />
          </div>
          <div className="space-y-2">
            <Label id="auth-sign-up-confrim-password">Confrim Password</Label>
            <Input
              id="auth-sign-up-confrim-password"
              placeholder="*******"
              type="password"
            />
          </div>
          <Button>Create Account</Button>
        </CardContent>
        <div className="flex items-center justify-center gap-2 w-17/20 overflow-hidden m-auto">
          <Separator className="bg-muted" />
          <p className="uppercase text-nowrap text-xs text-muted-foreground/90">
            or continue with
          </p>
          <Separator className="bg-muted" />
        </div>
        <CardFooter className="flex flex-col gap-4 w-full">
          <div className="flex w-full gap-2">
            <Button variant="outline" className="flex-1">
              <LuGithub />
              <p>GitHub</p>
            </Button>
            <Button variant="outline" className="flex-1">
              <LuFacebook />
              <p>Facebook</p>
            </Button>
          </div>
          <p className="text-center text-sm w-4/5 text-muted-foreground">
            By clicking sign in, you agree to our
            <LinkBtn to={ROUTES.falsePage}> Terms of Service </LinkBtn>
            and <LinkBtn to={ROUTES.falsePage}>Privacy Policy</LinkBtn>.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
