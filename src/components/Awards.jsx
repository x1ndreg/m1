import React from "react";
import { motion } from "framer-motion";
import { useAppContent } from "../context/AppContent";

function Awards() {
  const { awards: awardsContent } = useAppContent();

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 md:px-16 bg-[#010170] overflow-hidden">
      <div className="absolute top-0 left-0 w-full">
        <motion.div
          className="text-[80px] sm:text-[100px] md:text-[120px] font-bold text-[#01177e] opacity-80 pointer-events-none text-center pt-4 sm:pt-8 md:pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {awardsContent.title}
          <motion.div
            className="absolute top-0 left-0 w-full text-[24px] sm:text-[28px] md:text-[30px] font-bold text-[#ffffff] pointer-events-none text-center pt-16 sm:pt-20 md:pt-23"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {awardsContent.subtitle}
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto mt-20 sm:mt-24 md:mt-32 pt-8 sm:pt-12 md:pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 md:gap-x-24 md:gap-y-24 max-w-6xl mx-auto px-4">
          {awardsContent.awards.map((award) => (
            <motion.div
              key={award.id}
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full flex items-center justify-center p-4">
                <div className="relative flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <img
                    src={award.logo}
                    alt="Award"
                    className={`object-contain z-10 ${
                      award.id === 1
                        ? "max-h-[100px] sm:max-h-[120px] md:max-h-[200px]"
                        : award.id === 2
                        ? "max-h-[80px] sm:max-h-[100px] md:max-h-[200px]"
                        : award.id === 3
                        ? "max-h-[120px] sm:max-h-[140px] md:max-h-[245px]"
                        : award.id === 4
                        ? "max-h-[120px] sm:max-h-[110px] md:max-h-[260px] pt-3"
                        : "max-h-[100px] sm:max-h-[120px] md:max-h-[220px]"
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
