import React from "react";
import { motion } from "framer-motion";

function Services() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
          {Object.entries(serviceDetails).map(([key, service], index) => (
            <motion.div
              key={key}
              className="relative overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card Header with Title and Icon - With White Background */}
              <div className="p-5 flex flex-col items-center justify-center bg-white rounded-t-lg">
                {/* Title now comes before the image */}
                <h3 className="text-xl font-bold text-center text-[#010170] mb-4">
                  {service.title}
                </h3>
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                />
              </div>

              {/* Card Body with List of Services - No Background */}
              <div className="p-5 bg-[#010170] text-white rounded-b-lg">
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-white rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
