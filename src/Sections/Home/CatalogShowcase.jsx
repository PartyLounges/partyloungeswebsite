import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import catalogData from "../../data/CatalogueData";
import { FaArrowRight } from "react-icons/fa";

const CatalogShowcase = () => {
  const navigate = useNavigate();
  const [selectedCatalog, setSelectedCatalog] = useState(null);

  // Pick a random catalog on each refresh
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * catalogData.length);
    setSelectedCatalog(catalogData[randomIndex]);
  }, []);

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

  if (!selectedCatalog) return null; // Ensure we don't render before selecting a catalog

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

      {/* Featured Image */}
      <motion.div
        className="mb-6 flex justify-center"
        variants={imageVariants}
        custom={0}
        initial="hidden"
        animate="visible"
      >
        <img
          src={selectedCatalog.main_image}
          alt={selectedCatalog.catalogue_name}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Grid of Other Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedCatalog.other_images.map((image, index) => (
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
              alt={`Catalogue ${selectedCatalog.catalogue_name} - ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* "See More" Button */}
      <div className="flex justify-center mt-6">
        <button
          className="bg-theme-brown font-red-hat-display px-6 py-3 text-white rounded shadow-md border border-theme-brown 
                     hover:bg-white hover:text-theme-brown focus:ring-2 focus:ring-offset-2 focus:ring-theme-brown transition-colors duration-200 
                     flex items-center gap-2"
          onClick={() => navigate("/catalogues")}
        >
          See More <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CatalogShowcase;
