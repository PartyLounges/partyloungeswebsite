import React from "react";

const BlogSection = () => {
  const blogData = [
    {
      title: "The History of Decor: A Journey Through Time",
      image: "https://images.unsplash.com/photo-1606422315127-d6406a336564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Decor, the art of adorning spaces, has evolved dramatically over the centuries, reflecting cultural, technological, and artistic trends.",
      date: "March 13, 2024",
      author: {
        name: "Jane Doe",
        title: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGluZyUyMGJsYWNrJTIwcGVyc29ufGVufDB8fDB8fHww",
      },
    },
    {
      title: "The History of Decor: A Journey Through Time",
      image: "https://plus.unsplash.com/premium_photo-1682259920062-d30783ac0375?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Decor, the art of adorning spaces, has evolved dramatically over the centuries, reflecting cultural, technological, and artistic trends.",
      date: "March 13, 2024",
      author: {
        name: "Jane Doe",
        title: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGluZyUyMGJsYWNrJTIwcGVyc29ufGVufDB8fDB8fHww",
      },
    },
    {
      title: "The History of Decor: A Journey Through Time",
      image: "https://images.unsplash.com/photo-1606422315116-2c1b86cbf071?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Decor, the art of adorning spaces, has evolved dramatically over the centuries, reflecting cultural, technological, and artistic trends.",
      date: "March 13, 2024",
      author: {
        name: "Jane Doe",
        title: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto px-[5%] tablet:px-[8%]">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Read our Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg shadow-gray-500/50 overflow-hidden hover:translate-y-[-5px] transition-transform duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={blog.author.image}
                    alt={blog.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-gray-800 font-bold">{blog.author.name}</p>
                    <p className="text-gray-600 text-sm">{blog.author.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
