import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-screen bg-main-blue-theme flex flex-col items-center justify-center text-center px-6">
      {/* Hero Text */}
      <h1 className="text-white-theme-blue font-bold font-red-hat-display mb-4 text-48 tablet:text-64 desktop:text-80">
        Party Lounges
      </h1>
      <p className="text-24 tablet:text-32 desktop:text-40 text-white font-red-hat-display">
        Where Elegance Meets Comfort for Every Occasion.
      </p>
    </section>
  );
};

export default HeroSection;
