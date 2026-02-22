import useGetProducts from "@/features/product/pages/hooks/use-get-products";
import {
  useCartStore,
  selectItems,
  type CartStoreItem,
} from "@/stores/cart-store";

export default function useGetCartProducts() {
  const cartItem = useCartStore(selectItems) as CartStoreItem[];

  const cartItemIds = cartItem.map((item) => item.id);
  const { data: productsDB, isLoading, isError, error } = useGetProducts();

  const products = productsDB?.filter((product) =>
    cartItemIds.some((id) => product.id === id)
  );

  return {
    products,
    isLoading,
    isError,
    error,
  };
}
