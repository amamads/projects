import { create } from 'zustand';
import { persist } from "zustand/middleware";

export type CartStoreItem = { id: number, qty: number };

type asd = Omit<CartStoreItem, 'qty'>
type CartStoreState = {
    items: CartStoreItem[],
    totalPrice: number,
    addItem: (id: number) => void,
    removeItem: (id: number) => void,
    increaseQty: (id: number) => void,
    decreaseQty: (id: number) => void,
    cleareCart: () => void,
}

export const useCartStore = create<CartStoreState>()(
    persist(
        (set, get) => ({
            items: [],
            totalPrice: 0,
            addItem(id) {
                set(state => ({ items: [...state.items as CartStoreItem[], { id, qty: 1 }] }))
                // set(state => ({ items: [...state.items as CartStoreItem[], data] }))
                // console.log(id);
            },
            removeItem(id) {
                set(state => ({ items: state.items?.filter(item => item.id !== id) }))
            },
            increaseQty(id) {
                set(state => ({
                    items: state.items?.map(item => (
                        item.id === id
                            ? { id, qty: item.qty + 1 }
                            : item
                    ))
                }))
            },
            decreaseQty(id) {
                set(state => ({
                    items: state.items
                        ?.map(item => (
                            item.id === id
                                ? { id, qty: item.qty - 1 }
                                : item
                        ))
                        .filter(item => item.qty > 0)
                }))
            },
            cleareCart() {
                set({ items: [] })
            }
        }),
        {
            name: 'cart',
        }
    )
);
export const selectItems = (s: any) => s.items
export const selectTotalPrice = (s: any) => s.totalPrice
export const selectAddItem = (s: any) => s.addItem
export const selectRemoveItem = (s: any) => s.removeItem
export const selectIncreaseQty = (s: any) => s.increaseQty
export const selectDecreaseQty = (s: any) => s.decreaseQty
export const selectCleareCart = (s: any) => s.cleareCart