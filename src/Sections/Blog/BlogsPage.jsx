import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const BlogsPage = () => {
  const blogData = [
    {
      id: 1,
      title: "The History of Decor: A Journey Through Time",
      image: "https://images.unsplash.com/photo-1606422315127-d6406a336564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Decor, the art of adorning spaces, has evolved dramatically over the centuries, reflecting cultural, technological, and artistic trends.",
      date: "March 13, 2024",
      author: {
        name: "Patricia Mwalimu",
        title: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGluZyUyMGJsYWNrJTIwcGVyc29ufGVufDB8fDB8fHww",
      },
    },
    {
      id: 2,
      title: "Event Planning Essentials: From Vision to Execution",
      image: "https://plus.unsplash.com/premium_photo-1682259920062-d30783ac0375?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Planning an event can be overwhelming. Discover the secrets to turning your vision into reality with organized planning.",
      date: "March 18, 2024",
      author: {
        name: "Kelvin Kuria",
        title: "Head Event Planner",
        image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGluZyUyMGJsYWNrJTIwcGVyc29ufGVufDB8fDB8fHww",
      },
    },
    {
      id: 3,
      title: "Top 5 Lighting Trends for Your Next Event",
      image: "https://images.unsplash.com/photo-1606422315116-2c1b86cbf071?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lighting sets the mood for any event. Learn about the top 5 lighting trends that will transform your event space.",
      date: "March 20, 2024",
      author: {
        name: "Lucy Kamau",
        title: "Lighting Expert",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGluZyUyMGJsYWNrJTIwcGVyc29ufGVufDB8fDB8fHww",
      },
    },
    {
      id: 4,
      title: "Choosing the Perfect Event Venue: A Comprehensive Guide",
      image: "https://images.unsplash.com/photo-1606422315127-d6406a336564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Choosing the right venue is critical to your event's success. Here's how to pick a perfect location for any occasion.",
      date: "April 1, 2024",
      author: {
        name: "Byron Mwoley",
        title: "Venue Specialist",
        image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGluZyUyMGJsYWNrJTIwcGVyc29ufGVufDB8fDB8fHww",
      },
    },
    {
      id: 5,
      title: "Transforming Spaces: Decor Ideas for Corporate Events",
      image: "https://plus.unsplash.com/premium_photo-1682259920062-d30783ac0375?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Corporate events don’t have to be boring. Get creative decor ideas to transform spaces and wow your guests.",
      date: "April 5, 2024",
      author: {
        name: "Cecilia Mwangi",
        title: "Corporate Event Designer",
        image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGluZyUyMGJsYWNrJTIwcGVyc29ufGVufDB8fDB8fHww",
      },
    },
    {
      id: 6,
      title: "Outdoor Events: Tips to Make Your Event Unforgettable",
      image: "https://images.unsplash.com/photo-1606422315116-2c1b86cbf071?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Hosting an outdoor event? Learn essential tips to make your gathering fun, memorable, and weatherproof.",
      date: "April 10, 2024",
      author: {
        name: "Nemwel Boniface",
        title: "Event Coordinator",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGluZyUyMGJsYWNrJTIwcGVyc29ufGVufDB8fDB8fHww",
      },
    },
    {
      id: 7,
      title: "How to Choose the Right Furniture for Your Event",
      image: "https://images.unsplash.com/photo-1606422315127-d6406a336564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Furniture plays a significant role in guest comfort and event aesthetics. Here's how to pick the perfect pieces.",
      date: "April 15, 2024",
      author: {
        name: "John Kamau",
        title: "Furniture Expert",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGluZyUyMGJsYWNrJTIwcGVyc29ufGVufDB8fDB8fHww",
      },
    },
    {
      id: 8,
      title: "The Ultimate Checklist for Planning a Wedding",
      image: "https://plus.unsplash.com/premium_photo-1682259920062-d30783ac0375?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGRlY29yc3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Planning a wedding can be stressful. Use our ultimate checklist to make your dream wedding come to life.",
      date: "April 20, 2024",
      author: {
        name: "Sarah Hassan",
        title: "Wedding Planner",
        image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21pbGluZyUyMGJsYWNrJTIwcGVyc29ufGVufDB8fDB8fHww",
      },
    },
    {
      id: 9,
        title: "10 Unique Themes for Your Next Birthday Bash",
        image: "https://images.unsplash.com/photo-1505114643939-2b179ccc6430?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "From tropical vibes to 90's throwback parties, discover 10 creative themes that will make your birthday unforgettable!",
        date: "April 25, 2024",
        author: {
          name: "Sarah Muthui",
          title: "Event Theme Specialist",
          image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=60",
        },
      },
      {
        id: 10,
        title: "How to Organize a Stress-Free Conference",
        image: "https://plus.unsplash.com/premium_photo-1724753996058-6f46e8e77f0e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3RyZXNzJTIwRnJlZSUyMENvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D",
        description:
          "Organizing a conference doesn’t have to be chaotic. Follow our step-by-step guide for a stress-free experience.",
        date: "April 28, 2024",
        author: {
          name: "Kevin Mwangangi",
          title: "Corporate Event Manager",
          image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&auto=format&fit=crop&q=60",
        },
      },
      {
        id: 11,
        title: "Top 5 Must-Have Features for a Stunning Event Lounge",
        image: "https://images.unsplash.com/photo-1557804506-d8017c1e4856?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RXZlbnQlMjBMb3VuZ2V8ZW58MHx8MHx8fDA%3D",
        description:
          "What makes an event lounge stand out? Here are the top 5 must-have features for a luxurious and inviting space.",
        date: "May 2, 2024",
        author: {
          name: "Rachel Ngotho",
          title: "Lounge Design Specialist",
          image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=60",
        },
      },
      {
        id: 12,
        title: "Budget-Friendly Event Planning: 7 Tips to Save Costs",
        image: "https://images.unsplash.com/photo-1500336624523-d727130c3328?w=400&auto=format&fit=crop&q=60",
        description:
          "Event planning on a budget? Learn these 7 tips to create an unforgettable event without breaking the bank.",
        date: "May 5, 2024",
        author: {
          name: "Tom Omondi",
          title: "Event Budget Advisor",
          image: "https://images.unsplash.com/photo-1603415526960-f7e0328c4b02?w=400&auto=format&fit=crop&q=60",
        },
      },
      {
        id: 13,
        title: "Why Photo Booths Are the Life of Every Party",
        image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&auto=format&fit=crop&q=60",
        description:
          "Photo booths bring fun and excitement to any event. Find out why they’re a must-have for weddings, birthdays, and corporate parties.",
        date: "May 8, 2024",
        author: {
          name: "Adullahi Muhamad",
          title: "Event Experience Specialist",
          image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=60",
        },
      },
      {
        id: 14,
        title: "The Rise of Sustainable Events: Eco-Friendly Trends",
        image: "https://images.unsplash.com/photo-1529832588601-c01e066263a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Sustainability is reshaping event planning. Discover eco-friendly decor, catering, and strategies for greener events.",
        date: "May 12, 2024",
        author: {
          name: "Charles Kiptanui",
          title: "Sustainability Consultant",
          image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&auto=format&fit=crop&q=60",
        },
      },
      {
        id: 15,
        title: "Creating Instagram-Worthy Event Decor: Tips & Tricks",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Want your event to go viral on social media? These tips will help you create decor that’s stunning and shareable.",
        date: "May 15, 2024",
        author: {
          name: "Resian Lucy",
          title: "Social Media Strategist",
          image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=60",
        },
      },
      {
        id: 16,
        title: "Top 6 Event Catering Trends You Need to Try",
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "From grazing tables to molecular gastronomy, here are the hottest catering trends for your next big event.",
        date: "May 20, 2024",
        author: {
          name: "Oliver Mulikuza",
          title: "Catering Specialist",
          image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&auto=format&fit=crop&q=60",
        },
      },
  ];
  

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
        <h2 className="text-2xl font-bold mb-8 text-gray-800 text-left py-12">
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
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            {blog.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
        <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
        {/* Author Info */}
        <div className="flex items-center gap-4">
          <img
            src={blog.author.image}
            alt={blog.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-gray-800 font-bold">
              {blog.author.name}
            </p>
            <p className="text-gray-600 text-sm">
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
            className={`p-2 rounded-full border ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
            }`}
          >
            ←
          </button>
          <span className="text-gray-600 text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full border ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
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