import NavigateBtns from "../components/NavigateBtns";

export const Forbidden = () => {
  return (
    <div className="m-auto flex text-center h-full w-2/3 flex-col items-center justify-center gap-3">
      <h1 className="text-9xl">403</h1>
      <h5>Access Forbidden</h5>
      <p className="text-muted-foreground">
        You don't have necessary permission to view this resource.
      </p>
      <NavigateBtns/>
    </div>
  );
};
