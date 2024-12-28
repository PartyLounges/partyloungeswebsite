import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed font-red-hat-display bottom-6 right-6 md:right-12 bg-theme-brown text-theme-white p-4 rounded-full shadow-lg hover:bg-theme-white hover:text-theme-brown focus:outline-none transition-colors duration-300 text-3xl"
      >
        ↑
      </button>
    )
  );
};

export default BackToTopButton;
