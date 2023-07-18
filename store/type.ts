export type Category = {
  id: number;
  name: string;
  imageUrl: string;
  parentId: number | null;
  description: string;
  level: number;
  children: Category[];
};

export type AppState = {
  categories: Category[];
  categorySelected: Category | null;
};

export type Action = {
  updateCategories: (categories: AppState["categories"]) => void;
  updateCategorySelected: (category: AppState["categorySelected"]) => void;
};
