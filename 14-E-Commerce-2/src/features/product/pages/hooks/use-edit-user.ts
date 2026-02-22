import usersApi from "@/services/users-api";
import type User from "@/types/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditUser() {
    const queryClient = useQueryClient();
    return useMutation<void, Error, { id: string, data: Partial<User> }>({
        mutationFn: ({ id, data }) => usersApi.patch(`/${id}`, data),
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['users'] })
        }
    })
}