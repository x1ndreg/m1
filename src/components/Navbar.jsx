import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretRight, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

// Add the icons to the library
library.add(faCaretRight, faBars, faTimes);

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

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
          <div className="w-full md:w-auto flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-0"
            >
              <Link to="/">
                <img
                  src="/m1 logo.svg"
                  alt="MediaOne PH"
                  className="w-32 md:w-40"
                />
              </Link>
            </motion.div>
            
            {/* Mobile Menu Toggle Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon 
                icon={mobileMenuOpen ? "times" : "bars"} 
                className="h-6 w-6" 
              />
            </motion.button>
          </div>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex flex-row gap-12 text-white text-sm font-medium tracking-wider items-center"
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

              {/* Services Dropdown - Desktop */}
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

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden w-full mt-4 bg-[#010170] rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex flex-col w-full">
                  <Link
                    to="/about"
                    className="text-white py-3 px-4 border-b border-blue-800 hover:bg-blue-800"
                  >
                    ABOUT
                  </Link>
                  
                  {/* Mobile Services Dropdown Toggle */}
                  <div className="text-white border-b border-blue-800">
                    <div 
                      className="flex justify-between items-center py-3 px-4 hover:bg-blue-800"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      <Link to="/services" className="text-white">
                        SERVICES
                      </Link>
                      <motion.div
                        animate={{ rotate: mobileServicesOpen ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FontAwesomeIcon
                          icon="caret-right"
                          className="h-4 w-4"
                        />
                      </motion.div>
                    </div>
                    
                    {/* Mobile Services Submenu */}
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-blue-900 px-2"
                        >
                          {servicesData.map((category, index) => (
                            <div key={index} className="py-2 px-2 border-b border-blue-800 last:border-b-0">
                              <h3 className="font-bold text-white text-sm mb-1">
                                {category.category}
                              </h3>
                              {category.category === "Engineering Services" ? (
                                <div className="flex flex-col">
                                  <ul className="space-y-1">
                                    {category.servicesLeft.map((service, serviceIndex) => (
                                      <li key={serviceIndex}>
                                        <a
                                          href="#"
                                          className="text-blue-200 hover:text-white text-xs pl-2"
                                        >
                                          {service}
                                        </a>
                                      </li>
                                    ))}
                                    {category.servicesRight.map((service, serviceIndex) => (
                                      <li key={serviceIndex}>
                                        <a
                                          href="#"
                                          className="text-blue-200 hover:text-white text-xs pl-2"
                                        >
                                          {service}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ) : (
                                <ul className="space-y-1">
                                  {category.services.map((service, serviceIndex) => (
                                    <li key={serviceIndex}>
                                      <a
                                        href="#"
                                        className="text-blue-200 hover:text-white text-xs pl-2"
                                      >
                                        {service}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <Link
                    to="/portfolio"
                    className="text-white py-3 px-4 border-b border-blue-800 hover:bg-blue-800"
                  >
                    PORTFOLIO
                  </Link>
                  <Link
                    to="/blog"
                    className="text-white py-3 px-4 border-b border-blue-800 hover:bg-blue-800"
                  >
                    BLOG
                  </Link>
                  <Link
                    to="/contact"
                    className="text-white py-3 px-4 hover:bg-blue-800"
                  >
                    CONTACT US
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default Navbar;
