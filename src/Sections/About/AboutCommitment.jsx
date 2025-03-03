import { motion } from "framer-motion";
import React from "react";
import ourstoryjourney from "../../assets/images/About/ourstoryjourney.jpg"

const AboutCommitment = () => {
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
      className="relative w-full h-[75vh] md:h-[75vh] lg:h-[85vh] flex items-center justify-center bg-cover bg-center pt-15 md:pt-18 lg:pt-20"
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
        <h1 className="text-left text-32 font-bold tablet:text-40 desktop:text-48 font-proximanova-bold mb-2">
         Looking Ahead: Our Commitment to Exceptional Events
        </h1>
        <p className="text-left text-18 font-proximanova-bold">
        

        As Party Lounges continues to evolve, our mission remains clear: to create immersive event experiences 
        that foster meaningful engagement and leave a lasting impact. Whether you're planning an intimate gathering, 
        corporate brand activation, luxury wedding, or grand celebration, we bring expert event planning, premium décor, 
        and seamless execution to make your vision a reality.


        </p>

        <p className="text-left text-18 font-proximanova-bold py-5">
        Your vision inspires us, and we can't wait to craft something extraordinary together. 
        Thank you for being part of our journey—we look forward to bringing your event to life.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutCommitment;


