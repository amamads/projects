import usersApi from "@/services/users-api";
import type User from "@/types/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useAddUser() {
   const queryClient = useQueryClient();
   return useMutation<void, Error, User>({
      mutationFn: (data) => usersApi.post('', data),
      onSuccess(data) {
         queryClient.invalidateQueries({ queryKey: ['users'] })
         // console.log(data);
      }
   })
}