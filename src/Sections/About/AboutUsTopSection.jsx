import React from 'react';
import { motion } from 'framer-motion';
import ourstorylanding from "../../assets/images/About/ourstorylanding.jpg";

const AboutUsTopSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.9, // Duration of the animation
        ease: [0.22, 1, 0.36, 1], // Easing function
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.72, // Duration of text animation
        ease: [0.22, 1, 0.36, 1], // Easing function
        delay: 0.2, // Delay to start after the container animation
      },
    },
  };

  return (
    <motion.section
      className="relative w-full h-[65vh] md:h-[75vh] lg:h-[85vh] flex items-center justify-center bg-cover bg-center pt-20"
      style={{
        backgroundImage: `url(${ourstorylanding})`,
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text Content */}
      <motion.div
        className="relative text-center text-white px-4"
        variants={textVariants}
      >
        <h1 className="text-40 font-bold tablet:text-48 desktop:text-56 font-proximanova-bold mb-2">
          Our Story
        </h1>
        <h2 className="text-24 font-bold tablet:text-32 desktop:text-40 font-proximanova-bold">
          WHERE CREATIVITY MEETS PURPOSE
        </h2>
      </motion.div>
    </motion.section>
  );
};

export default AboutUsTopSection;
