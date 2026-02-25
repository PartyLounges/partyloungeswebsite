import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import partyloungesLogo from '../../assets/images/pl-logo.png';

const Footer = () => {
  const location = useLocation();

  const navLinks = ["Home", "Catalogues", "About", "Gallery", "Blogs", "Contact"];

  return (
    <motion.footer
      className="bg-theme-brown text-white py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}  
      viewport={{ once: true }} 
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 lg:px-16">
        {/* Logo Section */}
        <motion.div
          className="block text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src={partyloungesLogo}
            alt="Party Lounges Logo"
            className="mx-auto h-16 sm:h-20 md:h-24"
          />
        </motion.div>

        {/* Grid for Footer Content */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}  
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* About Us */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}  
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-proximanova-bold">About Us</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-red-hat-display">
              Party Lounges is a full-service event provider and event management company, offering unmatched 
              expertise, creativity, and professionalism. With years of experience, we specialize in delivering 
              seamless event planning, from corporate functions to luxury celebrations, ensuring every detail is 
              executed flawlessly.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}  
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-proximanova-bold">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((item) => {
                const isActive = location.pathname === `/${item.toLowerCase()}` || (item === "Home" && location.pathname === "/");
                return (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className={`${
                        isActive
                          ? "text-black underline underline-offset-4 decoration-2"
                          : "text-white hover:bg-gray-700 hover:text-black"
                      } text-lg py-1 px-4 rounded-md font-red-hat-display`}
                    >
                      {item}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}  
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-proximanova-bold">Contact Info</h3>
            <ul className="space-y-4">
              <li className="font-red-hat-display flex items-center text-sm sm:text-base md:text-lg">
                <span className="bg-white text-theme-brown p-3 rounded-full mr-3">
                  <i className="fa fa-phone text-lg"></i>
                </span>
                <span>0734985910 / 0718613655</span>
              </li>
              <li className="font-red-hat-display flex items-center text-sm sm:text-base md:text-lg">
                <span className="bg-white text-theme-brown p-3 rounded-full mr-3">
                  <i className="fa fa-map-marker text-lg"></i>
                </span>
                <span>Marula Lane, off Karen Road</span>
              </li>
              <li className="font-red-hat-display flex items-center text-sm sm:text-base md:text-lg">
                <span className="bg-white text-theme-brown p-3 rounded-full mr-3">
                  <i className="fa fa-envelope-o text-lg"></i>
                </span>
                <span>hello@partylounges.com</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="flex justify-center mt-8 space-x-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}  
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a href="#" className="text-white hover:text-theme-brown hover:bg-white p-3 rounded-full transition text-lg sm:text-xl md:text-2xl">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-theme-brown hover:bg-white p-3 rounded-full transition text-lg sm:text-xl md:text-2xl">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" className="text-white hover:text-theme-brown hover:bg-white p-3 rounded-full transition text-lg sm:text-xl md:text-2xl">
            <i className="fa fa-pinterest"></i>
          </a>
          <a href="#" className="text-white hover:text-theme-brown hover:bg-white p-3 rounded-full transition text-lg sm:text-xl md:text-2xl">
            <i className="fa fa-globe"></i>
          </a>
        </motion.div>

        {/* Copyright & Designed By Section */}
        <motion.div
          className="mt-8 border-t border-gray-500 pt-4 text-center text-sm sm:text-base md:text-lg font-red-hat-display"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}  
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <p>© Party Lounges Ltd {new Date().getFullYear()}, All Rights Reserved.</p>
          <p className="mt-2">
            Made with <span className="text-red-500">❤️</span> by 
            <a 
              href="https://www.linkedin.com/in/nemwel-nyandoro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white font-semibold hover:underline ml-1"
            >
              Nemwel
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
