import NavigateBtns from "../components/NavigateBtns";

export const NotFount = () => {
  return (
    <div className="m-auto flex text-center h-full w-3/4 flex-col items-center justify-center gap-3">
      <h1 className="text-9xl">404</h1>
      <h5>Oops! Page Not Found!</h5>
      <p className="text-muted-foreground">
        It seems like the page you're looking for does not exist or might have
        been removed.
      </p>
      <NavigateBtns />
    </div>
  );
};
