import React from "react";

const AboutServicesSection = () => {
  const services = [
    { icon: "fa-check", text: "Sourcing for the right venue" },
    { icon: "fa-pencil-square-o", text: "Guest registration" },
    { icon: "fa-money", text: "Budget management" },
    { icon: "fa-paint-brush", text: "Creative services" },
    { icon: "fa-cutlery", text: "Food and beverage management" },
    { icon: "fa-shield", text: "Event security" },
  ];

  return (
    <section className="py-12 bg-aboutExperience-theme">
      <div className="container mx-auto px-6 tablet:px-8 desktop:px-12">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-lg md:text-2xl font-proximanova-bold mb-4 text-theme-brown">
            Our Range of Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <i
                className={`fa ${service.icon} text-4xl text-theme-brown mb-4`}
              ></i>
              <p className="text-theme-brown text-sm mb-4 font-red-hat-display">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutServicesSection;
