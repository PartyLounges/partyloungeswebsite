import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: "/assets/images/Home/lastingconnections.jpeg",
      title: "Creating Lasting",
      highlight: "Connections",
      description: "Exhibitions & Conferences -",
      link: "/about",
    },
    {
      image: "/assets/images/Home/discovercatalogues.jpeg",
      title: "Discover Our",
      highlight: "Catalogues",
      description: "Explore our diverse range of premium lounge setups -",
      link: "/catalogues",
    },
    {
      image: "/assets/images/Home/galleryshowcase.jpg",
      title: "Capturing Moments",
      highlight: "Gallery Showcase",
      description: "View stunning event lounge designs and decor inspirations -",
      link: "/gallery",
    },
  ];

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1200}
        effect="fade"
        className="w-full h-[100vh] md:h-[100vh] lg:h-[100vh] pb-40"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="absolute inset-0 w-full h-full">
              {/* Blurred background image */}
              <img
                src={slide.image}
                alt={slide.highlight}
                className="w-full h-full object-cover blur-md"
              />
            </div>
            {activeIndex === index && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/40">
                <motion.h2
                  className="text-white text-24 tablet:text-32 desktop:text-40 font-proximanova-bold py-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  {slide.title} <br />
                  <span className="text-white text-40 font-bold tablet:text-48 desktop:text-56 font-proximanova-bold">
                    {slide.highlight}
                  </span>
                </motion.h2>
                <motion.div
                  className="text-white text-24 tablet:text-32 desktop:text-40 font-proximanova-bold mt-2 max-w-[90%] md:max-w-[80%] lg:max-w-[80%] mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <span>{slide.description} </span>
                  <Link
                    to={slide.link}
                    className="text-white text-18 tablet:text-24 desktop:text-32 font-proximanova-bold underline font-semibold hover:text-gray-300"
                    aria-label={`Learn more about ${slide.highlight}`}
                  >
                    Learn More →
                  </Link>
                </motion.div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
