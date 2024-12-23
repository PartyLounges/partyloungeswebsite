import React from 'react';

const ContactUsTopSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center bg-cover bg-center pt-20"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606422315127-d6406a336564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text Content */}
      <div className="relative text-center text-white px-4">
        <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-2">
          Get in Touch
        </h3>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Contact Us
        </h1>
      </div>
    </section>
  );
};

export default ContactUsTopSection;
