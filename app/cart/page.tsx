"use client";
import CustomSelect from "@/components/custom-select/CustomSelect";
import { useStore } from "@/store/store";
import { Option, Size } from "@/store/type";
import { formatCurrency } from "@/utils/formatCurrency";
import { ShoppingBagIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import Select from "react-select";

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const { cart } = useStore();
  const [colorsState, setColorsState] = useState<any>([]);
  const [sizesState, setSizesState] = useState<Size[]>([]);

  const convertColorsData = (colors: any): Option[] => {
    return colors.map((item: any) => ({
      value: item.colorId,
      label: item.colorName,
      imageUrl: item.imageUrl,
    }));
  };

  const convertSizesData = (sizes: any) => {
    return sizes.map((item: any) => ({
      value: item.sizeId,
      label: item.sizeName,
    }));
  };

  const onChangeColor = (e: any, index: any) => {
    const colorsStateAlt = colorsState.map((item: any, idx: number) => {
      if (index === idx) {
        return e;
      } else return item;
    });
    setColorsState(colorsStateAlt);
  };

  const onChangeSize = (e: any, index: any) => {
    const sizesStateAlt = sizesState.map((item: any, idx: number) => {
      if (index === idx) {
        return e;
      } else return item;
    });
    setSizesState(sizesStateAlt);
  };

  const getTotalPrice = (cart: any) => {
    const totalPrice = cart.reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + currentValue.totalPrice,
      0
    );
    return totalPrice;
  };

  useEffect(() => {
    const colors = cart.map((item) => item.colorSelected);
    if (colors) {
      setColorsState(convertColorsData(colors));
    }

    const sizes = cart.map((item) => item.sizeSelected);
    if (sizes) {
      setSizesState(convertSizesData(sizes));
    }
  }, [cart]);

  return (
    <section className="mt-4">
      <div className="flex">
        <ShoppingBagIcon className="h-6 w-6 text-gray-500" />
        <div className="ml-3">Hiện đang có 1 sản phẩm trong giỏ hàng</div>
      </div>

      <div className="flex flex-col">
        <table className="table-auto">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-3 font-medium">Sản phẩm</th>
              <th className="p-3 font-medium">Màu sắc</th>
              <th className="p-3 font-medium">Kích cỡ</th>
              <th className="p-3 font-medium">Số lượng</th>
              <th className="p-3 font-medium">Thành tiền</th>
            </tr>
          </thead>
          <tbody className="border-b border-gray-300">
            {cart &&
              cart.length > 0 &&
              cart.map((cartItem, index) => (
                <tr key={cartItem.product?.id}>
                  <td className="p-3">
                    <div className="flex items-center">
                      <div className="border rounded-md p-1 border-gray-300">
                        <Image
                          src={cartItem.product?.imageUrl || ""}
                          width={60}
                          height={60}
                          alt=""
                        />
                      </div>

                      <div className="ml-3">
                        <div className="uppercase mb-1">
                          {cartItem.product?.name}
                        </div>
                        <div className="flex items-center">
                          <div className="mr-3">
                            {cartItem &&
                              cartItem.product &&
                              cartItem.product.price &&
                              formatCurrency(cartItem.product?.price)}
                          </div>
                          <TrashIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    {cartItem &&
                      cartItem.product &&
                      cartItem.product.colors && (
                        <CustomSelect
                          onChange={(e: any) => onChangeColor(e, index)}
                          options={convertColorsData(cartItem.product?.colors)}
                          value={colorsState[index]}
                        />
                      )}
                  </td>
                  <td className="p-3">
                    <Select
                      options={convertSizesData(cartItem.product?.sizes)}
                      onChange={(e) => onChangeSize(e, index)}
                      value={sizesState[index]}
                    />
                  </td>
                  <td className="p-3 text-center">{cartItem.amount}</td>
                  <td className="p-3 text-center">{cartItem.totalPrice}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="flex mt-4 justify-between items-center">
          {cart && cart.length > 0 && (
            <div className="flex">
              <div className="mr-2 font-medium">Tổng cộng:</div>
              <div>{formatCurrency(getTotalPrice(cart))}</div>
            </div>
          )}
          <div className="flex items-center justify-center text-white bg-green-600 rounded w-56 h-10 cursor-pointer">
            <div>Đặt hàng</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
