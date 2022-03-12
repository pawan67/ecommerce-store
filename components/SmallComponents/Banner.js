import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";
import "swiper/css";
const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplaySpeed: 3000,
    autoplay: true,
  };
  return (
    <div className=" px-3 z-0   sm:mt-5">
      <Slider {...settings}>
        <div className=" px-2">
          <img className="   banner_" src="banners/banner2.jpg" alt="" />
        </div>
        <div className=" px-2">
          <img className=" banner_" src="banners/banner1.jpg" alt="" />
        </div>
        <div className=" px-2">
          <img className=" banner_" src="banners/banner3.jpg" alt="" />
        </div>
        <div className=" px-2">
          <img className=" banner_" src="banners/banner4.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
