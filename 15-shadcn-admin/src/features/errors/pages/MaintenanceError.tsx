import { Button } from "@/components/atoms/button";

export const MaintenanceError = () => {
  return (
    <div className="m-auto flex text-center h-full w-3/4 flex-col items-center justify-center gap-3">
      <h1 className="text-9xl">503</h1>
      <h5>Website is under maintenance!</h5>
      <p className="text-muted-foreground">
        The site is not available at the moment. We'll be back online shortly.
      </p>
      <Button variant='outline'>Learn more</Button>
    </div>
  );
};
