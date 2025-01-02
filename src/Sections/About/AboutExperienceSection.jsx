import React from "react";

const AboutExperienceSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 tablet:px-8 desktop:px-12">
        {/* Introduction Text */}
        <div className="text-center mb-8">
          <p className="text-lg font-medium text-gray-600 mb-4 font-red-hat-display">
            Our team of professionals has an average of eight years of
            experience in the convention, meeting, and event industry.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-lg md:text-2xl font-proximanova-bold text-gray-800 mb-4">
              Credible reputation as a full Service Provider and Event
              Management
            </h3>
            <p className="text-gray-600 text-sm mb-4 font-red-hat-display">
              Established in 2008, Party Lounges has built a credible reputation
              as a full Service Provider and Event Management company that
              offers a wide breadth of experience, knowledge, and
              professionalism. Our team of professionals has an average of
              eight years of experience in the convention, meeting, and event
              industry. Our range of services includes all aspects of planning,
              offered as a full package or could be tailor-made to a client’s
              specifications.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1560184897-0e5d96d86acd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UnVzdGljJTIwRnVybml0dXJlfGVufDB8fDB8fHww"
              alt="Event Management Setup"
              className="rounded-lg shadow-lg w-full object-cover h-64 desktop:h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExperienceSection;
