import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { Action, AppState } from "./type";

type MyPersist = (
  config: StateCreator<AppState & Action>,
  options: PersistOptions<AppState & Action>
) => StateCreator<AppState & Action>;

export const useStore = create<AppState & Action, []>(
  (persist as MyPersist)(
    (set): AppState & Action => ({
      categories: [],
      subCategories: [],
      categorySelected: null,
      parentCategorySelected: null,
      breadScrumb: [],
      productPaging: {
        products: [],
        totalItems: 0,
        totalPages: 0,
        currentPage: 0,
      },
      productSelected: null,
      cart: [],
      updateCategories: (categories) => set(() => ({ categories: categories })),
      updateBreadScrumb: (breadScrumb) =>
        set(() => ({ breadScrumb: breadScrumb })),
      updateCategorySelected: (category) =>
        set(() => ({ categorySelected: category })),
      updateParentCategorySelected: (parentCategory) =>
        set(() => ({ parentCategorySelected: parentCategory })),
      updateSubCategories: (subCategories) =>
        set(() => ({ subCategories: subCategories })),
      updateProductSelected: (productSelected) =>
        set(() => ({ productSelected: productSelected })),
      updateCart: (cart) => set(() => ({ cart: cart })),
      fetchProducts: async (params) => {
        try {
          // Convert the params object into a query string
          const queryString = Object.entries(params)
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join("&");

          const response = await fetch(
            `/api/products/category?${queryString}`,
            { method: "GET", cache: "no-cache" }
          );
          const data = await response.json();
          set({ productPaging: data });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },
    }),
    {
      name: "ecommerce-state",
    }
  )
);
