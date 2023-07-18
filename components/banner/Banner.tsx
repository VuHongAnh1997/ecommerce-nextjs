"use client";

import Image from "next/image";
import banner1 from "public/images/banner1.png";
import banner2 from "public/images/banner2.png";
import banner3 from "public/images/banner3.png";
import banner4 from "public/images/banner4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Banner = () => {
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
    <div className="m-auto w-full">
      <Swiper breakpoints={breakpoints} className="mw-full">
        <SwiperSlide>
          <Image src={banner1} alt="Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} alt="Banner 2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3} alt="Banner 3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner4} alt="Banner 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
