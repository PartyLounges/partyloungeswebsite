import React from "react";

const ServiceCardGrid = () => {
  const data = [
    {
      title: "Corporate Parties",
      image: "https://images.unsplash.com/photo-1606422315127-d6406a336564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D",
      text: "Corporate parties are often large undertakings, but with our understanding of planning and execution, we can transform any event into a memorable experience. From fabrication, catering, social engagement, and marketing, we're leading the way.",
      linkText: "Learn More..."
    },
    {
      title: "Private Parties",
      image: "https://plus.unsplash.com/premium_photo-1682259920062-d30783ac0375?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D",
      text: "Private parties are smaller, more intimate celebrations or events. They include birthdays, graduations, baby showers, and anniversaries. We believe, if you're looking for a place that can...",
      linkText: "Learn More..."
    },
    {
      title: "Themed Weddings",
      image: "https://images.unsplash.com/photo-1606422315116-2c1b86cbf071?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "There are a variety of ways to theme your wedding, but a popular choice is to pick a color palette to tie everything together. We can help bring your vision to life with our design and planning expertise.",
      linkText: "Learn More..."
    },
    {
      title: "Removable Furniture",
      image: "https://images.unsplash.com/photo-1606422315127-d6406a336564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D",
      text: "In the interest of saving the environment and moving towards a more sustainable future, we offer a range of high-quality, removable furniture options. Our pieces are stylish, functional, and easy to assemble and disassemble.",
      linkText: "Learn More..."
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-8">
      {data.map((item, index) => (
        <div key={index} className="relative bg-white shadow-md rounded-lg overflow-hidden min-h-[300px]">
          {/* Image with overlay */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          
          {/* Text content overlay */}
          <div className="text-left absolute inset-0 flex flex-col justify-center items-start p-6 text-white z-10">
            <h3 className="text-left text-xl font-bold mb-3 underline">{item.title}</h3>
            <p className="text-lg mb-4">{item.text}</p>
            <a
              href="#"
              className="text-white hover:text-gray-300 font-bold text-center"
            >
              {item.linkText}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCardGrid;
