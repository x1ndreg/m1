import React from "react";
import { motion } from "framer-motion";
import { useAppContent } from "../context/AppContent";

function Blog() {
  const { blog: blogContent } = useAppContent();

  return (
    <section
      id="blog"
      className="relative w-full py-12 sm:py-16 md:py-20 px-4 md:px-16 bg-gray-50 overflow-hidden"
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url("${blogContent.backgroundImages.texture}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1
        }}
      />

      <div className="absolute top-0 right-0 w-1/4 sm:w-1/5">
        <img
          src={blogContent.backgroundImages.topRightCorner}
          alt="Blue Curve"
          className="w-full h-full object-cover object-right-top"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-1/4 sm:w-1/5">
        <img
          src={blogContent.backgroundImages.bottomLeftCorner}
          alt="Blue Curve"
          className="w-full h-full object-cover object-left-bottom"
        />
      </div>
      <motion.div
        className="absolute top-0 left-0 w-full text-[80px] sm:text-[100px] md:text-[100px] font-bold text-[#e7ecf8] opacity-80 pointer-events-none mt-2 pl-4 sm:pl-12 md:pl-23 pt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-left">{blogContent.title}</div>
      </motion.div>
      <motion.h2
        className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-[#010170] text-left sm:pl-34 sm:mb-12 md:mb-15"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {blogContent.subtitle}
      </motion.h2>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto mt-10 sm:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {blogContent.posts.map((post, index) => (
            <motion.div
              key={post.id}
              className="rounded-lg overflow-hidden shadow-lg relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 sm:h-80 md:h-[400px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(31,20,100,0)] via-[rgba(60,40,150,0.3)] to-[#31328a]"></div>
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-[#010170] text-white text-xs font-semibold py-1 px-2 sm:px-3 rounded">
                  {post.date}
                </div>
                <div className="absolute bottom-12 sm:bottom-16 left-0 right-0 px-4 sm:px-6 text-white">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 drop-shadow-md text-center">
                    {post.title}
                  </h3>
                </div>
                <div className="absolute bottom-3 sm:bottom-6 left-0 right-0 flex justify-center">
                  <a
                    href={post.link}
                    className="inline-flex items-center justify-center bg-[#010170] text-white text-xs sm:text-sm font-medium py-1.5 sm:py-2 px-3 sm:px-4 rounded-md hover:bg-[#0101a0] transition-colors"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 sm:h-4 sm:w-4 ml-1"
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
      </div>
    </section>
  );
}

export default Blog;
