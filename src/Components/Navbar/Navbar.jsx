import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import partyloungesLogo from "../../assets/images/pl-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = ["Home", "Catalogues", "About", "Gallery", "Blogs", "Contact"];

  // Check if the current page has a dark-themed background
  const isDarkPage = ["/home", "/", "/about", "/contact"].includes(location.pathname);

  // Scroll effect to update navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-theme-brown" : "bg-transparent"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-3">
        {/* Logo */}
        <motion.div
          className="block md:hidden"
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={partyloungesLogo}
            alt="Party Lounges Logo"
            className="h-12 w-auto object-contain"
          />
        </motion.div>

        <motion.div
          className="hidden md:block"
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
          className={`text-3xl z-50 md:hidden ml-auto ${
            isDarkPage && !isScrolled ? "text-white" : "text-black"
          }`}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex font-red-hat-display items-center justify-center space-x-8 text-sm md:text-lg transition-colors`}
        >
          {navLinks.map((item) => {
            const isActive =
              location.pathname === `/${item.toLowerCase()}` ||
              (item === "Home" && location.pathname === "/");

            return (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className={`
                    transition-colors duration-300 font-red-hat-display
                    ${isActive ? "text-black underline underline-offset-4 decoration-2" : ""}
                    ${isScrolled ? (isActive ? "text-black" : "text-white") : (isDarkPage ? "text-white" : "text-black")}
                  `}
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
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 w-40 bg-theme-brown z-40 overflow-hidden"
            style={{ maxHeight: "50vh", paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
          >
            <ul className="flex flex-col items-start space-y-4 p-4">
              {navLinks.map((item, index) => {
                const isActive =
                  location.pathname === `/${item.toLowerCase()}` ||
                  (item === "Home" && location.pathname === "/");

                return (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className={`text-lg py-1 px-4 rounded-md transition-colors duration-300
                        ${isActive ? "text-black underline underline-offset-4 decoration-2" : "text-white hover:bg-gray-700 hover:text-black"}
                      `}
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
