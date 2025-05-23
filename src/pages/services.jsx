import React from "react";
import { motion } from "framer-motion";
import { useAppContent } from "../context/AppContent";

const ServicesPage = () => {
  const { pages } = useAppContent();
  const servicesPage = pages.services;

  return (
    <div className="relative min-h-screen from-[#010126] via-[#010136] to-[#000090] overflow-hidden">
      <div className="h-28"></div>
      <div className="container mx-auto px-4 py-5 text-center mb-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {servicesPage.title}
        </motion.h1>
      </div>
      <div className="relative">
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{
            backgroundImage: 'url("/Texture.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(0 0, 50% 5%, 100% 0, 100% 90%, 50% 100%, 0 90%)"
          }}
        />
        <div className="container mx-auto px-4 pt-50 pb-24 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#010170] text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {servicesPage.softwareServices.title}
          </motion.h2>
          {servicesPage.softwareServices.services.map((service, index) => (
            <motion.div
              key={index}
              className="max-w-5xl mx-auto mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start bg-white p-8 rounded-xl shadow-lg`}
              >
                <div className="w-full md:w-2/5 flex justify-center mb-6 md:mb-0">
                  <div className="relative">
                    <img
                      src={service.icon}
                      alt={service.category}
                      className="w-64 h-64 object-contain"
                    />
                  </div>
                </div>
                <div
                  className={`w-full md:w-3/5 ${
                    index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                  }`}
                >
                  <h2 className="text-2xl font-bold text-[#010170] mb-4">
                    {service.category}
                  </h2>
                  <p className="text-[#010170] mb-6">{service.description}</p>
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                    {service.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center whitespace-nowrap"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#010170] flex items-center justify-center mr-2">
                          <svg
                            className="w-2.5 h-2.5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <span className="text-sm text-[#010170]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="pt-8 pb-20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#010170] text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {servicesPage.engineeringServices.title}
            </motion.h2>
            <motion.div
              className="max-w-5xl mx-auto bg-white rounded-lg p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <motion.div
                  className="w-full md:w-1/3 flex justify-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={servicesPage.engineeringServices.icon}
                      alt="Engineering Services"
                      className="w-48 h-48 object-contain"
                    />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="w-full md:w-2/3 text-left"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.h2
                    className="text-2xl font-bold text-[#010170] mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    {servicesPage.engineeringServices.category}
                  </motion.h2>
                  <motion.p
                    className="text-[#010170] mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    {servicesPage.engineeringServices.description}
                  </motion.p>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2">
                      {servicesPage.engineeringServices.servicesLeft.map(
                        (item, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center mb-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <div className="w-4 h-4 rounded-full bg-[#010170] flex items-center justify-center mr-2">
                              <svg
                                className="w-2.5 h-2.5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                            <span className="text-sm text-[#010170]">{item}</span>
                          </motion.div>
                        )
                      )}
                    </div>
                    <div className="w-full md:w-1/2">
                      {servicesPage.engineeringServices.servicesRight.map(
                        (item, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center mb-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <div className="w-4 h-4 rounded-full bg-[#010170] flex items-center justify-center mr-2">
                              <svg
                                className="w-2.5 h-2.5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                            <span className="text-sm text-[#010170]">{item}</span>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Technologies Used Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {servicesPage.technologies.title}
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src={servicesPage.technologies.image}
              alt="Technologies Used"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
