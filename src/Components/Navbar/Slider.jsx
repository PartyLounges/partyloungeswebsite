import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay CSS

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

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
  ];

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800} // Controls the smoothness of the slide transition
        className="w-full h-[90vh] md:h-[85vh] lg:h-[85vh] pb-40"
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
              <motion.h2
                className="text-white text-lg md:text-2xl lg:text-4xl font-bold px-4 text-center"
                initial={{ opacity: 0, y: 50 }} // Starting animation state
                animate={{ opacity: 1, y: 0 }} // Ending animation state
                transition={{
                  duration: 1, // Animation duration
                  delay: 0.5, // Delay before animation starts
                  ease: "easeOut", // Smooth easing
                }}
              >
                {slide.text}
              </motion.h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
