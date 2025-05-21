import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Client logos array
  const clientLogos = [
    { name: "University of Mindanao", src: "/partnership/um.svg" },
    {
      name: "Dctech Micro Services",
      src: "/partnership/dctech.svg"
    },
    { name: "MIO", src: "/partnership/unknownlogo1.svg" },
    { name: "HIOKI", src: "/partnership/hioki.svg" },
    { name: "SMU", src: "/partnership/smu.svg" },
    { name: "Shock & Awe Trading", src: "/partnership/shock.svg" },
    { name: "MT", src: "/partnership/unknownlogo2.svg" },
    {
      name: "Linnhoff Technologies",
      src: "/partnership/linnhoff.svg"
    },
    { name: "Medical Logo", src: "/partnership/udshmc.svg" },
    { name: "Compass", src: "/partnership/dmsf.svg" },
    { name: "Focus Chemistry", src: "/partnership/fucoschem.svg" },
    { name: "Circular Logo", src: "/partnership/kabacan.svg" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#000028] via-[#020247] to-[#000051] overflow-hidden">
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
          ABOUT US
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
            clipPath: "polygon(0 0, 50% 15%, 100% 0, 100% 80%, 50% 100%, 0 80%)"
          }}
        />

        {/* Company Profile Content inside the textured area */}
        <div className="container mx-auto px-4 pt-50 pb-24 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#010170] text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            COMPANY PROFILE
          </motion.h2>
          <div className="max-w-4xl mx-auto text-center text-[#010170]">
            <motion.p
              className="text-lg mb-15"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Founded by an industry software developer in 2016,{" "}
              <span className="font-bold text-[#010170]">
                Mediaone Software Solutions
              </span>{" "}
              is a team of dedicated software developers and technology
              enthusiast based in Davao City, Philippines.
            </motion.p>

            <motion.p
              className="text-lg mb-15"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We pride ourselves on having the skills to integrate cross
              disciplinary experience into each project, taking advantage of our
              thirst for new and innovative ideas in order to bring out a wide
              variety of business solutions.
            </motion.p>

            <motion.p
              className="text-lg mb-15"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Mediaone Software Solutions specializes in expert web systems,
              integrated web and mobile applications, business process systems
              and business automation systems in healthcare and education.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] hover:bg-blue-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                100+ SUCCESSFUL PROJECTS
              </motion.div>
              <motion.div
                className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] hover:bg-blue-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                15 PARTNERSHIPS/CLIENTS
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-10"></div>
      {/* Navy blue section with OUR CLIENTS/PARTNERS heading */}
      <div className="relative w-full">
        {/* Top white to navy blue diagonal cut */}
        <div className="w-full mb-40 relative overflow-hidden">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            OUR CLIENTS/PARTNERS
          </motion.h2>
        </div>

        {/* Client logos section with no background, positioned on top of texture */}
        <div className="container mx-auto px-4 py-16 relative z-20">
          {/* First row - 5 logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {clientLogos.slice(0, 5).map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center h-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-30 max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* Second row - 4 logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {clientLogos.slice(5, 9).map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center h-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-30 max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* Third row - 3 logos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientLogos.slice(9, 12).map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center h-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-30 max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{
            backgroundImage: 'url("/Texture.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(0 0, 50% 15%, 100% 0, 100% 80%, 50% 100%, 0 80%)"
          }}
        />
        {/* Bottom navy blue section */}
        <div className="w-full pt-40 pb-10 relative">
          {/* Top diagonal white edge */}
          <div
            className="absolute top-0 left-0 w-full h-48"
            style={{
              backgroundColor: "white",
              clipPath: "polygon(0 0, 100% 0, 50% 100%, 0 0)"
            }}
          />
        </div>
      </div>
      <div className="h-25"></div>
    </div>
  );
};

export default About;
