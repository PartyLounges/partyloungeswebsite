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
              Every great experience starts with a vision. When we founded Party Lounges LTD 16 years ago, we envisioned more than just beautiful 
              furniture and well-styled spaces— We saw an opportunity to transform events into unforgettable moments. We believed, and still believe, 
              that creativity, innovation, and sustainability could come together to redefine the way people celebrate and connect.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full space-y-16 my-5 bg-aboutExperience-theme"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {/* Vision Section */}
          <motion.div
            className="grid grid-cols-1 desktop:grid-cols-2 gap-8 items-center"
            variants={containerVariant}
          >
            {/* Vision Text */}
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

            {/* Vision Image */}
            <motion.div variants={imageVariant}>
              <img
                src="https://images.unsplash.com/photo-1560184897-0e5d96d86acd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UnVzdGljJTIwRnVybml0dXJlfGVufDB8fDB8fHww"
                alt="Vision"
                className="rounded-lg shadow-lg w-full object-cover h-64 desktop:h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            className="grid grid-cols-1 desktop:grid-cols-2 gap-8 items-center"
            variants={containerVariant}
          >
            {/* Mission Image */}
            <motion.div variants={imageVariant}>
              <img
                src="https://images.unsplash.com/photo-1560184897-0e5d96d86acd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UnVzdGljJTIwRnVybml0dXJlfGVufDB8fDB8fHww"
                alt="Mission"
                className="rounded-lg shadow-lg w-full object-cover h-64 desktop:h-auto"
              />
            </motion.div>

            {/* Mission Text */}
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
      </div>
    </motion.section>
  );
};

export default AboutExperienceSection;
