import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Slider = () => {
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
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        speed={1200}
        effect="fade"
        className="w-full h-[100vh] md:h-[100vh] lg:h-[100vh] pb-40"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img src={slide.image} alt={slide.highlight} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center p-6">
              <motion.h2
                className="text-white text-lg md:text-2xl lg:text-4xl font-proximanova-bold py-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {slide.title} <br />
                <span className="text-white text-3xl md:text-5xl font-bold py-4">
                  {slide.highlight}
                </span>
              </motion.h2>
              <motion.div
                className="text-white text-sm md:text-lg mt-2 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span>{slide.description}</span>
                <Link
                  to={slide.link}
                  className="text-white text-sm md:text-lg underline font-semibold hover:text-gray-300"
                  aria-label={`Learn more about ${slide.highlight}`}
                >
                  Learn More →
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
