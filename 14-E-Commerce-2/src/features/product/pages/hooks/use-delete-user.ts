import usersApi from "@/services/users-api";
import type User from "@/types/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteUser() {
    const queryClient = useQueryClient();
    return useMutation<void, Error, string>({
        mutationFn: (id) => usersApi.delete(`/${id}`),
        onSuccess(data) {
            queryClient.invalidateQueries({ queryKey: ['users'] })
        }
    })
}