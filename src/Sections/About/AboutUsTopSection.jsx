import React from 'react';
import { motion } from 'framer-motion';

const AboutUsTopSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2, // Duration of the animation
        ease: "easeInOut", // Easing function
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Duration of text animation
        ease: "easeOut", // Easing function
        delay: 0.3, // Delay to start after the container animation
      },
    },
  };

  return (
    <motion.section
      className="relative w-full h-[65vh] md:h-[75vh] lg:h-[85vh] flex items-center justify-center bg-cover bg-center pt-20"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1733864775775-4c92c128c7e4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q296eSUyMGxpdmluZyUyMHJvb20lMjB3aXRoJTIwZmlyZXBsYWNlJTJDJTIwaGFyZHdvb2QlMjBmbG9vcnMlMkMlMjBhbmQlMjB2aW50YWdlJTIwZnVybml0dXJlfGVufDB8fDB8fHww')",
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
