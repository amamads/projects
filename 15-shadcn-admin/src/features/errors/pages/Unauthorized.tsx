import NavigateBtns from "../components/NavigateBtns";

export const Unauthorized = () => {
  return (
    <div className="m-auto flex text-center h-full w-full flex-col items-center justify-center gap-2">
      <h1 className="text-9xl">401</h1>
      <h5>Unauthorized Access</h5>
      <p className="text-muted-foreground">
        Please log in with the appropriate credentials to access this resource.
      </p>
     <NavigateBtns/>
    </div>
  );
};
