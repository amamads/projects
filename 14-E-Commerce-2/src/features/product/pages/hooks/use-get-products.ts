import productsApi from "@/services/products";
import type Product from "@/types/product";
import { useQuery } from "@tanstack/react-query";

export default function useGetProducts() {
    return useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: async () => (await productsApi.get('')).data,
        staleTime: 5000
    })
}