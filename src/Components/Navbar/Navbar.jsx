import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Navbar */}
      <div className="flex items-center justify-between px-5 py-3">
        <h1 className="text-xl font-bold text-white"></h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl z-50"
        >
          {menuOpen ? "✕" : "☰"} {/* Toggle icon */}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 ${
          menuOpen ? "w-54" : "w-0"
        } bg-theme-brown transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300 ease-in-out z-40 overflow-hidden`}
        style={{ maxHeight: "50vh", paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
      >
        <div className="flex flex-col items-start space-y-2 p-4 mt-4">
          <Link
            to="/"
            className="text-black text-lg py-1 px-4 underline underline-offset-4 decoration-black"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-white text-lg py-1 px-4 rounded-md hover:bg-gray-700 hover:text-black"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="text-white text-lg py-1 px-4 rounded-md hover:bg-gray-700 hover:text-black"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/blog"
            className="text-white text-lg py-1 px-4 rounded-md hover:bg-gray-700 hover:text-black"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg py-1 px-4 rounded-md hover:bg-gray-700 hover:text-black"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
