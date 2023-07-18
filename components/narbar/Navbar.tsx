"use client";

import useCategories from "@/hooks/useCategories";
import { useStore } from "@/store/store";
import { Category } from "@/store/type";
import { ICONS } from "@/utils/constant";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const MENU_ITEMS = [
  { url: "/new-arrivals", name: "New Arrivals" },
  { url: "/special-deal", name: "Special Deal" },
  { url: "/products", name: "Sản phẩm" },
  { url: "collections", name: "Bộ sưu tập" },
  { url: "feedback", name: "Feedback" },
];

const Navbar: React.FC = () => {
  const { updateCategorySelected } = useStore();
  const router = useRouter();
  const pathname = usePathname();

  const categoriesState = useCategories();
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const [enableCategories, setEnableCategories] = useState(false);

  const onClickSelectCategory = (category: Category) => {
    updateCategorySelected(category);
    router.push(`/products/${category.id}`);
  };

  return (
    <nav className="flex md:text-white uppercase grow items-center absolute md:static left-0 top-20 bg-white md:bg-transparent text-black w-screen md:w-fit overflow-auto md:overflow-visible p-3 md:p-0">
      {MENU_ITEMS.map((item, index) => {
        if (item.url !== "/products") {
          return (
            <div key={index} className="w-fit">
              <Link
                href={item.url}
                className={`hover:text-green-500 px-2.5 whitespace-nowrap ${
                  pathname.includes(item.url)
                    ? "text-green-900 decoration-green-500 underline"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => setEnableCategories(true)}
            >
              <div
                className={`hover:text-green-500 px-2.5 whitespace-nowrap ${
                  pathname.includes(item.url)
                    ? "text-green-900 decoration-green-500 underline"
                    : ""
                }`}
              >
                sản phẩm
              </div>
              {enableCategories && (
                <div className="absolute left-0 right-0 hidden md:flex items-center justify-center">
                  <div
                    className="flex bg-white z-10 w-fit mt-7"
                    onMouseLeave={() => setEnableCategories(false)}
                  >
                    <div className="root-category">
                      {categoriesState.map(
                        (item, index) =>
                          ICONS[index] && (
                            <div
                              key={item.id}
                              className="items flex items-center w-max px-7 py-4 border border-slate-200"
                              onMouseEnter={() => setActiveMenuIndex(index)}
                              onClick={() => onClickSelectCategory(item)}
                            >
                              <Image
                                src={ICONS[index]}
                                width={25}
                                height={25}
                                alt="icon"
                              />
                              <div className="text-black ml-4 mr-14 whitespace-no-wrap w-20">
                                {item.name}
                              </div>
                              <ChevronRightIcon className="h-4 w-5 text-gray-500" />
                            </div>
                          )
                      )}
                    </div>
                    <div className="sub-category grid grid-cols-3 gap-4 text-black capitalize w-max px-3">
                      {categoriesState[activeMenuIndex] &&
                        categoriesState[activeMenuIndex].children
                          .sort(
                            (menu1, menu2) =>
                              menu2.children.length - menu1.children.length
                          )
                          .map((itemLevel2) => (
                            <div key={itemLevel2.id} className="w-fit-content">
                              <div
                                className="p-2 text-emerald-500"
                                onClick={() =>
                                  onClickSelectCategory(itemLevel2)
                                }
                              >
                                {itemLevel2.name}
                              </div>
                              {itemLevel2.children.map((itemLevel3) => (
                                <div
                                  key={itemLevel3.id}
                                  className="px-2 py-1"
                                  onClick={() =>
                                    onClickSelectCategory(itemLevel3)
                                  }
                                >
                                  {itemLevel3.name}
                                </div>
                              ))}
                            </div>
                          ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }
      })}
    </nav>
  );
};

export default Navbar;
