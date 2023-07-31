"use client";

import { useStore } from "@/store/store";
import { Category } from "@/store/type";
import { useEffect, useState } from "react";

const SubCategoryMobile = () => {
  const { subCategories } = useStore();

  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    if (subCategories) setCategories(subCategories);
  }, [subCategories]);

  return (
    <div className="overflow-auto text-gray-500 flex md:hidden whitespace-nowrap w-screen capitalize mb-3">
      {categories &&
        categories.map((item) => (
          <div key={item.id} className="p-3">
            {item.name}
          </div>
        ))}
    </div>
  );
};

export default SubCategoryMobile;
