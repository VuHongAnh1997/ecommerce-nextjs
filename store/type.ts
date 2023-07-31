export type Category = {
  id: number;
  name: string;
  imageUrl: string;
  parentId: number | null;
  description: string;
  level: number;
  children: Category[];
};

export type Color = {
  colorId: number;
  colorName: string;
  imageUrl: string;
};

export type Size = {
  sizeId: number;
  sizeName: string;
};

export type Product = {
  id: number;
  name: string;
  category: Category;
  colors: Color[];
  // color
  sizes: Size[];
  price: number;
  discount: number;
  imageUrl: string;
  description: string;
  stockQuantity: number;
  createdAt: Date;
  updatedAt: Date;
  isFeatured: boolean;
};

export type ProductPaging = {
  products: Product[];
  currentPage: number;
  totalItems: number;
  totalPages: number;
};

export type CartItem = {
  product?: Product;
  colorSelected?: Color;
  sizeSelected?: Size;
  amount: number;
  totalPrice: number;
};

export type AppState = {
  categories: Category[];
  categorySelected: Category | null;
  parentCategorySelected: Category | null;
  subCategories?: Category[];
  breadScrumb: String[];
  productPaging: ProductPaging;
  productSelected: Product | null;
  cart: CartItem[];
};

export type Action = {
  updateCategories: (categories: AppState["categories"]) => void;
  updateCategorySelected: (category: AppState["categorySelected"]) => void;
  updateParentCategorySelected: (
    parentCategory: AppState["parentCategorySelected"]
  ) => void;
  updateSubCategories: (subCategories: AppState["subCategories"]) => void;
  updateBreadScrumb: (breadScrumb: AppState["breadScrumb"]) => void;
  fetchProducts: (params: Record<string, any>) => Promise<void>;
  updateProductSelected: (productSelected: AppState["productSelected"]) => void;
  updateCart: (cart: AppState["cart"]) => void;
};

export type Option = {
  value: number;
  label: string;
  imageUrl: string;
};

export type CustomSelectProps = {
  options: Option[];
  onChange: (value: string) => void;
};
