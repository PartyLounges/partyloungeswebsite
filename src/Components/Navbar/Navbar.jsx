import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import partyloungesLogo from "../../assets/images/pl-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = ["Home", "About", "Gallery", "Blog", "Contact"];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-transparent md:bg-theme-brown"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-3">
        {/* Logo */}
        <motion.div
          className="hidden md:block"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={partyloungesLogo}
            alt="Party Lounges Logo"
            className="h-16 w-auto object-contain"
          />
        </motion.div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl z-50 md:hidden ml-auto"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center space-x-8 text-white text-sm md:text-lg">
          {navLinks.map((item) => {
            const isActive = location.pathname === `/${item.toLowerCase()}` || (item === "Home" && location.pathname === "/");
            return (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className={`${
                    isActive
                      ? "text-black underline underline-offset-4 decoration-2"
                      : "hover:underline hover:underline-offset-4 decoration-white"
                  }`}
                >
                  {item}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-40 bg-theme-brown z-40 overflow-hidden"
            style={{ maxHeight: "50vh", paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
          >
            <ul className="flex flex-col items-start space-y-4 p-4">
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
                      } text-lg py-1 px-4 rounded-md`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
