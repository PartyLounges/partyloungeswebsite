import React, { useState } from "react";
import { motion } from "framer-motion";
import galleryData from "../../data/galleryData";

const GalleryImages = () => {
  const [visibleImages, setVisibleImages] = useState(16);
  const totalImages = galleryData.length;

  const handleShowMore = () => {
    setVisibleImages((prevVisible) => Math.min(prevVisible + 10, totalImages));
  };

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto px-[5%] tablet:px-[8%]">
        {/* Section Title */}
        <h2 className="text-2xl font-proximanova-bold mb-8 text-gray-800 text-left py-12">
          Our Gallery
        </h2>

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
                className="w-full h-80 object-cover"
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
