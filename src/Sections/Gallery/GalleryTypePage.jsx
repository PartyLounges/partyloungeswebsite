import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import galleryData from "../../data/galleryData";

const GalleryTypePage = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  // Filter images by type
  const filteredImages = galleryData.filter((image) => image.imageType === type);

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto px-[5%] tablet:px-[4%]">
        <h2 className="text-2xl font-proximanova-bold mb-8 text-gray-800 text-left pt-24">
          {type} Gallery
        </h2>

        {/* Back Button */}
        <button
          onClick={() => navigate("/gallery")}
          className="bg-theme-brown font-red-hat-display px-4 py-2 mb-8 text-white rounded shadow-md border border-theme-brown 
                         hover:bg-white hover:text-theme-brown focus:ring-2 focus:ring-offset-2 focus:ring-theme-brown transition-colors duration-200"
        >
          Back to Main Gallery
        </button>

        {/* Filtered Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={image.image}
                alt={image.imageType}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryTypePage;
