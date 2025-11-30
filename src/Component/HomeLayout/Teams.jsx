import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// Autoplay module
import { Autoplay } from "swiper/modules";

const Teams = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl text-center text-[#03373D] font-bold py-8">
        We've helped thousands of sales teams
      </h1>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img src="https://i.ibb.co.com/5XzWjS1b/casio.png" alt="Casio" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://i.ibb.co.com/NnKcJrzq/amazon.png" alt="Amazon" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://i.ibb.co.com/zh2zN7QG/moonstar.png" alt="Moonstar" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://i.ibb.co.com/BHfCb3bS/star.png" alt="Star" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://i.ibb.co.com/DPjnfb73/start-people.png" alt="Start People" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://i.ibb.co.com/pm3vvcr/randstad.png" alt="Randstad" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Teams;
