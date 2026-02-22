import { Card, CardContent, CardTitle } from "@/components/ui/card";
import CartProducts from "../components/organisms/CartProducts";
import type Product from "@/types/product";
import useGetCartProducts from "../hooks/useGetCartProducts";

export const Cart = () => {
  const { isLoading, isError, products, error } = useGetCartProducts();
  return (
    <Card>
      <CardTitle className="text-center text-3xl uppercase text-primary">
        Cart
      </CardTitle>
      <CardContent className="grid gap-5  xl:grid-cols-4 md:grid-cols-2">
        <CartProducts
          isLoading={isLoading}
          isError={isError}
          error={error}
          products={products as Product[]}
        />
      </CardContent>
    </Card>
  );
};
