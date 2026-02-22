import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/atoms/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/atoms/input-otp";
import LinkBtn from "@/components/LinkBtn";
import { ROUTES } from "@/router/paths";
import { Command } from "lucide-react";

export const OTP = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="flex items-center gap-3">
        <Command />
        <h4>Shadcn Admin</h4>
      </div>
      <Card className="w-100 mx-auto gap-3">
        <CardHeader>
          <h6 className="font-semibold">Two-factor Authentication</h6>
          <p className="text-sm text-muted-foreground">
            Please enter the authentication code.
            <br />
            We have sent the authentication code to your email.
          </p>
        </CardHeader>
        <CardContent className="grid gap-5">
          <div className="space-y-2">
            <InputOTP maxLength={6}>
              <div className="flex justify-center items-center">
                <InputOTPGroup>
                  <InputOTPSlot className="w-13" index={0} />
                  <InputOTPSlot className="w-13" index={1} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot className="w-13" index={2} />
                  <InputOTPSlot className="w-13" index={3} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot className="w-13" index={4} />
                  <InputOTPSlot className="w-13" index={5} />
                </InputOTPGroup>
              </div>
            </InputOTP>
          </div>
          <Button disabled>Verify</Button>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 w-full ">
          <p className="text-center text-sm w-4/5 text-muted-foreground">
           Haven't received it? <LinkBtn to={ROUTES.falsePage}>Resend a new code</LinkBtn>.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

// import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
// import { Label } from '@/components/ui/label'

// const InputOTPGroupedDemo = () => {
//   const id = useId()

//   return (
//     <div className='space-y-3'>
//       <Label htmlFor={id}>Input OTP Grouped</Label>
// <InputOTP id={id} maxLength={6}>
//   <InputOTPGroup>
//     <InputOTPSlot index={0} />
//     <InputOTPSlot index={1} />
//     <InputOTPSlot index={2} />
//   </InputOTPGroup>
//   <InputOTPSeparator />
//   <InputOTPGroup>
//     <InputOTPSlot index={3} />
//     <InputOTPSlot index={4} />
//     <InputOTPSlot index={5} />
//   </InputOTPGroup>
// </InputOTP>
//     </div>
//   )
// }

// export default InputOTPGroupedDemo
