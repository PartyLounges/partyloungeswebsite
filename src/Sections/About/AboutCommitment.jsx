import { motion } from "framer-motion";
import React from "react";

const AboutCommitment = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.2 },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="relative w-full h-[75vh] md:h-[75vh] lg:h-[85vh] flex items-center justify-center bg-cover bg-center pt-15 md:pt-18 lg:pt-20"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1733864775775-4c92c128c7e4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q296eSUyMGxpdmluZyUyMHJvb20lMjB3aXRoJTIwZmlyZXBsYWNlJTJDJTIwaGFyZHdvb2QlMjBmbG9vcnMlMkMlMjBhbmQlMjB2aW50YWdlJTIwZnVybml0dXJlfGVufDB8fDB8fHww')",
      }}
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text Content */}
      <motion.div
        className="relative text-center text-white px-4 max-w-4xl mx-auto"
        variants={textVariant}
      >
        <h1 className="text-left text-32 font-bold tablet:text-40 desktop:text-48 font-proximanova-bold mb-2">
          Looking Ahead: Our Commitment To You
        </h1>
        <p className="text-left text-18 font-bold font-proximanova-bold">
          As we continue to grow, our mission remains clear: to curate holistic event platforms that drive meaningful 
          engagement and create moments that matter. Whether you're planning an intimate gathering, a corporate brand 
          experience, or a grand celebration, we are here to make it extraordinary.
        </p>

        <p className="text-left text-18 font-bold font-proximanova-bold py-5">
          Your vision is our inspiration, and we can't wait to craft something magical together. Thank you for being part of our 
          story—we look forward to being part of yours.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutCommitment;


