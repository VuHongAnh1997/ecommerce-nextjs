import { TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

type ProductCartProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ProductCart: React.FC<ProductCartProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const closeModal = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-screen h-screen">
        <div className="p-4">
          <h2 className="text-xl font-semibold">Giỏ hàng của bạn</h2>
          <p className="mt-2 text-gray-500">2 sản phẩm</p>
        </div>

        <div className="product-list">
          <div className="border-t border-gray-300 p-3">
            <div className="flex">
              <div className="border border-gray-300 p-1.5 rounded mr-3">
                <Image
                  src="https://pos.nvncdn.net/d0f3ca-7136/ps/20230606_iZ4xi7FXLC.jpeg"
                  width={65}
                  height={65}
                  alt=""
                />
              </div>
              <div>
                <div className="uppercase">
                  Áo sơ mi nam - totoday - appreciation
                </div>
                <div className="flex">
                  <div className="mr-3">315000</div>
                  <TrashIcon className="h-5 w-5 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end p-4">
          <button
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
