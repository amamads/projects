import { Card, CardTitle } from "@/components/ui/card";
import { ProductDetails } from "../components/templates/ProductDetails";

export const PDP = () => {
  return (
    <Card>
      <CardTitle className="text-center text-3xl uppercase text-primary">
        Product Details
      </CardTitle>
      <ProductDetails />
    </Card>
  );
};
