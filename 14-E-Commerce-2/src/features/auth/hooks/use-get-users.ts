import usersApi from "@/services/users-api";
import type User from "@/types/user";
import { useQuery } from "@tanstack/react-query";

export default function useGetUsers() {
    return useQuery<User[]>({
        queryKey: ['users'],
        queryFn: async () => (await usersApi.get('')).data,
        staleTime: 5000
    })
}