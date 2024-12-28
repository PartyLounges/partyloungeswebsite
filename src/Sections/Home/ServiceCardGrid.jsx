import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCardGrid = () => {
  const data = [
    {
      title: "Corporate Parties",
      image: "https://images.unsplash.com/photo-1606422315127-d6406a336564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D",
      text: "Corporate parties are often large undertakings, but with our understanding of planning and execution, we can transform any event into a memorable experience. From fabrication, catering, social engagement, and marketing, we're leading the way.",
      linkText: "Learn More..."
    },
    {
      title: "Themed Weddings",
      image: "https://images.unsplash.com/photo-1606422315116-2c1b86cbf071?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "There are a variety of ways to theme your wedding, but a popular choice is to pick a color palette to tie everything together. We can help bring your vision to life with our design and planning expertise.",
      linkText: "Learn More..."
    },
    {
      title: "Removable Furniture",
      image: "https://images.unsplash.com/photo-1606422315127-d6406a336564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D",
      text: "In the interest of saving the environment and moving towards a more sustainable future, we offer a range of high-quality, removable furniture options. Our pieces are stylish, functional, and easy to assemble and disassemble.",
      linkText: "Learn More..."
    },
    {
      title: "Private Parties",
      image: "https://images.unsplash.com/photo-1606422315127-d6406a336564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D",
      text: "Corporate parties are often large undertakings, but with our understanding of planning and execution, we can transform any event into a memorable experience. From fabrication, catering, social engagement, and marketing, we're leading the way.",
      linkText: "Learn More..."
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-8 w-full">
      {data.map((item, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.2,
        });

        return (
          <motion.div
            key={index}
            ref={ref}
            className="relative bg-theme-white shadow-md rounded-lg overflow-hidden min-h-[300px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 50,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: index * 0.2,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            whileHover={{
              y: -5,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <motion.div
              className="text-left absolute inset-0 flex flex-col justify-center items-start p-6 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 20,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              <h3 className="text-lg font-proximanova-bold mb-3 text-[#f0f0f0] underline">
                {item.title}
              </h3>
              <p className="text-base font-red-hat-display mb-4 text-[#eaeaea]">
                {item.text}
              </p>
              <a
                href="#"
                className="text-[#f0f0f0] font-red-hat-display hover:text-gray-300 font-semibold"
              >
                {item.linkText}
              </a>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServiceCardGrid;
