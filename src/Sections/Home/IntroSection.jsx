import React from "react";

const IntroSection = () => {
  return (
    <div className="relative mx-4 md:mx-8 lg:mx-12 -mt-8 md:-mt-12 bg-theme-brown z-10 rounded-lg overflow-hidden">
      {/* External margin for responsive padding around the section */}
      <div className="mx-4 md:mx-8 lg:mx-12 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="px-4 md:px-6 lg:px-8">
            <h2 className="text-theme-white text-lg md:text-2xl font-bold mb-4">
              Party Lounges: A Full Service Provider and Event Management Company
            </h2>
            <p className="text-theme-white text-sm md:text-base leading-relaxed mb-6">
              Our team of professionals has an average of eight years of experience
              in the convention, meeting, and event industry. Whether you're
              planning a private event or a corporate function, we ensure every
              detail is perfect.
            </p>
            {/* Centering the button */}
            <div className="flex justify-center">
              <button className="px-6 py-3 bg-theme-white text-theme-brown font-semibold rounded-lg hover:bg-theme-brown hover:text-theme-white border border-theme-white transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16"></div>
    </div>
  );
};

export default IntroSection;
