import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Banner = () => {
  return (
    <div className=" px-3   sm:mt-5">
      <Swiper spaceBetween={10}>
        {" "}
        <SwiperSlide>
          <img className="  banner_" src="banners/banner2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" banner_" src="banners/banner1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" banner_" src="banners/banner3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" banner_" src="banners/banner4.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
