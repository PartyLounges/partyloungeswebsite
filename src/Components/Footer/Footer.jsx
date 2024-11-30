import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import partyloungesLogo from '../../assets/images/partylounges.jpg';

const Footer = () => {
  return (
    <motion.footer
      className="bg-theme-brown text-white py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}  // Animation triggers when the footer comes into view
      viewport={{ once: true }}     // Animation happens only once when entering the viewport
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 lg:px-16">
        {/* Logo Section */}
        <motion.div
          className="block text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}  // Trigger animation when in view
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
          whileInView={{ opacity: 1 }}  // Trigger fade-in animation when in view
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* About Us */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}  // Animate when in view
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">About Us</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Party Lounges is a full Service Provider and Event Management
              company that offers a wide range of experience, knowledge, and
              professionalism.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}  // Animate when in view
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline text-sm sm:text-base md:text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline text-sm sm:text-base md:text-lg">
                  About
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:underline text-sm sm:text-base md:text-lg">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline text-sm sm:text-base md:text-lg">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline text-sm sm:text-base md:text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}  // Animate when in view
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-sm sm:text-base md:text-lg">
                <span className="bg-white text-theme-brown p-2 rounded-full mr-3">
                  <i className="fa fa-phone"></i>
                </span>
                <span>0722 424879 / 0734 859190</span>
              </li>
              <li className="flex items-center text-sm sm:text-base md:text-lg">
                <span className="bg-white text-theme-brown p-2 rounded-full mr-3">
                  <i className="fa fa-map-marker"></i>
                </span>
                <span>Marula Lane, off Karen Road</span>
              </li>
              <li className="flex items-center text-sm sm:text-base md:text-lg">
                <span className="bg-white text-theme-brown p-2 rounded-full mr-3">
                  <i className="fa fa-envelope-o"></i>
                </span>
                <span>info@partylounges.com</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="flex justify-center mt-8 space-x-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}  // Fade-in animation when scrolled into view
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a
            href="#"
            className="text-white hover:text-theme-brown hover:bg-white p-3 rounded-full transition text-lg sm:text-xl md:text-2xl"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-theme-brown hover:bg-white p-3 rounded-full transition text-lg sm:text-xl md:text-2xl"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-theme-brown hover:bg-white p-3 rounded-full transition text-lg sm:text-xl md:text-2xl"
          >
            <i className="fa fa-pinterest"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-theme-brown hover:bg-white p-3 rounded-full transition text-lg sm:text-xl md:text-2xl"
          >
            <i className="fa fa-globe"></i>
          </a>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          className="mt-8 border-t border-gray-500 pt-4 text-center text-sm sm:text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}  // Fade-in animation when scrolled into view
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          © Party Lounges Ltd 2024, All Rights Reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
