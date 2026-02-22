import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { Separator } from "@/components/atoms/separator";
import LinkBtn from "@/components/LinkBtn";
import { ROUTES } from "@/router/paths";
import { Command, LogIn } from "lucide-react";
import { LuFacebook, LuGithub } from "react-icons/lu";
import { Link } from "react-router";

export const SignIn2 = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <h4 className="flex items-center gap-3">
        <Command />
        <span>Shadcn Admin</span>
      </h4>
      <div className="w-100 mx-auto grid gap-5">
        <header className="w-3/5">
          <h5>Sign in</h5>
          <p className="text-sm text-muted-foreground">
            Enter your email and password below to log into your account
          </p>
        </header>
        <main className="grid gap-5">
          <div className="space-y-2">
            <Label id="auth-sign-in-2-email">Email</Label>
            <Input id="auth-sign-in-2-email" placeholder="name@example.com" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label id="auth-sign-in-2-password">Password</Label>
              <Link
                to={ROUTES.auth.signIn}
                className="text-sm text-muted-foreground hover:underline font-semibold"
              >
                Forgot password?
              </Link>
            </div>
            <Input id="auth-sign-in-2-password" placeholder="*******" />
          </div>
          <Button>
            <LogIn />
            <p>Sign in</p>
          </Button>
        </main>
        <div className="flex items-center justify-center gap-2 w-full overflow-hidden m-auto">
          <Separator className="bg-muted" />
          <p className="uppercase text-nowrap text-xs text-muted-foreground/90">
            or continue with
          </p>
          <Separator className="bg-muted" />
        </div>
        <footer className="flex flex-col gap-4 w-full">
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
          <p className="text-center text-sm w-4/5 mx-auto text-muted-foreground">
            By clicking sign in, you agree to our
            <LinkBtn to={ROUTES.falsePage}> Terms of Service </LinkBtn>
            and <LinkBtn to={ROUTES.falsePage}>Privacy Policy</LinkBtn>.
          </p>
        </footer>
      </div>
    </div>
  );
};
