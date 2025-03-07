import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <motion.div
      className="relative w-full bg-theme-brown overflow-hidden mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="mx-4 md:mx-8 lg:mx-12 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="px-4 md:px-6 lg:px-8">
            <h2 className="text-white text-lg md:text-2xl font-proximanova-bold mb-4">
            Party Lounges: Premium Event rentals & Full-Service Event Planning & management.
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed mb-6 font-red-hat-display">
            At Party Lounges, we specialize in event management, corporate event planning, 
            and private party services. Our expert team, with an average of eight years 
            of experience, ensures seamless event coordination for corporate functions, 
            private parties, conferences, and social gatherings. From event planning to execution, 
            we handle every detail to deliver a stress-free, unforgettable experience
            </p>
            <p className="text-white text-sm md:text-base leading-relaxed mb-6 font-red-hat-display">
            Our expert team brings an average of eight years of experience
            in the convention, meeting, and event industry.Whether you're organizing a private event 
            or a corporate function, we deliver flawless execution and attention to detail to make your event a success.
            </p>
            <div className="flex justify-center">
            <Link to="/about">
              <motion.button
                className="px-6 py-3 bg-white text-theme-brown font-red-hat-display rounded-lg hover:bg-theme-brown hover:text-white border border-white transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroSection;
