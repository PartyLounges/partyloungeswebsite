import { motion } from "framer-motion";
import React from "react";
import ourstoryvision from "../../assets/images/About/ourstoryvision.jpg"

const AboutMissionVision = () => {
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
      opacity: 1, scale: 1,
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
            <ul className="list-disc pl-5 text-black text-sm md:text-base font-red-hat-display">
              <li>Creativity</li>
              <li>Purpose</li>
              <li>Innovation</li>
              <li>Sustainability</li>
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
              src="https://images.unsplash.com/photo-1560184897-0e5d96d86acd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UnVzdGljJTIwRnVybml0dXJlfGVufDB8fDB8fHww"
              alt="Mission"
              className="rounded-lg shadow-lg w-full object-cover h-64 desktop:h-auto"
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
