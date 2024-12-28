import React, { useState } from "react";

const GalleryImages = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState(16);
  const totalImages = images.length;

  const handleShowMore = () => {
    setVisibleImages((prevVisible) => Math.min(prevVisible + 10, totalImages));
  };

  return (
    <div className="container mx-auto p-4">
      {/* Gallery Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        aria-label="Gallery"
      >
        {images.slice(0, visibleImages).map((image, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md border border-gray-300"
          >
            <img
              src={image}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleImages < totalImages && (
        <div className="mt-6 text-center">
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
  );
};

export default GalleryImages;
