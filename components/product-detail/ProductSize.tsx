import { useStore } from "@/store/store";
import { Size } from "@/store/type";
import React from "react";

interface ProductSizeProps {
  sizeActive?: Size;
  setSizeActive: Function;
}

const ProductSize: React.FC<ProductSizeProps> = ({
  sizeActive,
  setSizeActive,
}) => {
  const { productSelected } = useStore();

  return (
    <div className="mt-3">
      <div className="flex">
        <div className="w-40">Kích cỡ</div>
        <div className="text-cyan-500 cursor-pointer">Gợi ý chọn size</div>
      </div>

      <div className="flex mt-3">
        {productSelected &&
          productSelected.sizes.map((item) => (
            <div
              key={item.sizeId}
              onClick={() => setSizeActive(item)}
              className={
                (sizeActive && sizeActive?.sizeId === item.sizeId
                  ? "bg-green-500 text-white "
                  : "bg-white text-gray-500 ") +
                "border px-2 py-1 mr-3 cursor-pointer w-12 text-center"
              }
            >
              {item.sizeName}
            </div>
          ))}
      </div>
    </div>
  );
};
export default ProductSize;
