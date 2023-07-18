import { create } from "zustand";
import { Action, AppState } from "./type";

export const useStore = create<AppState & Action>((set) => ({
  categories: [],
  categorySelected: null,
  updateCategories: (categories) => set(() => ({ categories: categories })),
  updateCategorySelected: (category) =>
    set(() => ({ categorySelected: category })),
}));
