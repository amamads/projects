import { create } from "zustand";
import type { Chat } from "../types";
import conversationsJSON from "../data/canv.json";
const conversations: Chat[] = conversationsJSON.conversations;

type ChatsStoreState = {
  data: Chat[];
  mainData: Chat[];
  selectTab: string;
  searchTerm: string;
  openNewMessageDialog:boolean,
  setSelectTab: (tabValue: string) => void;
  setSearchTerm: (value: string) => void;
  setOpenNewMessageDialog:(value:boolean)=>void,
};
export const useChatsStore = create<ChatsStoreState>((set) => ({
  mainData: conversations,
  data: conversations,
  selectTab: "default",
  searchTerm: "",
  openNewMessageDialog:false,
  setSelectTab: (tabValue) => set({ selectTab: tabValue }),
  setSearchTerm: (value) => {
    set((state) => ({
      searchTerm: value,
      data: [...state.mainData].filter((chat) =>
        chat.fullName.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
      ),
    }));
  },
  setOpenNewMessageDialog:(value)=>set({openNewMessageDialog:value})
}));

export const selectChatsData = (s: ChatsStoreState) => s.data;
export const selectSelectTab = (s: ChatsStoreState) => s.selectTab;
export const selectSetSelectTab = (s: ChatsStoreState) => s.setSelectTab;
export const selectSearchTerm = (s: ChatsStoreState) => s.searchTerm;
export const selectSetSearchTerm = (s: ChatsStoreState) => s.setSearchTerm;
export const selectOpenNewMessageDialog = (s: ChatsStoreState) => s.openNewMessageDialog;
export const selectSetOpenNewMessageDialog = (s: ChatsStoreState) => s.setOpenNewMessageDialog;
