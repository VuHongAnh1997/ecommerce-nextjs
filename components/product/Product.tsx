"use client";
import { useStore } from "@/store/store";
import { Product } from "@/store/type";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import { useRouter } from "next/navigation";
import addCartIcon from "public/images/add-cart.svg";
import React from "react";

interface ProducProps {
  product: Product;
}

const Product: React.FC<ProducProps> = ({ product }) => {
  const router = useRouter();
  const { categories, updateBreadScrumb, updateProductSelected } = useStore();

  const onClickProduct = () => {
    const category = product.category;
    const categoryLevel2 = categories.find(
      (item) => item.id === category.parentId
    );
    const categoryLevel1 = categories.find(
      (item) => item.id === categoryLevel2?.parentId
    );
    updateBreadScrumb([
      "Trang chủ",
      categoryLevel1?.name || "",
      categoryLevel2?.name || "",
      category.name,
    ]);
    updateProductSelected(product);
    router.push("/product-detail");
  };

  return (
    product && (
      <div className="p-2 shadow-md rounded-lg">
        <div
          style={{ width: "272px", height: "272px" }}
          className="overflow-hidden cursor-pointer m-auto"
        >
          <Image
            src={product.imageUrl}
            width={272}
            height={272}
            alt="áo khoác"
            className="object-cover transition transform duration-300 ease-in-out hover:scale-125 rounded-md"
            onClick={onClickProduct}
          />
        </div>
        {/* icon */}
        <div>
          <Image
            src="data:image/svg+xml;charset=utf-8,%3Csvg height='11.571428571428571' width='13.5' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
            width={14}
            height={12}
            alt="favorite-icon"
          />
        </div>
        {/* color image */}
        <div className="hidden">
          <Image
            src="https://pos.nvncdn.net/d0f3ca-7136/ps/20230711_qn2GYJRl4B.jpeg"
            width={25}
            height={20}
            alt="desc-image"
          />
        </div>
        <div
          className="uppercase truncate text-center text-sm hover:text-green-500 cursor-pointer"
          onClick={onClickProduct}
        >
          {product.name}
        </div>
        <div className="flex justify-between items-center text-xs mt-2">
          <div>{formatCurrency(product.price)}</div>
          <button className="flex items-center rounded border-green-800 border p-1">
            <Image
              src={addCartIcon}
              width={11}
              height={12}
              alt="Add cart icon"
              className="mr-1"
            />
            <p>Thêm</p>
          </button>
        </div>
      </div>
    )
  );
};

export default Product;
