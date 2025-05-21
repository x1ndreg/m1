import React, { useState } from "react";
import { motion } from "framer-motion";

function Services() {
  const [activeCard, setActiveCard] = useState(null);

  const serviceDetails = {
    development: {
      title: "DEVELOPMENT",
      items: [
        "Web Application",
        "API Integration",
        "Front & Backend Web Development",
        "IOS App Development",
        "Android App Development"
      ],
      icon: "/development.svg",
      activeIcon: "/development.svg"
    },
    design: {
      title: "DESIGN",
      items: ["UI/UX Design", "Visual Design", "Logo Design"],
      icon: "/design.svg",
      activeIcon: "/design.svg"
    },
    mediaBuy: {
      title: "MEDIA BUY",
      items: [
        "Search Engine Marketing (SEM)",
        "Social Media Marketing (SMM)",
        "Lead Generation"
      ],
      icon: "/mediabuy.svg",
      activeIcon: "/mediaBuy.svg"
    },
    seo: {
      title: "SEO",
      items: ["SEO Subscription", "SEO Audit", "SEO Consultation"],
      icon: "/sEO.svg",
      activeIcon: "/seo.svg"
    },
    engineering: {
      title: "ENGINEERING SERVICES",
      items: [
        "Auxiliary Services",
        "Structured Cabling",
        "Fire Alarm Systems",
        "Solar Panel System",
        "Security System",
        "Building Automation",
        "Industrial Machine",
        "Nurse Call",
        "CCTV"
      ],
      icon: "/engineering.svg",
      activeIcon: "/engineering.svg"
    }
  };

  return (
    <section
      id="services"
      className="relative min-h-screen w-full py-12 sm:py-16 md:py-20 px-4 md:px-16 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url("Texture.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1
        }}
      />
      {/* Top Corner Design */}
      <div className="absolute top-0 left-0 w-1/4 sm:w-1/5">
        <img
          src="top corner bg.svg"
          alt="Top Corner Design"
          className="w-full h-full object-contain"
        />
      </div>
      {/* Bottom Corner Design */}
      <div className="absolute bottom-0 right-0 w-1/4 sm:w-1/5">
        <img
          src="bottom corner bg.svg"
          alt="Bottom Corner Design"
          className="w-full h-full object-contain"
        />
      </div>
      {/* Background Text */}
      <motion.div
        className="absolute top-0 left-0 w-full text-[80px] sm:text-[100px] md:text-[100px] font-bold text-[#e7ecf8] opacity-80 pointer-events-none text-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        SERVICES
      </motion.div>
      <motion.h2
        className="absolute top-0 left-0 w-full text-[24px] sm:text-[28px] md:text-[30px] font-bold text-[#010170] pointer-events-none text-center pt-16 sm:pt-20 md:pt-17"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        SERVICES
      </motion.h2>
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto mt-16 sm:mt-24 md:mt-32">
        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {Object.entries(serviceDetails).map(([key, service], index) => (
            <motion.div
              key={key}
              className={`rounded-lg shadow-lg cursor-pointer relative overflow-hidden transition-all duration-300 ${
                activeCard === key ? "bg-[#010170]" : "bg-white"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveCard(activeCard === key ? null : key)}
              onMouseEnter={() => setActiveCard(key)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Default state (not hovered) */}
              {activeCard !== key && (
                <div className="p-4 sm:p-6 flex flex-col items-center justify-center h-[200px]">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-3 sm:mb-4"
                  />
                  <h3 className="text-lg sm:text-xl font-bold text-center text-[#000040] mt-2">
                    {service.title}
                  </h3>
                </div>
              )}

              {/* Active state (hovered) */}
              {activeCard === key && (
                <div className="p-4 sm:p-6">
                  <div className="flex">
                    <div className="border-l-2 border-white pl-3 sm:pl-4 w-full">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                        {service.title}
                      </h3>
                      <ul className="space-y-1 sm:space-y-2 text-sm">
                        {service.items.map((item, i) => (
                          <li key={i} className="text-white">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
