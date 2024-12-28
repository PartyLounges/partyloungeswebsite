import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import blogData from "../../data/blogData";

const BlogSection = () => {
  const [displayedBlogs, setDisplayedBlogs] = useState([]);

  // Function to select 3 random blogs
  const getRandomBlogs = () => {
    const shuffledBlogs = [...blogData].sort(() => Math.random() - 0.5);
    return shuffledBlogs.slice(0, 3);
  };

  // Update blogs initially and every 10 seconds
  useEffect(() => {
    setDisplayedBlogs(getRandomBlogs()); // Initial random blogs

    const interval = setInterval(() => {
      setDisplayedBlogs(getRandomBlogs());
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto px-[5%] tablet:px-[8%]">
        <h2 className="text-2xl font-proximanova-bold mb-8 text-gray-800">Read our Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedBlogs.map((blog, index) => (
              <motion.div
                key={blog.id} // Use a unique key for AnimatePresence
                className="bg-white rounded-lg shadow-lg shadow-gray-500/50 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -50,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }}
              >
                <Link to={`/blog/${blog.id}`}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <Link to={`/blog/${blog.id}`}>
                    <h3 className="text-xl font-proximanova-bold mb-2 text-gray-800">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4 font-red-hat-display">{blog.description}</p>
                  <p className="text-gray-500 text-sm mb-4 font-red-hat-display">{blog.date}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={blog.author.image}
                      alt={blog.author.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-gray-800 font-red-hat-display">{blog.author.name}</p>
                      <p className="text-gray-600 font-red-hat-display text-sm">{blog.author.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
