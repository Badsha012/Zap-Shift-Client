import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; 

// Swiper Modules
import { Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <Swiper
      slidesPerView={1.2}
      centeredSlides={true}
      spaceBetween={20}
      grabCursor={true}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/6RNvtQBc/banner1.png"
          alt="Banner 1"
          className="w-full h-auto rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/Xrzg8xP3/banner2.png"
          alt="Banner 2"
          className="w-full h-auto rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/qLLzQN2P/banner3.png"
          alt="Banner 3"
          className="w-full h-auto rounded-xl"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
