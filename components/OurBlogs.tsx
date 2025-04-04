"use client";
import React from "react";
import { motion } from "framer-motion";

const OurBlogs = () => {
  const blogs = [
    {
      title: "The Future of Digital Libraries",
      shortDescription:
        "Explore how AI, cloud computing, and blockchain are transforming digital libraries for a smarter reading experience.",
      date: "2025-04-04",
      likes: 120,
      comments: 18,
      author: "Md. Parvaj Mosharof",
      tags: ["AI", "Digital Library", "Future Tech"],
      readingTime: "5 min",
    },
    {
      title: "How to Make the Most of Online Research Papers",
      shortDescription:
        "Learn strategies for effectively searching, organizing, and citing online research papers for academic success.",
      date: "2025-03-28",
      likes: 98,
      comments: 12,
      author: "John Doe",
      tags: ["Research", "Academic Writing", "Online Learning"],
      readingTime: "4 min",
    },
    {
      title: "Why Open-Source Authentication Matters in Libraries",
      shortDescription:
        "Discover the benefits of open-source authentication systems in digital libraries and how they enhance security.",
      date: "2025-03-20",
      likes: 75,
      comments: 9,
      author: "Jane Smith",
      tags: ["Security", "Open Source", "User Authentication"],
      readingTime: "6 min",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">
          Our Blogs
        </h2>
        <p className="text-center text-gray-200 mb-12 max-w-2xl mx-auto">
          Stay informed and inspired with our latest blogs on digital libraries,
          research strategies, and tech innovations. Explore expert insights,
          tips, and trends to enhance your reading and learning experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group h-full"
            >
              <div className="relative overflow-hidden rounded-xl backdrop-blur-md bg-black/30 shadow-lg border border-primary p-6 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-gray-100">{blog.date}</span>
                    <span className="text-sm text-gray-100">•</span>
                    <span className="text-sm text-gray-100">
                      {blog.readingTime}
                    </span>
                  </div>

                  <motion.h3
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors text-white"
                  >
                    {blog.title}
                  </motion.h3>

                  <motion.p
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-200 mb-4 line-clamp-3"
                  >
                    {blog.shortDescription}
                  </motion.p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-blue-100/20 text-blue-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-200">{blog.author}</span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 text-gray-100"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        <span className="text-sm text-gray-100">
                          {blog.likes}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 text-gray-100"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <span className="text-sm text-gray-100">
                          {blog.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
