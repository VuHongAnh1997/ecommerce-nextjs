"use client";

import { useStore } from "@/store/store";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

export default function SExample() {
  const { productPaging, categorySelected, fetchProducts } = useStore();

  const onClickCondition = (key: string, close: Function) => {
    fetchProductsByCondition(key);
    close();
  };

  const fetchProductsByCondition = (key: string) => {
    switch (key) {
      case "PRICE_DESC": {
        fetchProducts({
          size: 10,
          page: 0,
          sortByList: "price",
          sortOrderList: "desc",
          categoryId: categorySelected?.id,
        });
        break;
      }

      case "PRICE_ASC": {
        fetchProducts({
          size: 10,
          page: 0,
          sortByList: "price",
          sortOrderList: "asc",
          categoryId: categorySelected?.id,
        });
        break;
      }

      case "NEWEST": {
        fetchProducts({
          size: 10,
          page: 0,
          sortByList: "createdAt",
          sortOrderList: "desc",
          categoryId: categorySelected?.id,
        });
        break;
      }

      default:
        break;
    }
  };

  return (
    <div className="p-3">
      <div className="flex p-3">
        <div className="capitalize">{categorySelected?.name}</div>
        <div>
          /Trang {productPaging.currentPage + 1} -{" "}
          {productPaging.products?.length} sản phẩm
        </div>
      </div>
      <Popover className="relative z-10">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-green-500 uppercase hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>Sắp xếp theo</span>
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-green-500 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel>
                <div className="p-3 bg-white shadow-md w-fit cursor-pointer absolute">
                  <div className="p-3">Bán chạy nhất</div>
                  <div
                    className="p-3"
                    onClick={() => onClickCondition("NEWEST", close)}
                  >
                    Mới nhất
                  </div>
                  <div
                    className="p-3"
                    onClick={() => onClickCondition("PRICE_DESC", close)}
                  >
                    Giá: Cao - Thấp
                  </div>
                  <div
                    className="p-3"
                    onClick={() => onClickCondition("PRICE_ASC", close)}
                  >
                    {" "}
                    Giá: Thấp - Cao
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
