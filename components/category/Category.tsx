"use client";

import Image from "next/image";
import { useStore } from "store/store";

const Category = () => {
  const { categories } = useStore();
  return (
    <div className="py-6 max-w-screen-xl m-auto">
      <h5 className="uppercase text-center text-2xl mb-3 mt-5">
        bạn đang tìm kiếm
      </h5>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-7 bg-white p-4 md:p-7 rounded ">
        {categories
          .filter((item) => !item.parentId)
          .map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 flex flex-col justify-center items-center p-3 rounded-md hover:bg-cyan-900 hover:text-white cursor-pointer"
            >
              <Image
                src={item.imageUrl}
                width={43}
                height={42}
                alt="áo khoác"
              />
              <div className="uppercase mt-3 text-base">{item.name}</div>
              <div className="flex flex-row flex-wrap justify-center mt-2 capitalize">
                <div className="text-center text-sm">{item.description}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
