import React, { useState } from "react";
import { Link } from "react-router-dom";
import partyloungesLogo from '../../assets/images/partyloungesLOGO.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent md:bg-theme-brown">
      {/* Navbar Container */}
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-3">
        {/* Logo (only visible on tablet and desktop) */}
        <div className="hidden md:block">
          <img
            src={partyloungesLogo}
            alt="Logo"
            className="h-12 w-auto object-contain bg-white rounded-md p-2"
          />
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl z-50 md:hidden ml-auto"
        >
          {menuOpen ? "✕" : "☰"} {/* Toggle icon */}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center space-x-8 text-white text-sm md:text-lg">
          <li>
            <Link
              to="/"
              className="hover:underline hover:underline-offset-4 decoration-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:underline hover:underline-offset-4 decoration-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="hover:underline hover:underline-offset-4 decoration-white"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:underline hover:underline-offset-4 decoration-white"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:underline hover:underline-offset-4 decoration-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 ${
          menuOpen ? "w-40" : "w-0"
        } bg-theme-brown transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300 ease-in-out z-40 overflow-hidden`}
        style={{ maxHeight: "50vh", paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
      >
        <ul className="flex flex-col items-start space-y-4 p-4">
          <li>
            <Link
              to="/"
              className="text-black text-lg py-1 px-4 underline underline-offset-4 decoration-black"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white text-lg py-1 px-4 rounded-md hover:bg-gray-700 hover:text-black"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="text-white text-lg py-1 px-4 rounded-md hover:bg-gray-700 hover:text-black"
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-white text-lg py-1 px-4 rounded-md hover:bg-gray-700 hover:text-black"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-lg py-1 px-4 rounded-md hover:bg-gray-700 hover:text-black"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
