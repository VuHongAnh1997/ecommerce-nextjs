import { useStore } from "@/store/store";
import { Color } from "@/store/type";
import Image from "next/image";
import React from "react";

interface ProductColorProps {
  productColor?: Color;
  setProductColor: Function;
}

const ProductColor: React.FC<ProductColorProps> = ({
  productColor,
  setProductColor,
}) => {
  const { productSelected } = useStore();

  return (
    <div className="mt-2">
      <div>Màu sắc</div>
      <div className="flex mt-2">
        {productSelected &&
          productSelected.colors &&
          productSelected.colors.map((item: Color) => (
            <div
              key={item.colorId}
              onClick={() => setProductColor(item.colorId)}
            >
              <Image
                className={
                  (productColor?.colorId === item.colorId
                    ? "border-2 border-green-500 "
                    : "") + "mr-3 cursor-pointer"
                }
                src={item.imageUrl}
                width={45}
                height={45}
                alt="image-color"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductColor;
