import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import galleryData from "../../data/galleryData";

const GalleryImages = () => {
  const [visibleImages, setVisibleImages] = useState(16);
  const navigate = useNavigate();

  const totalImages = galleryData.length;

  const handleShowMore = () => {
    setVisibleImages((prevVisible) => Math.min(prevVisible + 10, totalImages));
  };

  // Get unique image types
  const imageTypes = [...new Set(galleryData.map((image) => image.imageType))];

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto px-[5%] tablet:px-[4%]">
        {/* Section Title */}
        <h2 className="text-2xl font-proximanova-bold mb-8 text-gray-800 text-left pt-24">
          Our Gallery
        </h2>

        {/* Image Type Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          {imageTypes.map((type) => (
            <button
              key={type}
              onClick={() => navigate(`/gallery/${type}`)}
              className="bg-theme-brown font-red-hat-display px-4 py-2 text-white rounded shadow-md border border-theme-brown 
                         hover:bg-white hover:text-theme-brown focus:ring-2 focus:ring-offset-2 focus:ring-theme-brown transition-colors duration-200"
            >
              {type}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          aria-label="Gallery"
        >
          {galleryData.slice(0, visibleImages).map((image, index) => (
            <motion.div
              key={image.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              <img
                src={image.image}
                alt={image.imageType}
                className="w-full h-64 object-cover cursor-pointer"
              />
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleImages < totalImages && (
          <div className="mt-12 text-center">
            <button
              onClick={handleShowMore}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={visibleImages >= totalImages}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryImages;
