import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import catalogData from "../../data/CatalogueData";
import { FaArrowRight } from "react-icons/fa";

const CatalogShowcase = () => {
  const navigate = useNavigate();

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
      {/* Section Title */}
      <motion.h2
        className="text-center text-3xl md:text-4xl font-proximanova-bold text-gray-800 mb-10"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Our Event Furniture Collection
      </motion.h2>

      {/* Swiper Component */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {/* Show only first 3 catalogues */}
        {catalogData.slice(0, 3).map((catalogue, catIndex) => (
          <SwiperSlide key={catIndex} className="w-full">
            <motion.div className="mb-16">
              {/* Featured Image */}
              <motion.div
                className="mb-6 flex justify-center"
                variants={imageVariants}
                custom={0}
                initial="hidden"
                animate="visible"
              >
                <img
                  src={catalogue.main_image}
                  alt={catalogue.catalogue_name}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Grid of Other Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* Pagination Dots Positioned Above "See More" */}
      <div className="mt-6 flex justify-center">
        <div className="swiper-pagination"></div>
      </div>

      {/* "See More" Button */}
      <div className="flex justify-center mt-6">
        <button
          className="bg-theme-brown font-red-hat-display px-6 py-3 text-white rounded shadow-md border border-theme-brown 
                     hover:bg-white hover:text-theme-brown focus:ring-2 focus:ring-offset-2 focus:ring-theme-brown transition-colors duration-200 
                     flex items-center gap-2"
          onClick={() => navigate("/catalogues")} // Navigate to /catalogues
        >
          See More <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CatalogShowcase;
