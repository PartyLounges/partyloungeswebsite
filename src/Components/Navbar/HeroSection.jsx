import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-screen bg-[#0E202B] flex flex-col items-center justify-center text-center px-6">
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <img src="/path-to-your-logo.png" alt="Party Lounges Logo" className="h-10 md:h-12" />
      </div>

      {/* Navbar */}
      <nav className="absolute top-6 right-6 text-white flex space-x-6 text-sm md:text-base">
        <a href="#" className="text-[#C5B3AB] font-semibold border-b border-[#C5B3AB]">
          HOME
        </a>
        <a href="#" className="hover:text-[#C5B3AB]">ABOUT</a>
        <a href="#" className="hover:text-[#C5B3AB]">GALLERY</a>
        <a href="#" className="hover:text-[#C5B3AB]">BLOG</a>
        <a href="#" className="hover:text-[#C5B3AB]">CONTACT</a>
      </nav>

      {/* Hero Text */}
      <h1 className="text-[#C5B3AB] font-proximanova-bold mb-4"
      style={{ fontSize: window.innerWidth >= 768 ? '60px' : '50px' }}>
        Party Lounges
      </h1>
      <p className="text-white text-base md:text-lg font-red-hat-display">
        Where Elegance Meets Comfort for Every Occasion.
      </p>
    </section>
  );
};

export default HeroSection;
