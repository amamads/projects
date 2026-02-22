import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function PasswordCell({ value }: { value: string }) {
  const [showText, setShowText] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <p>{showText ? value : "********"}</p>

      <Button
        variant="outline"
        className="size-6"
        onClick={() => setShowText((prev) => !prev)}
      >
        {showText ? <Eye /> : <EyeOff />}
      </Button>
    </div>
  );
}
