import useGetProducts from "@/features/product/pages/hooks/use-get-products";
export default function useGetProductDetails(productId: number) {
  const { data: products, isLoading, isError, error } = useGetProducts();
  const id = Number(productId);
  const product = products?.find((product) => Number(product.id) === id);
  
  return ({ product, isLoading, error, isError });
}
