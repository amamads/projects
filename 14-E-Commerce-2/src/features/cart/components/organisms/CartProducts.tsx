import CartProduct from "../molecules/CartProduct";
import type Product from "@/types/product";

export default function CartProducts({
  isLoading,
  isError,
  products,
  error,
}: {
  isLoading: boolean;
  isError: boolean;
  products: Product[];
  error: Error | null;
}) {
  if (isLoading)
    return <h1 className="text-center text-2xl font-bold">Loading...</h1>;
  if (isError)
    return <h1 className="text-center text-2xl font-bold">{error?.message}</h1>;
  if (products?.length === 0)
    return <h1 className="text-center text-2xl font-bold">Cart is empty</h1>;
  return (
    <>
      {products?.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </>
  );
}