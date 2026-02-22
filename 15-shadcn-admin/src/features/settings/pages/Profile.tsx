import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import { Textarea } from "@/components/atoms/textarea";

export const Profile = () => {
  const emails = ["m@example@com", "m@gmail@com", "m@suport@com"];

  return (
    <div className="space-y-7">
      <div className="grid gap-2">
        <Label htmlFor="settings-profile-username-input">Username</Label>
        <Input placeholder="shadcn" id="settings-profile-username-input" />
        <p className="text-sm text-muted-foreground">
          This is your public display name. It can be your real name or a
          pseudonym. You can only change this once every 30 days.
        </p>
      </div>
      <div className="grid gap-2">
        <Label>Email</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a verified email to display" />
          </SelectTrigger>
          <SelectContent>
            {emails.map((email) => (
              <SelectItem value={email} key={email}>
                {email}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">
          You can manage verified email addresses in your email settings.
        </p>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="settings-profile-email-input">Bio</Label>
        <Textarea
          className="resize-none h-15"
          placeholder="Tell us a little bit about yourself"
          id="settings-profile-email-input"
          value="I own a computer."
        />
        <p className="text-sm text-muted-foreground">
          You can @mention other users and organizations to link to them.
        </p>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="settings-profile-urls-input">URLS</Label>
        <p className="text-sm text-muted-foreground">
          Add links to your website, blog, or social media profiles.
        </p>
        <Input id="settings-profile-urls-input" value="https://shadcn.com" />
        <Input value="http://twitter.com/shadcn" />
        <Button variant="outline" className="justify-self-start">
          Add URL
        </Button>
      </div>

      <Button>Update profile</Button>
    </div>
  );
};
