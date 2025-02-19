import React from "react";
import { motion } from "framer-motion";
import catalogData from "../../data/CatalogueData";

const MyCatalogue = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

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
    <motion.div
      className="container mx-auto px-4 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Section Title */}
      <motion.h2
        className="text-center text-3xl md:text-4xl font-proximanova-bold text-gray-800 mb-10"
        variants={textVariants}
      >
        Our Event Furniture Collection
      </motion.h2>

      {catalogData.map((catalogue, catIndex) => (
        <div key={catIndex} className="mb-16">
          {/* Catalogue Title */}
          <motion.h3
            className="text-center text-2xl md:text-3xl font-semibold text-gray-700 mb-4"
            variants={textVariants}
          >
            {catalogue.catalogue_name}
          </motion.h3>

          {/* Featured Image */}
          <motion.div className="mb-6 flex justify-center" variants={imageVariants} custom={0}>
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
                <img src={image} alt={`Catalogue ${catalogue.catalogue_name} - ${index + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default MyCatalogue;
