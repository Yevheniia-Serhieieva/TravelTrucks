import { getCatalog, Truck } from "@/lib/api";
import { create } from "zustand";

type Filters = {
  location?: string;
  form?: string;
  AC?: boolean;
  kitchen?: boolean;
};

type CatalogState = {
  items: Truck[];
  page: number;
  filters: Filters;
  isLoading: boolean;

  setFilter: (filters: Filters) => void;
  fetchInitial: () => Promise<void>;
  loadMore: () => Promise<void>;
  reset: () => void;
};

export const useCatalogStore = create<CatalogState>((set, get) => ({
  items: [],
  page: 1,
  filters: {},
  isLoading: false,

  setFilter: (filters) => {
    set({ filters, items: [], page: 1 });
  },

  fetchInitial: async () => {
    set({ isLoading: true });
    const { page, filters } = get();
    const res = await getCatalog({ page, limit: 4, ...filters });
    set({ items: res.items, isLoading: false });
  },

  loadMore: async () => {
    const { page, filters, items } = get();
    const nextPage = page + 1;

    const res = await getCatalog({
      page: nextPage,
      limit: 4,
      ...filters,
    });

    set({
      items: [...items, ...res.items],
      page: nextPage,
    });
  },

  reset: () => set({ items: [], page: 1 }),
}));
