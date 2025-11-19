import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Rasel Ahmed",
    role: "CTO",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Nasir Uddin",
    role: "CEO",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    text: "A posture corrector helps reduce back strain and increases overall comfort, allowing you to stay more productive throughout the day.",
    name: "Tamim Khan",
    role: "Product Manager",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    text: "Using a posture corrector regularly improves spine alignment, reduces pain, and enhances your everyday lifestyle effortlessly.",
    name: "Mehnaz Rahman",
    role: "UX Researcher",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "It gently trains your muscles and spine to return to their natural alignment, helping you maintain a healthier posture.",
    name: "Samiul Islam",
    role: "Software Engineer",
    img: "https://randomuser.me/api/portraits/men/28.jpg",
  },
];

const CustomerTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="text-center mb-12">
        <img
          src="https://i.ibb.co.com/6cZx9L7p/customer-top.png"
          alt=""
          className="w-40 mx-auto mb-4"
        />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What our customers are saying
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="pb-12"
      >
        {testimonials.map((review, index) => (
          <SwiperSlide key={index}>
            <div
              className={`
                transition-all duration-500 p-8 rounded-2xl shadow-lg bg-white 
                ${activeIndex === index
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-40 scale-90 translate-y-6"
                }
              `}
            >
              <div className="text-4xl text-gray-400">“</div>
              <p className="text-gray-600 leading-relaxed mt-3">{review.text}</p>

              <div className="flex items-center gap-4 border-t mt-6 pt-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-14 h-14 rounded-full border object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button className="prev-btn w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
          ←
        </button>

        <button className="next-btn w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600">
          →
        </button>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
