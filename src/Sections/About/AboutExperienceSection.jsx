import { motion } from "framer-motion";
import React from "react";

const AboutExperienceSection = () => {
  // Variants for animation
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.2 },
    },
  };

  return (
    <motion.section
      className="py-12 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariant}
    >
      <div className="container mx-auto px-6 tablet:px-8 desktop:px-12">
        {/* Content Layout */}
        <motion.div
          className="items-center"
          variants={containerVariant}
        >
          {/* Text Content */}
          <motion.div variants={textVariant}>
            <h3 className="text-24 font-bold tablet:text-32 desktop:text-40 font-proximanova-bold my-4">
              Welcome to Party Lounges LTD
            </h3>
            <p className="text-18 font-proximanova-bold my-5 mb-12">
            Welcome to Party Lounges LTD – Premium Event Planning & Decor Services

            At Party Lounges LTD, we believe every great event starts with a vision. Founded 16 years ago, we set out to do more than just
            provide luxury event furniture and stylish event spaces—our goal is to create unforgettable experiences. Through creativity, 
            innovation, and sustainable event solutions, we transform corporate events, private parties, and social gatherings into extraordinary 
            celebrations.
            </p>
          </motion.div>
        </motion.div>

        
      </div>
    </motion.section>
  );
};

export default AboutExperienceSection;
