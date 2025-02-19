import React from "react";
import { motion } from "framer-motion";

const MyCatalogue = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2, // Stagger effect
      },
    }),
  };

  const images = [
    "https://plus.unsplash.com/premium_photo-1673548916754-aefad0c0955a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMHNpdHRpbmclMjBjb3VjaGVzJTIwaW1hZ2VzfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1673548917477-4c0c8889b439?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JheSUyMHNpdHRpbmclMjBjb3VjaGVzJTIwaW1hZ2VzfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1736194029585-4b75e52a2335?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJvd24lMjBzaXR0aW5nJTIwY291Y2hlcyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1673548916754-aefad0c0955a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMHNpdHRpbmclMjBjb3VjaGVzJTIwaW1hZ2VzfGVufDB8fDB8fHww",
  ];

  return (
    <motion.div
      className="container mx-auto px-4 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Section Title */}
      <motion.h2
        className="text-center text-24 font-bold tablet:text-32 desktop:text-40 text-black font-red-hat-display mb-6"
        variants={textVariants}
      >
        Our Event Furniture Collection
      </motion.h2>

      {/* Featured Image */}
      <motion.div className="mb-6" variants={imageVariants} custom={0}>
        <img
          src="https://plus.unsplash.com/premium_photo-1723834562784-a56d7b234360?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JheSUyMHNpdHRpbmclMjBjb3VjaGVzJTIwaW1hZ2VzfGVufDB8fDB8fHww"
          alt="Featured"
          className="w-full rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="w-full h-48 md:h-64 overflow-hidden rounded-lg shadow-md"
            variants={imageVariants}
            custom={index + 1}
            initial="hidden"
            animate="visible"
          >
            <img src={image} alt={`Catalogue ${index + 1}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyCatalogue;
