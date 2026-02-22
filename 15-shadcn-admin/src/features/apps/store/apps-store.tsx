import { create } from "zustand";
import type { AppData, ConnectionFilter, Sort } from "../types";
import { appsData } from "../data/apps-data";

type AppsStoreState = {
  data: AppData[];
  mainData: AppData[];
  sort: Sort;
  setSort: (value: Sort) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  connectionFilter: ConnectionFilter;
  setConnectionFilter: (value: ConnectionFilter) => void;
};

type NewValues = Partial<{
  sort: Sort;
  searchTerm: string;
  connectionFilter: ConnectionFilter;
}>;

function appsOperation(state: AppsStoreState, newValues: NewValues) {
  const sort = newValues.sort ?? state.sort;
  const searchTerm = newValues.searchTerm ?? state.searchTerm;
  const connectionFilter = newValues.connectionFilter ?? state.connectionFilter;

  const newData = [...state.mainData];

  return newData
    .filter((item) =>
      connectionFilter === "all-apps"
        ? true
        : connectionFilter === "connected"
          ? item.isConnected
          : !item.isConnected,
    )
    .filter((item) => item.title.toLocaleLowerCase().includes(searchTerm))
    .sort((a, b) =>
      sort === "ascending"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title),
    );
}
export const useAppsStore = create<AppsStoreState>((set) => ({
  data: appsData,
  mainData: appsData,
  sort: "ascending",
  searchTerm: "",
  connectionFilter: "all-apps",
  setSort: (value) => {
    set((state) => ({
      sort: value,
      data: appsOperation(state, { sort: value }),
    }));
  },
  setSearchTerm: (value) => {
    set((state) => ({
      searchTerm: value,
      data: appsOperation(state, { searchTerm: value }),
    }));
  },
  setConnectionFilter: (value) => {
    set((state) => ({
      connectionFilter: value,
      data: appsOperation(state, { connectionFilter: value }),
    }));
  },
}));

export const selectAppsData = (s: AppsStoreState) => s.data;
export const selectSort = (s: AppsStoreState) => s.sort;
export const selectSetSort = (s: AppsStoreState) => s.setSort;
export const selectSearchTerm = (s: AppsStoreState) => s.searchTerm;
export const selectSetSearchTerm = (s: AppsStoreState) => s.setSearchTerm;
export const selectConnectionFilter = (s: AppsStoreState) => s.connectionFilter;
export const selectSetConnectionFilter = (s: AppsStoreState) =>
  s.setConnectionFilter;
