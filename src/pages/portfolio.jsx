import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAppContent } from "../context/AppContent";

const PortfolioPage = () => {
  const { pages } = useAppContent();
  const portfolioPage = pages.portfolio;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % portfolioPage.awards.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [portfolioPage.awards.length]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#000028] via-[#000000] to-[#00005a] overflow-hidden">
      <div className="h-28"></div>
      <div className="container mx-auto px-4 py-5 text-center mb-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {portfolioPage.title}
        </motion.h1>
      </div>
      <div className="relative">
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{
            backgroundImage: 'url("/Texture.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(0 0, 50% 4%, 100% 0, 100% 95%, 50% 100%, 0 95%)"
          }}
        />
        <div className="container mx-auto px-4 pt-50 pb-64 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#010170] text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {portfolioPage.subtitle}
          </motion.h2>
          <div className="max-w-7xl mx-auto space-y-6">
            {portfolioPage.projects.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <div className="bg-[#010170] text-white py-2 px-8 rounded-lg w-fit">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
                <div className="bg-white rounded-tr-lg rounded-b-lg flex flex-col md:flex-row">
                  <div className="md:w-2/5 p-4 flex items-center justify-center">
                    <div className="w-full h-[250px] md:h-[300px] flex items-center justify-center overflow-visible">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain"
                        style={{ 
                          objectFit: "contain",
                          maxHeight: "100%",
                          width: "auto"
                        }}
                      />
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8 flex flex-col h-full">
                    {index <= 2 ? (
                      <div className="flex flex-col justify-between h-full">
                        <p className="text-[#010170] text-[17px] leading-7">
                          {item.description
                            .split(". ")
                            .map((sentence, i, arr) => (
                              <React.Fragment key={i}>
                                {sentence}
                                {i < arr.length - 1 ? ". " : ""}
                                {i < arr.length - 1 && <br />}
                                {i < arr.length - 1 && <br />}
                              </React.Fragment>
                            ))}
                        </p>
                      </div>
                    ) : index === 5 ? (
                      <div className="flex flex-col justify-between h-full">
                        <p className="text-[#010170] text-[17px] leading-7 mb-auto">
                          {item.description.split(".").slice(0, 2).join(".")}. 
                        </p>
                        <br />
                        <p className="text-[#010170] text-[17px] leading-7 mt-auto">
                          {item.description.split(".").slice(2).join(".")}
                        </p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <p className="text-[#010170] text-[17px] leading-7 text-center my-auto">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards/Accomplishments Section */}
      <div className="relative">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row items-center justify-between min-h-[500px] gap-8">
            <div className="w-full md:w-2/5 text-center md:text-left">
              <motion.div className="relative text-[50px] xs:text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-bold text-[#01177e] opacity-80 pointer-events-none">
                {portfolioPage.awardsSection.title}
                <div className="absolute top-0 left-0 w-full text-[18px] xs:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-bold text-[#ffffff] pointer-events-none pt-10 xs:pt-12 sm:pt-16 md:pt-20 lg:pt-17 md:pl-26">
                  {portfolioPage.awardsSection.subtitle}
                </div>
              </motion.div>
            </div>
            <div className="w-full md:w-3/5 md:pl-10">
              <div className="relative overflow-visible min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                {portfolioPage.awards.map((award, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-500 absolute inset-0 flex flex-col items-center justify-center ${
                      currentSlide === index
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                  >
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center overflow-visible">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="max-w-full max-h-full object-contain px-4"
                        style={{ 
                          objectFit: "contain",
                          maxHeight: "100%",
                          width: "auto"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-4 md:mt-8">
                {portfolioPage.awards.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === idx ? "bg-white w-6" : "bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
