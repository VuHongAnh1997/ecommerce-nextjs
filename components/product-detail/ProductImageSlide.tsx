import Image from "next/image";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation]);

const ProductImageSlide = () => {
  const breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  };

  return (
    <div className="max-w-[438px] mb-3">
      <Swiper
        breakpoints={breakpoints}
        className="mw-full"
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        <SwiperSlide>
          <Image
            src="https://pos.nvncdn.net/d0f3ca-7136/ps/20230606_NIkpAcmw.jpg"
            alt="Banner 1"
            width={438}
            height={438}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://pos.nvncdn.net/d0f3ca-7136/ps/20230606_bEM3kGBb.jpg"
            alt="Banner 2"
            width={438}
            height={438}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://pos.nvncdn.net/d0f3ca-7136/ps/20230606_29xGDvNz.jpg"
            alt="Banner 3"
            width={438}
            height={438}
          />
        </SwiperSlide>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default ProductImageSlide;
