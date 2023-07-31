"use client";
import useGetFromStore from "@/hooks/useGetFromStore";
import { useStore } from "@/store/store";
import { Category } from "@/store/type";

const SubCategoryWeb = () => {
  const categories: Category[] = useGetFromStore(
    useStore,
    (state: any) => state.subCategories
  )!;
  return (
    <div className="md:flex text-black hidden capitalize">
      {categories &&
        categories.map((item) => (
          <div key={item.id} className="px-4 py-3 rounded-md shadow-md mr-3">
            {item.name}
          </div>
        ))}
    </div>
  );
};

export default SubCategoryWeb;
