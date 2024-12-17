import React from "react";
import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <motion.div
      className="relative mx-4 md:mx-8 lg:mx-12 -mt-8 md:-mt-12 bg-theme-brown z-10 rounded-lg overflow-hidden mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="mx-4 md:mx-8 lg:mx-12 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="px-4 md:px-6 lg:px-8">
            <h2 className="text-white text-lg md:text-2xl font-bold mb-4">
              Party Lounges: A Full Service Provider and Event Management Company
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed mb-6">
              Our team of professionals has an average of eight years of experience
              in the convention, meeting, and event industry. Whether you're
              planning a private event or a corporate function, we ensure every
              detail is perfect.
            </p>
            <div className="flex justify-center">
              <motion.button
                className="px-6 py-3 bg-white text-theme-brown font-semibold rounded-lg hover:bg-theme-brown hover:text-white border border-white transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroSection;
