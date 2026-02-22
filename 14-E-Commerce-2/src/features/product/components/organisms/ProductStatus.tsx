import { Card } from "@/components/ui/card";
import { Navigate } from "react-router";

export default function ProductStatus({
  isLoading,
  isError,
  error,
  existProduct,
}: {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  existProduct: boolean;
}) {
  if (isLoading)
    return (
      <Card>
        <h1 className="text-center text-4xl uppercase text-destructive">
          Loading...
        </h1>
      </Card>
    );
  if (isError)
    return (
      <Card>
        <h1 className="text-center text-4xl uppercase text-destructive">
          Error:{error?.message}
        </h1>
      </Card>
    );
  if (!existProduct) return <Navigate to="/" replace />;
}
