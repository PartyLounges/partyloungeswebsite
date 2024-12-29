import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  // Popup functionality
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openPopup = (index) => {
    setCurrentImageIndex(index);
  };

  const closePopup = () => {
    setCurrentImageIndex(null);
  };

  const goToNextImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
    }
  };

  const goToPreviousImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex - 1 + galleryData.length) % galleryData.length
      );
    }
  };

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
              onClick={() => openPopup(index)}
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

      {/* Popup Modal */}
      <AnimatePresence>
        {currentImageIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup} // Close the popup when the background is clicked
          >
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-lg w-[90%] max-w-4xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              >
                &times;
              </button>

              {/* Image */}
              <motion.img
                src={galleryData[currentImageIndex].image}
                alt={galleryData[currentImageIndex].imageType}
                className="w-full h-auto object-contain max-h-[80vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Navigation Buttons */}
              <div className="absolute inset-0 flex justify-between items-center px-4">
                <button
                  onClick={goToPreviousImage}
                  className="text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
                >
                  ←
                </button>
                <button
                  onClick={goToNextImage}
                  className="text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
                >
                  →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryImages;
