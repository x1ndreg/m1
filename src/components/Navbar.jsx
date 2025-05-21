import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

// Add the icon to the library
library.add(faCaretRight);

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const servicesData = [
    {
      category: "Development",
      services: [
        "Web Application",
        "API Integration",
        "Front & Backend Web Development",
        "IOS App Development",
        "Android App Development"
      ]
    },
    {
      category: "Design",
      services: ["UI/UX Design", "Visual Design", "Logo Design"]
    },
    {
      category: "Media Buy",
      services: [
        "Search Engine Marketing (SEM)",
        "Social Media Marketing (SMM)",
        "Lead Generation"
      ]
    },
    {
      category: "Search Engine Optimization (SEO)",
      services: ["SEO Subscription", "SEO Audit", "SEO Consultation"]
    },
    {
      category: "Engineering Services",
      servicesLeft: [
        "Auxiliary Services",
        "Structured Cabling",
        "Fire Alarm Systems",
        "Solar Panel System",
        "Security Systems"
      ],
      servicesRight: [
        "Building Automation",
        "Industrial Machine",
        "Nurse Call",
        "CCTV"
      ]
    }
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-transparent bg-opacity-50 flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-4 md:py-6 md:pl-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <Link to="/">
              <img
                src="/m1 logo.svg"
                alt="MediaOne PH"
                className="w-32 md:w-40"
              />
            </Link>
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row gap-6 md:gap-12 text-white text-sm font-medium tracking-wider items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/about"
              className={`relative hover:text-blue-400 transition-colors ${
                location.pathname === "/about" ? "text-white" : ""
              }`}
            >
              ABOUT
              {location.pathname === "/about" && (
                <div className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-blue-500"></div>
              )}
            </Link>
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`relative hover:text-blue-400 transition-colors flex items-center ${
                  location.pathname === "/services" ? "text-white" : ""
                }`}
              >
                SERVICES
                <motion.div
                  animate={{ rotate: servicesDropdownOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FontAwesomeIcon
                    icon="caret-right"
                    className="h-4 w-4 ml-1"
                  />
                </motion.div>
              </Link>
              {location.pathname === "/services" && (
                <div className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-blue-500"></div>
              )}

              {/* Services Dropdown */}
              <div
                className={`fixed top-[100px] left-0 right-0 w-full bg-white shadow-lg z-[100] transition-all duration-300 ${
                  servicesDropdownOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
                style={{
                  borderTop: "2px solid #0066cc"
                }}
              >
                {/* Blue corner backgrounds */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                  <img
                    src="/top corner bg.svg"
                    alt="Top left decorative corner"
                    className="absolute top-0 left-0 z-0 w-[150px]"
                  />
                  <img
                    src="/bottom corner bg.svg"
                    alt="Bottom right decorative corner"
                    className="absolute bottom-0 right-0 z-0 w-[150px]"
                  />
                </div>

                <div className="w-full flex justify-between relative z-10 px-[150px]">
                  {servicesData.map((category, index) => (
                    <div
                      key={index}
                      className="py-4 px-4 border-r border-gray-200 last:border-r-0 flex-1"
                    >
                      <h3 className="font-bold text-[#010170] mb-3">
                        {category.category}
                      </h3>
                      {category.category === "Engineering Services" ? (
                        <div className="flex">
                          <div className="w-1/2 pr-2">
                            <ul className="space-y-2">
                              {category.servicesLeft.map(
                                (service, serviceIndex) => (
                                  <li key={serviceIndex}>
                                    <a
                                      href="#"
                                      className={`text-gray-700 hover:text-blue-600 text-sm ${
                                        service === "Security Systems"
                                          ? "text-blue-600"
                                          : ""
                                      }`}
                                    >
                                      {service}
                                    </a>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                          <div className="w-1/2 pl-2">
                            <ul className="space-y-2">
                              {category.servicesRight.map(
                                (service, serviceIndex) => (
                                  <li key={serviceIndex}>
                                    <a
                                      href="#"
                                      className="text-gray-700 hover:text-blue-600 text-sm"
                                    >
                                      {service}
                                    </a>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <ul className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <a
                                href="#"
                                className="text-gray-700 hover:text-blue-600 text-sm"
                              >
                                {service}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link
              to="/portfolio"
              className={`relative hover:text-blue-400 transition-colors ${
                location.pathname === "/portfolio" ? "text-white" : ""
              }`}
            >
              PORTFOLIO
              {location.pathname === "/portfolio" && (
                <div className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-blue-500"></div>
              )}
            </Link>
            <Link
              to="/blog"
              className={`relative hover:text-blue-400 transition-colors ${
                location.pathname === "/blog" ? "text-white" : ""
              }`}
            >
              BLOG
              {location.pathname === "/blog" && (
                <div className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-blue-500"></div>
              )}
            </Link>
            <Link
              to="/contact"
              className={`relative hover:text-blue-400 transition-colors ${
                location.pathname === "/contact" ? "text-white" : ""
              }`}
            >
              CONTACT US
              {location.pathname === "/contact" && (
                <div className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-blue-500"></div>
              )}
            </Link>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default Navbar;
