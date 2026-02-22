import { Telescope } from "lucide-react";

export const Help = () => {
  return (
    <div className="m-auto flex text-center h-svh w-3/4 flex-col items-center justify-center gap-3">
      <Telescope className="size-20" />
      <h1 className="">Coming Soon!</h1>
      <p className="text-muted-foreground">
        This page has not been created yet. Stay tuned though!
      </p>
    </div>
  );
};
