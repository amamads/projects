import NavigateBtns from "../components/NavigateBtns";

export const InternalServerError = () => {
  return (
    <div className="m-auto flex text-center h-full w-3/4 flex-col items-center justify-center gap-3">
      <h1 className="text-9xl">500</h1>
      <h5>Oops! Something went wrong :')</h5>
      <p className="text-muted-foreground">
        We apologize for the inconvenience. Please try again later.
      </p>
      <NavigateBtns />
    </div>
  );
};
