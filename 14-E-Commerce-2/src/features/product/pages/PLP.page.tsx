import { Card, CardContent, CardTitle } from "@/components/ui/card";
import ProductList from "../components/organisms/ProductList";

export const PLP = () => {
  return (
    <Card>
      <CardTitle className="text-center text-3xl uppercase text-primary">
        Product list
      </CardTitle>
      <CardContent className="grid gap-5 xl:grid-cols-4 md:grid-cols-2">
        <ProductList />
      </CardContent>
    </Card>
  );
};
