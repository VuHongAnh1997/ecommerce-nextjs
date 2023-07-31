"use client";

import BreadScrumb from "@/components/breadscrumb/BreadScrumb";
import ProductColor from "@/components/product-detail/ProductColor";
import ProductCount from "@/components/product-detail/ProductCount";
import ProductImageSlide from "@/components/product-detail/ProductImageSlide";
import ProductSize from "@/components/product-detail/ProductSize";
import { useStore } from "@/store/store";
import { CartItem, Size } from "@/store/type";
import { formatCurrency } from "@/utils/formatCurrency";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./loading";

const ProductDetail = () => {
  const { productSelected, cart, updateCart } = useStore();
  const router = useRouter();
  const [productSize, setProductSize] = useState<Size>();
  const [productColor, setProductColor] = useState(productSelected?.colors[0]);
  const [productCount, setProductCount] = useState<number>(0);

  const onClickBuyNow = () => {
    if (!productSize) {
      toast("Vui lòng chọn kích cỡ", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
        theme: "colored",
      });
    } else if (!productCount) {
      toast("Vui lòng chọn số lượng", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
        theme: "colored",
      });
    } else {
      let itemIndex: number = -1;

      if (cart && cart.length > 0)
        itemIndex = cart.findIndex(
          (item) =>
            item?.colorSelected?.colorId === productColor?.colorId &&
            item?.sizeSelected?.sizeId === productSize.sizeId &&
            item.product?.id === productSelected?.id
        );

      if (itemIndex >= 0) {
        cart[itemIndex] = {
          ...cart[itemIndex],
          amount: cart[itemIndex].amount + productCount,
          totalPrice:
            (cart[itemIndex].amount + productCount) *
            (productSelected?.price || 1),
        };
        updateCart(cart);
      } else {
        const item: CartItem = {
          product: productSelected || undefined,
          colorSelected: productColor,
          sizeSelected: productSize,
          amount: productCount,
          totalPrice: (productSelected?.price || 1) * productCount,
        };
        updateCart([...cart, item]);
      }
      router.push("/cart");
    }
  };

  return (
    <section className="product-detail-container max-w-[1200px] pt-3 m-auto">
      <Suspense fallback={<Loading />}>
        <BreadScrumb />

        <div className="block md:flex">
          <ProductImageSlide />
          <div className="px-5 mb-3">
            <div className="flex">
              <div className="bg-orange-200 px-3 py-1.5 text-xs text-orange-500 rounded-lg mr-5">
                #Bán chạy
              </div>
              <div className="bg-cyan-200 text-cyan-500 px-3 py-1.5 text-xs rounded-lg">
                Đã bán: 0
              </div>
            </div>
            <div className="uppercase text-2xl mt-2">
              {productSelected?.name}
            </div>
            <div className="text-2xl mt-2">
              {formatCurrency(productSelected?.price || 0)}
            </div>

            <form>
              <ProductColor
                productColor={productColor}
                setProductColor={setProductColor}
              />

              <ProductSize
                sizeActive={productSize}
                setSizeActive={setProductSize}
              />

              <ProductCount
                productCount={productCount}
                setProductCount={setProductCount}
              />

              <div className="flex mt-4 cursor-pointer">
                <div
                  onClick={onClickBuyNow}
                  className="flex justify-center items-center w-56 h-12 text-white bg-green-600 mr-4"
                >
                  <div>Mua ngay</div>
                </div>
                <div className="flex justify-center items-center w-56 h-12 text-white text-center bg-gray-500">
                  Thêm vào giỏ hàng
                </div>
              </div>
            </form>
          </div>
        </div>

        <ToastContainer autoClose={2000} closeOnClick={true} />
      </Suspense>
    </section>
  );
};

export default ProductDetail;
