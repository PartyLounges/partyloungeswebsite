import { motion } from "framer-motion";
import React from "react";
import ourstoryvision from "../../assets/images/About/ourstoryvision.jpg"
import ourstorymision from "../../assets/images/About/ourstorymision.jpg"

const AboutMissionVision = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.66, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1, scale: 1,
      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.12, staggerChildren: 0.12 },
    },
  };

  return (
    <motion.section
      className="w-screen py-16 px-6 md:px-12 bg-aboutExperience-theme"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="space-y-16 max-w-7xl mx-auto">
        {/* Vision Section */}
        <motion.div
          className="grid grid-cols-1 desktop:grid-cols-2 gap-8 items-center"
          variants={containerVariant}
        >
          <motion.div variants={textVariant}>
            <h2 className="text-xl md:text-2xl font-proximanova-bold text-black mb-4">
              Our Vision
            </h2>
            <ul className="space-y-3 text-black text-sm md:text-base font-red-hat-display">
              {[
                "Creativity",
                "Purpose",
                "Innovation",
                "Sustainability",
              ].map((item) => (
                <li
                  key={item}
                  className="bg-white/80 rounded-md px-4 py-3 border border-gray-200 shadow-sm"
                >
                  <span className="font-proximanova-bold mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={imageVariant}>
            <img
              src={ourstoryvision}
              alt="Vision"
              className="rounded-lg shadow-lg w-full object-cover h-64 desktop:h-96"
            />
          </motion.div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="grid grid-cols-1 desktop:grid-cols-2 gap-8 items-center"
          variants={containerVariant}
        >
          <motion.div variants={imageVariant}>
            <img
              src={ourstorymision}
              alt="Mission"
              className="rounded-lg shadow-lg w-full object-cover h-64 desktop:h-96"
            />
          </motion.div>
          <motion.div variants={textVariant}>
            <h2 className="text-xl md:text-2xl font-proximanova-bold text-black mb-4">
              Our Mission
            </h2>
            <p className="text-black text-sm md:text-base font-red-hat-display">
              We curate holistic event platforms that drive meaningful engagement and set the stage for transformative experiences.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMissionVision;
