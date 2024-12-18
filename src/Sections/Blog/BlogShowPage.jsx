import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../../data/blogData";

const BlogShowPage = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <div className="text-center py-12 text-gray-500">Blog not found.</div>;
  }

  return (
    <div className="bg-white">
      {/* Blog Title */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 px-[5%] mt-24 pt-8">Our Blog</h2>

      {/* Blog Image */}
      <div className="w-full px-[5%] py-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[60vh] md:h-[70vh] lg:h-[70vh] object-cover rounded-lg shadow-sm"
        />
      </div>


      {/* Blog Content */}
      <div className="mx-auto px-[5%] tablet:px-[8%] py-12 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{blog.title}</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          {blog.subtitle}
        </p>

        {/* Blog Body */}
        <div className="text-gray-700 leading-7 mb-8">
          {blog.body.split("/n").map((paragraph, index) => {
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <p key={index} className="font-bold mb-8">
                  {paragraph.replace(/\*\*/g, "")}
                </p>
              );
            }
            return (
              <p key={index} className="mb-4">
                {paragraph.trim()}
              </p>
            );
          })}
        </div>

        {/* Author and Date */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t pt-4">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <img
              src={blog.author.image}
              alt={blog.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-gray-800 font-bold">{blog.author.name}</p>
              <p className="text-gray-600 text-sm">{blog.author.title}</p>
            </div>
          </div>

          <div className="text-gray-500 text-sm">
            {blog.date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogShowPage;
