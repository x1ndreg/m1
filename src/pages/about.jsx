import React from "react";
import { motion } from "framer-motion";
import { useAppContent } from "../context/AppContent";

const About = () => {
  const { pages } = useAppContent();
  const aboutPage = pages.about;
  
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#000028] via-[#020247] to-[#000051] overflow-hidden">
      <div className="h-28"></div>
      <div className="container mx-auto px-4 py-5 text-center mb-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {aboutPage.title}
        </motion.h1>
      </div>
      <div className="relative">
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{
            backgroundImage: 'url("/Texture.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(0 0, 50% 15%, 100% 0, 100% 80%, 50% 100%, 0 80%)"
          }}
        />
        <div className="container mx-auto px-4 pt-50 pb-24 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#010170] text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {aboutPage.companyProfile.title}
          </motion.h2>
          <div className="max-w-4xl mx-auto text-center text-[#010170]">
            {aboutPage.companyProfile.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg mb-15"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                {index === 0 && (
                  <>
                    {paragraph.split("Mediaone Software Solutions")[0]}
                    <span className="font-bold text-[#010170]">
                      Mediaone Software Solutions
                    </span>
                    {paragraph.split("Mediaone Software Solutions")[1]}
                  </>
                )}
                {index !== 0 && paragraph}
              </motion.p>
            ))}

            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {aboutPage.companyProfile.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] hover:bg-blue-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {stat}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-10"></div>
      <div className="relative w-full">
        <div className="w-full mb-40 relative overflow-hidden">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {aboutPage.partners.title}
          </motion.h2>
        </div>
        <div className="container mx-auto px-4 py-16 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {aboutPage.partners.logos.slice(0, 5).map((logo, index) => (
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {aboutPage.partners.logos.slice(5, 9).map((logo, index) => (
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutPage.partners.logos.slice(9, 12).map((logo, index) => (
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
        <div className="w-full pt-40 pb-10 relative">
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
