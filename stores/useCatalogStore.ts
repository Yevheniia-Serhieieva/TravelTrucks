import { CategoryFilter, getCatalog, Truck } from "@/lib/api";
import { create } from "zustand";

type CatalogState = {
  items: Truck[];
  page: number;
  filters: CategoryFilter;
  isLoading: boolean;

  setFilter: (filters: CategoryFilter) => void;
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
    const { filters } = get();
    set({ isLoading: true });
    const res = await getCatalog({ page: 1, limit: 4, ...filters });

    set({
      items: res.items,
      page: 1,
      isLoading: false,
    });
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
