import React from "react";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    title: "Singapore Management University",
    description:
      "Founded by an industry software developer in 2016, MediaOne Software Solutions is a team of dedicated software developers...",
    image: "portfolio/SMU.png",
    category: "web"
  },
  {
    id: 2,
    title: "Fertilizer Calculator App",
    description:
      "Is a mobile application developed to determine the amount of fertilizer needed to satisfy the recommended rate from a given soil test result and the crop to be planted in the Philippines. Based on the selected combination of fertilizer grades, various fertilizer recommendations are generated but only the best combination is suggested to be adopted as other options may have either excess or insufficiency in nutrient. Fertilizer application rates are based on the research from the Department of Soil Science, University of the Philippines Los Baños, Laguna, in cooperation with the National Food and Agricultural Council.",
    image: "portfolio/Fertilizer Calculator App.png",
    category: "mobile",
    featured: true,
    badge: "E"
  },
  {
    id: 3,
    title: "Cyber Security Audit for Various Systems",
    description:
      "MediaOne Software Solutions performed a review and assessment of an organization's information security and technology systems...",
    image: "portfolio/cyber.png",
    category: "security"
  },
  {
    id: 4,
    title: "Application Development for New Systems",
    description:
      "We specialize in modernizing legacy systems through innovative application development...",
    image: "portfolio/delmonte.png",
    category: "development"
  },
  {
    id: 5,
    title: "ELITED Asia",
    description:
      "Created the Web Application for a leading recruitment firm for simplifying the hiring process...",
    image: "portfolio/lifted.png",
    category: "web",
    badge: "NEWS"
  },
  {
    id: 6,
    title: "HRISONE",
    description:
      "Created a comprehensive HRIS (Human Resource Information System) for Government and Private Institutions...",
    image: "portfolio/hris.png",
    category: "hris"
  }
];

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative min-h-screen w-full py-12 sm:py-16 md:py-20 px-4 md:px-16 bg-[#010170] overflow-hidden"
    >
      {/* Background Title */}
      <motion.div
        className="absolute top-0 left-0 w-full text-[80px] sm:text-[100px] md:text-[100px] font-bold text-[#01127b] opacity-80 pointer-events-none mt-5 pl-4 sm:pl-12 md:pl-11"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-left">WORKS</div>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        className="relative text-2xl sm:text-3xl md:text-2xl font-bold text-[#cdcede] text-left pl-4 sm:pl-7 mb-8 sm:mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        SOME OF OUR WORKS
      </motion.h2>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto mt-10 sm:mt-16">
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-55 group-hover:brightness-100"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 sm:line-clamp-3">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
