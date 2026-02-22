import type User from '@/types/user';
import { create } from 'zustand';
import { persist } from "zustand/middleware";

// type User = {
//     id: number,
//     username: string,
//     email: string,
//     firstName: string,
//     lastName: string,
//     gender: 'male' | 'female',
//     birthDate: string,
//     maritalStatus: 'single' | 'married',
//     phone: string,
//     role: 'admin' | 'user'
// }
type UserStoreState = {
    user: User | null,
    isLogged: boolean,
    login: (data: User) => void;
    logout: () => void;

}

export const useUserStore = create<UserStoreState>()(
    persist(
        (set) => ({
            user: null,
            isLogged: false,
            login(data) {
                set({ user: data, isLogged: true })
            },
            logout() {
                set({ user: null, isLogged: false })
            },
        }),
        {
            name: 'user'
        }
    )
)

export const selectUser = (s: any) => s.user;
export const selectIsLogged = (s: any) => s.isLogged;
export const selectLogin = (s: any) => s.login;
export const selectLogout = (s: any) => s.logout;