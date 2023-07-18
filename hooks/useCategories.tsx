import { useStore } from "@/store/store";
import { Category } from "@/store/type";
import { useEffect, useState } from "react";

const CATEGORIES: Category[] = [];

const useCategories = (): Category[] => {
  const [categoriesState, setCategoriesState] = useState(CATEGORIES);
  const { categories } = useStore();

  useEffect(() => {
    const data: Category[] = [];

    for (let item of categories) {
      if (!item.parentId) data.push({ ...item, children: [] });
      else if (item.parentId && item.level === 2) {
        const element = data.find(
          (rootElement) => rootElement.id === item.parentId
        );
        if (element) element.children.push({ ...item, children: [] });
      } else {
        for (let menuLevel1 of data) {
          const menuLevel2Arr = menuLevel1.children;
          const element = menuLevel2Arr.find(
            (item2) => item2.id === item.parentId
          );
          if (element) element.children.push(item);
        }
      }
    }
    setCategoriesState(data);
  }, [categories]);

  return categoriesState;
};

export default useCategories;
