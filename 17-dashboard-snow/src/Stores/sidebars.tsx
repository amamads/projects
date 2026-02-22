import { create } from "zustand";
import { persist } from "zustand/middleware";

type SidebarsStoreStates = {
  rSidebar: boolean;
  lSidebar: boolean;
  toggleRSidebar: () => void;
  setRSidebar: (value: boolean) => void;
  toggleLSidebar: () => void;
  setLSidebar: (value: boolean) => void;
};

export const useSidebarsStore = create<SidebarsStoreStates>((set) => ({
  rSidebar: false,
  lSidebar: false,
  toggleRSidebar: () => set((state) => ({ rSidebar: !state.rSidebar })),
  setRSidebar: (value) => set({ rSidebar: value }),
  toggleLSidebar: () => set((state) => ({ lSidebar: !state.lSidebar })),
  setLSidebar: (value) => set({ lSidebar: value }),
}));
// export const useSidebarsStore = create<SidebarsStoreStates>()(
//   persist(
//     (set) => ({
//       rSidebar: false,
//       lSidebar: false,
//       toggleRSidebar: () => set((state) => ({ rSidebar: !state.rSidebar })),
//       setRSidebar: (value) => set({ rSidebar: value }),
//       toggleLSidebar: () => set((state) => ({ lSidebar: !state.lSidebar })),
//       setLSidebar: (value) => set({ lSidebar: value }),
//     }),
//     {
//       name: "sidebar-state-store",
//     },
//   ),
// );
export const selectRSidebar = (state: SidebarsStoreStates) => state.rSidebar;
export const selectLSidebar = (state: SidebarsStoreStates) => state.lSidebar;
export const selectSetRSidebar = (state: SidebarsStoreStates) =>
  state.setRSidebar;
export const selectToggleRSidebar = (state: SidebarsStoreStates) =>
  state.toggleRSidebar;
export const selectSetLSidebar = (state: SidebarsStoreStates) =>
  state.setLSidebar;
export const selectToggleLSidebar = (state: SidebarsStoreStates) =>
  state.toggleLSidebar;
