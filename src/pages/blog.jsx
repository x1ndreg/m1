import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  // Blog posts array - using the same data from your Blog component
  const blogPosts = [
    {
      id: 1,
      title: "Unleashing Innovation with Custom Software Development Solutions",
      image: "/blogs/image (1).png",
      date: "OCTOBER 22, 2024",
      link: "/blog/custom-software-development",
      content: "In today's fast-paced digital world, businesses that fail to innovate risk being left behind. But let's be honest, innovation isn't just about adding some flashy feature or chasing the latest tech trend. It's about crafting custom software solutions that genuinely improve operations, boost efficiency, and (dare we say) give companies a competitive edge. And that's exactly where a reliable software development solutions company steps in."
    },
    {
      id: 2,
      title: "How CRM Software Transforms Your Customer Relationships",
      image: "/blogs/image (2).png",
      date: "OCTOBER 23, 2024",
      link: "/blog/crm-software"
    },
    {
      id: 3,
      title: "Why Project Management Software Is the Backbone of Modern Business",
      image: "/blogs/image (3).png",
      date: "OCTOBER 24, 2024",
      link: "/blog/project-management-software"
    },
    {
      id: 4,
      title: "Why Every Business Needs a Content Management System (CMS)",
      image: "/blogs/image (4).png",
      date: "OCTOBER 25, 2024",
      link: "/blog/content-management-system"
    }
  ];

  // Recent blogs (for sidebar)
  const recentBlogs = blogPosts.slice(1, 4);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#000028] via-[#000000] to-[#00005a] overflow-hidden">
      {/* Navbar spacer */}
      <div className="h-28"></div>

      {/* Header */}
      <div className="container mx-auto px-4 py-5 text-center mb-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          BLOG
        </motion.h1>
      </div>

      {/* Content section with texture and cutout */}
      <div className="relative">
        {/* Background texture with triangle cutout */}
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{
            backgroundImage: 'url("/Texture.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(0 0, 50% 10%, 100% 0, 100% 80%, 50% 100%, 0 80%)"
          }}
        />

        {/* Blog Content inside the textured area */}
        <div className="container mx-auto px-4 pt-50 pb-60 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content - Featured Blog Post */}
              <motion.div
                className="w-full lg:w-2/3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="rounded-lg overflow-hidden"
                  transition={{ duration: 0.3 }}
                >
                  {/* Content */}
                  <div className="p-6">
                    <motion.h2
                      className="text-4xl font-bold text-[#010170] mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {blogPosts[0].title}
                    </motion.h2>
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <span className="bg-[#010170] text-white text-xs font-semibold py-1 px-3 rounded">
                        {blogPosts[0].date}
                      </span>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.div
                      className="relative mb-4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <img
                        src={blogPosts[0].image}
                        alt={blogPosts[0].title}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </motion.div>

                    <motion.p
                      className="text-[#010170] mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {blogPosts[0].content}
                    </motion.p>

                    {/* Centered Read More button with animation */}
                    <motion.div
                      className="flex justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    ></motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Sidebar - Recent Blogs with gradient cards */}
              <motion.div
                className="w-full lg:w-1/3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h3
                  className="text-2xl font-bold text-[#010170] mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Recent Blogs
                </motion.h3>
                <div className="space-y-4">
                  {recentBlogs.map((post, index) => (
                    <motion.div
                      key={post.id}
                      className="rounded-lg overflow-hidden shadow-lg relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px rgba(1, 1, 112, 0.2)"
                      }}
                    >
                      {/* Image with gradient overlay */}
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Linear gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(31,20,100,0)] via-[rgba(60,40,150,0.3)] to-[#31328a]"></div>

                        {/* Date badge */}
                        <div className="absolute top-2 left-2 bg-[#010170] text-white text-xs font-semibold py-1 px-2 rounded">
                          {post.date}
                        </div>

                        {/* Title on image */}
                        <div className="absolute bottom-8 left-0 right-0 px-3 text-white">
                          <h4 className="text-sm font-bold mb-1 line-clamp-2 drop-shadow-md">
                            {post.title}
                          </h4>
                        </div>

                        {/* Read More button */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                          <a
                            href={post.link}
                            className="inline-flex items-center justify-center bg-[#010170] text-white text-xs font-medium py-1 px-2 rounded-md hover:bg-[#0101a0] transition-colors"
                          >
                            Read More
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 ml-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-60"></div>
    </div>
  );
};

export default Blog;
