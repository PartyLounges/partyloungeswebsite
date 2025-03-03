import { motion } from "framer-motion";
import React from "react";
import ourstoryjourney from "../../assets/images/About/ourstoryjourney.jpg"

const AboutJourney = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.2 },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="relative w-full h-[65vh] md:h-[75vh] lg:h-[85vh] flex items-center justify-center bg-cover bg-center pt-15 md:pt-18 lg:pt-20"
      style={{
        backgroundImage: `url(${ourstoryjourney})`,
      }}
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text Content */}
      <motion.div
        className="relative text-center text-white px-4 max-w-4xl mx-auto"
        variants={textVariant}
      >
        <h1 className="text-32 font-bold tablet:text-40 desktop:text-48 font-proximanova-bold mb-2">
          Our Journey
        </h1>
        <p className="text-18 font-bold font-proximanova-bold">
        Our Journey – Crafting Unforgettable Event Experiences

        What began as a vision to provide high-quality event furniture rentals quickly evolved into a mission to create 
        immersive event experiences. At Party Lounges LTD, we don’t just furnish events—we tell stories through design, 
        ambiance, and innovation. Over the years, we’ve had the privilege of collaborating with top-tier brands, 
        corporate clients, and private event hosts who trust us to transform their event visions into reality.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutJourney;


