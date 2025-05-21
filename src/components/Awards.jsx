import React from "react";
import { motion } from "framer-motion";

const awardsData = [
  {
    id: 1,
    logo: "/awards/Tech Behemoths.svg",
    title: "TechBehemoths",
    year: "2023-2024 Awardee",
    position: "left"
  },
  {
    id: 2,
    logo: "/awards/Meta.svg",
    title: "Meta Community Partner",
    year: "2023 Awardee",
    position: "right",
    featured: true
  },
  {
    id: 3,
    logo: "/awards/Innovative Developers.svg",
    title: "Most Innovative Web Developers",
    year: "2023 - Mindanao Awardee",
    position: "left"
  },
  {
    id: 4,
    logo: "/awards/Premier Software.svg",
    title: "Premier Software Solutions Company",
    year: "Davao Hot Spot 2024 Awardee",
    position: "right"
  }
];

function Awards() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 md:px-16 bg-[#010170] overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-0 left-0 w-full">
        <div className="text-[80px] sm:text-[100px] md:text-[120px] font-bold text-[#01177e] opacity-80 pointer-events-none text-center pt-4 sm:pt-8 md:pt-6">
          AWARDS
          <div className="absolute top-0 left-0 w-full text-[24px] sm:text-[28px] md:text-[30px] font-bold text-[#ffffff] pointer-events-none text-center pt-16 sm:pt-20 md:pt-23">
            AWARDS & ACCOMPLISHMENTS
          </div>
        </div>
      </div>

      {/* Content */} 
      <div className="relative z-20 max-w-7xl mx-auto mt-20 sm:mt-24 md:mt-32 pt-8 sm:pt-12 md:pt-16">
        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 md:gap-x-24 md:gap-y-24 max-w-6xl mx-auto px-4">
          {awardsData.map((award) => (
            <motion.div
              key={award.id}
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full flex items-center justify-center p-4">
                {/* Award Image Container */}
                <div className="relative flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  {/* Award Logo */}
                  <object
                    data={award.logo}
                    type="image/svg+xml"
                    className={`object-contain z-10 ${
                      award.id === 1 ? "w-[500px] h-[200px]" :
                      award.id === 2 ? "w-[500px] h-[200px]" :
                      award.id === 3 ? "w-[500px] h-[250px]" :
                      award.id === 4 ? "w-[500px] h-[250px]" :
                      "w-[200px] h-[160px]"
                    }`}
                    aria-label={award.title || "Award"}
                  >
                    {/* Fallback for browsers that don't support object */}
                    <img
                      src={award.logo}
                      alt={award.title || "Award"}
                      className="w-full h-full object-contain"
                    />
                  </object>
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
