import React from "react";
import { motion } from "framer-motion";
import { useAppContent } from "../context/AppContent";

function About() {
  const { about } = useAppContent();

  return (
    <motion.section
      id="about"
      className="relative z-10 min-h-screen w-full py-12 sm:py-16 md:py-20 px-4 md:px-16 bg-[#060859]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="absolute top-0 left-0 w-full">
        <motion.div
          className="text-[80px] sm:text-[100px] md:text-[100px] font-bold text-[#01177e] opacity-80 pointer-events-none text-center pt-4 sm:pt-8 md:pt-15"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {about.title}
          <motion.div
            className="absolute top-0 left-0 w-full text-[24px] sm:text-[28px] md:text-[30px] font-bold text-[#ffffff] pointer-events-none text-center pt-16 sm:pt-20 md:pt-28"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {about.subtitle}
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto mt-32 sm:mt-40 md:mt-60">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12 md:mb-16 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          <motion.div
            className="relative h-[300px] sm:h-[350px] md:h-[400px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="bg-gray-300 rounded-lg overflow-hidden absolute top-0 left-0 w-[60%] h-[60%] shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={about.images[0].src}
                alt={about.images[0].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="bg-gray-300 rounded-lg overflow-hidden absolute bottom-0 right-0 w-[60%] h-[60%] shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={about.images[1].src}
                alt={about.images[1].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="space-y-4 sm:space-y-6 md:space-y-8 text-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg">
                {paragraph}
              </p>
            ))}
            <motion.button
              className="mt-4 sm:mt-6 md:mt-8 px-4 sm:px-6 md:px-8 py-2 md:py-3 bg-transparent border border-[#0066FF] text-white rounded-xl hover:bg-[#0066FF] transition-all duration-300 text-sm md:text-base font-medium block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {about.buttonText}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
