import { motion } from "framer-motion";
import React from "react";

const AboutServicesSection = () => {
  const services = [
    { icon: "fa-check", text: "Sourcing for the right venue" },
    { icon: "fa-pencil-square-o", text: "Guest registration" },
    { icon: "fa-money", text: "Budget management" },
    { icon: "fa-paint-brush", text: "Creative services" },
    { icon: "fa-cutlery", text: "Food and beverage management" },
    { icon: "fa-shield", text: "Event security" },
  ];

  // Variants for animations
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="py-12 bg-aboutExperience-theme"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariant}
    >
      <div className="container mx-auto px-6 tablet:px-8 desktop:px-12">
        {/* Title */}
        <motion.div
          className="text-center mb-8"
          variants={itemVariant}
        >
          <h2 className="text-lg md:text-2xl font-proximanova-bold mb-4 text-theme-brown">
            Our Range of Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6"
          variants={containerVariant}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
              variants={itemVariant}
            >
              <i
                className={`fa ${service.icon} text-4xl text-theme-brown mb-4`}
              ></i>
              <p className="text-theme-brown text-sm mb-4 font-red-hat-display">
                {service.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutServicesSection;
