import { Button } from "@/components/atoms/button";
import { Card } from "@/components/atoms/card";
import { Checkbox } from "@/components/atoms/checkbox";
import { Label } from "@/components/atoms/label";
import { RadioGroup, RadioGroupItem } from "@/components/atoms/radio-group";
import { Switch } from "@/components/atoms/switch";
import { ROUTES } from "@/router/paths";
import { Link } from "react-router";

const radioValues = [
  "All new messages",
  "Direct messages and mentions",
  "Nothing",
];
const notificationSettings = [
  {
    title: "Communication emails",
    description: "Receive emails about your account activity.",
  },
  {
    title: "Marketing emails",
    description: "Receive emails about new products, features, and more.",
  },
  {
    title: "Social emails",
    description: "Receive emails for friend requests, follows, and more.",
  },
  {
    title: "Security emails",
    description: "Receive emails about your account activity and security.",
  },
];
export const Notifications = () => {
  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        <Label>Notify me about...</Label>
        <RadioGroup>
          {radioValues.map((value, i) => (
            <div className="flex items-center gap-2">
              <RadioGroupItem value={value} id={`settings-radio-group-${i}`} />
              <Label htmlFor={`settings-radio-group-${i}`}>{value}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <h5>Email Notifications</h5>

      {notificationSettings.map(({ title, description }, i) => (
        <Card
          key={title}
          className="flex-row justify-between px-5 items-center"
        >
          <div className="space-y-2">
            <Label
              htmlFor={`notifications-settings-switch-${i}`}
              className="text-base"
            >
              {title}
            </Label>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <Switch
            id={`notifications-settings-switch-${i}`}
            checked={i % 2 === 0}
          />
        </Card>
      ))}

      <div className="flex gap-2 py-3">
        <Checkbox id="settings-notifications-use-diffrent-checkbox" />
        <div>
          <Label htmlFor="settings-notifications-use-diffrent-checkbox">
            Use different settings for my mobile devices
          </Label>
          <p className="text-sm text-muted-foreground">
            You can manage your mobile notifications in the{" "}
            <Link
              to={ROUTES.settings.profile}
              className="border-b-2 border-muted-foreground hover:border-solid border-dashed"
            >
              mobile settings{" "}
            </Link>
            page.
          </p>
        </div>
      </div>

      <Button>Update notifications</Button>
    </div>
  );
};
