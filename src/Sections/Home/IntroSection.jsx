import React from "react";

const IntroSection = () => {
  return (
    <div className="relative -mt-12 md:-mt-20 bg-theme-brown z-10">
      {/* Container with responsive padding and margin */}
      <div className="max-w-6xl mx-auto px-5p md:px-8p lg:px-10p py-12 md:py-16">
        <div className="px-4 md:px-6 lg:px-8">
          <h2 className="text-theme-white text-lg md:text-2xl font-bold mb-4">
            Party Lounges: A Full Service Provider and Event Management Company
          </h2>
          <p className="text-theme-white text-sm md:text-base leading-relaxed">
            Our team of professionals has an average of eight years of experience
            in the convention, meeting, and event industry. Whether you're
            planning a private event or a corporate function, we ensure every
            detail is perfect.
          </p>
          <button className="mt-6 px-6 py-3 bg-theme-white text-theme-brown font-semibold rounded-lg hover:bg-theme-brown hover:text-theme-white border border-theme-white transition">
            Learn More
          </button>
        </div>
      </div>
      {/* Added bottom margin to separate the section from other content */}
      <div className="mb-16"></div>
    </div>
  );
};

export default IntroSection;
