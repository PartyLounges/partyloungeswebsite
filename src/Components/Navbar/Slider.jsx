import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper modules
import { Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1606422315127-d6406a336564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D",
      text: "Where Elegance Meets",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1682259920062-d30783ac0375?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D",
      text: "Comfort for Every Occasion.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1606422315116-2c1b86cbf071?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Lighting to Set the Mood",
    },
    {
      image:
        "https://images.unsplash.com/photo-1606422315127-d6406a336564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D",
      text: "Where Elegance Meets",
    },
  ];

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="w-full h-[65vh] md:h-[80vh] pb-20" // Padding Bottom directly on the Swiper
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Image */}
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            {/* Text Content */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <h2 className="text-white text-lg md:text-2xl font-bold px-4 text-center">
                {slide.text}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
