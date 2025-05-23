import React from "react";
import { motion } from "framer-motion";
import { useAppContent } from "../context/AppContent";

function Portfolio() {
  const { portfolio } = useAppContent();
  
  return (
    <section
      id="portfolio"
      className="relative min-h-screen w-full py-12 sm:py-16 md:py-20 px-4 md:px-16 bg-[#010170] overflow-hidden"
    >
      <motion.div
        className="absolute top-0 left-0 w-full text-[80px] sm:text-[100px] md:text-[100px] font-bold text-[#01127b] opacity-80 pointer-events-none mt-5 pl-4 sm:pl-12 md:pl-11"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-left">{portfolio.title}</div>
      </motion.div>
      <motion.h2
        className="relative text-2xl sm:text-3xl md:text-2xl font-bold text-[#cdcede] text-left pl-4 sm:pl-7 mb-8 sm:mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {portfolio.subtitle}
      </motion.h2>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto mt-10 sm:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {portfolio.items.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-55 group-hover:brightness-100"
                />
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
