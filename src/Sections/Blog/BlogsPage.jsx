import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import blogData from "../../data/blogData";

const BlogsPage = () => {
  // Pagination Logic
  const blogsPerPage = {
    desktop: 9,
    tablet: 7,
    mobile: 5,
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalBlogs = blogData.length;
  const maxBlogs = blogsPerPage.desktop; 

  const startIndex = (currentPage - 1) * maxBlogs;
  const endIndex = startIndex + maxBlogs;
  const currentBlogs = blogData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(totalBlogs / maxBlogs);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto px-[5%] tablet:px-[8%]">
        {/* Section Title */}
        <h2 className="text-2xl font-proximanova-bold mb-8 text-gray-800 text-left py-12">
          Our Latest Blogs
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {currentBlogs.map((blog, index) => (
    <motion.div
      key={index}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        delay: index * 0.2,
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
    >
      {/* Blog Image */}
      <Link to={`/blog/${blog.id}`}>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover"
        />
      </Link>
      {/* Blog Content */}
      <div className="p-6">
        <Link to={`/blog/${blog.id}`}>
          <h3 className="text-xl font-proximanova-bold mb-2 text-gray-800">
            {blog.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 font-red-hat-display">{blog.description}</p>
        <p className="text-gray-500 text-sm mb-4 font-red-hat-display">{blog.date}</p>
        {/* Author Info */}
        <div className="flex items-center gap-4">
          <img
            src={blog.author.image}
            alt={blog.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-gray-800 font-red-hat-display">
              {blog.author.name}
            </p>
            <p className="text-gray-600 text-sm font-red-hat-display">
              {blog.author.title}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 gap-8">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`p-2 rounded-full font-red-hat-display border ${
              currentPage === 1 ? "opacity-50 font-red-hat-display cursor-not-allowed" : "hover:bg-gray-200"
            }`}
          >
            ←
          </button>
          <span className="text-gray-600 text-lg font-red-hat-display">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 font-red-hat-display rounded-full border ${
              currentPage === totalPages
                ? "opacity-50 font-red-hat-display cursor-not-allowed"
                : "hover:bg-gray-200 font-red-hat-display"
            }`}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;