import useGetProducts from "@/features/product/pages/hooks/use-get-products";
import ProductItem from "../molecules/ProductItem";

export default function ProductList() {
  const { data: products, isLoading, isError, error } = useGetProducts();

  if (isLoading)
    return <h1 className="text-center text-2xl font-bold">Loading...</h1>;
  if (isError)
    return <h1 className="text-center text-2xl font-bold">{error?.message}</h1>;
  if (products?.length === 0)
    return (
      <h1 className="text-center text-2xl font-bold">
        There is no product available
      </h1>
    );
  return (
    <>
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );
}
