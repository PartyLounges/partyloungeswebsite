import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import catalogData from "../../data/CatalogueData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons

const MyCatalogue = () => {
  const swiperRef = useRef(null); // Swiper reference for manual control
  const [activeCatalogue, setActiveCatalogue] = useState(catalogData[0].catalogue_name); // Track active slide

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: index * 0.2 },
    }),
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Dynamic Section Title */}
      <motion.h2
        className="text-center text-24 font-bold tablet:text-32 desktop:text-40 text-black font-red-hat-display mb-10"
        variants={textVariants}
      >
        Our Event Furniture Collection: {activeCatalogue}
      </motion.h2>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        allowTouchMove={false}
        className="w-full"
        onSlideChange={(swiper) => setActiveCatalogue(catalogData[swiper.realIndex].catalogue_name)} // Update title
      >
        {catalogData.map((catalogue, catIndex) => (
          <SwiperSlide key={catIndex} className="w-full">
            <motion.div className="mb-16">

              {/* Featured Image */}
              <motion.div
                className="mb-6 flex justify-center"
                variants={imageVariants}
                custom={0}
              >
                <img
                  src={catalogue.main_image}
                  alt={catalogue.catalogue_name}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {catalogue.other_images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="w-full h-48 md:h-64 overflow-hidden rounded-lg shadow-md"
                    variants={imageVariants}
                    custom={index + 1}
                    initial="hidden"
                    animate="visible"
                  >
                    <img
                      src={image}
                      alt={`Catalogue ${catalogue.catalogue_name} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons Below the Catalog */}
      <div className="flex justify-center gap-6 mt-6">
        <button
          className="bg-theme-brown font-red-hat-display px-4 py-2 text-white rounded shadow-md border border-theme-brown 
               hover:bg-white hover:text-theme-brown focus:ring-2 focus:ring-offset-2 focus:ring-theme-brown transition-colors duration-200 
               flex items-center gap-2"
            onClick={() => swiperRef.current?.slidePrev()} // Move left
        >
          <FaArrowLeft /> Previous
        </button>
        <button
          className="bg-theme-brown font-red-hat-display px-4 py-2 text-white rounded shadow-md border border-theme-brown 
               hover:bg-white hover:text-theme-brown focus:ring-2 focus:ring-offset-2 focus:ring-theme-brown transition-colors duration-200 
               flex items-center gap-2"
            onClick={() => swiperRef.current?.slideNext()} // Move right
          >
            Next <FaArrowRight />
        </button>
      </div>

    </div>
  );
};

export default MyCatalogue;
