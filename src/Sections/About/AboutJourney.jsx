import { motion } from "framer-motion";
import React from "react";

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
      className="relative w-full h-[65vh] md:h-[75vh] lg:h-[85vh] flex items-center justify-center bg-cover bg-center pt-20"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1733864775775-4c92c128c7e4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q296eSUyMGxpdmluZyUyMHJvb20lMjB3aXRoJTIwZmlyZXBsYWNlJTJDJTIwaGFyZHdvb2QlMjBmbG9vcnMlMkMlMjBhbmQlMjB2aW50YWdlJTIwZnVybml0dXJlfGVufDB8fDB8fHww')",
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
        <h1 className="text-40 font-bold tablet:text-48 desktop:text-56 font-proximanova-bold mb-2">
          Our Journey
        </h1>
        <p className="text-18 font-bold font-proximanova-bold">
          What started as a simple idea—to provide stylish high-quality furniture rentals—quickly grew into something much more meaningful. We became storytellers, crafting immersive 
          event experiences that blend style with substance. Over the years, we've had the privilege of working with visionary clients, top-tier brands, and extraordinary individuals
          who trust us to bring their dreams to life.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutJourney;


