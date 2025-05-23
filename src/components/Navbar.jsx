import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretRight, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useAppContent } from "../context/AppContent";

// Add the icons to the library
library.add(faCaretRight, faBars, faTimes);

function Navbar() {
  const { navigationContent } = useAppContent();
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

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

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
                  src={navigationContent.logo.src}
                  alt={navigationContent.logo.alt}
                  className={navigationContent.logo.width}
                />
              </Link>
            </motion.div>
            
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
            {navigationContent.menuItems.map((item, index) => (
              item.hasDropdown ? (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    to={item.path}
                    className={`relative hover:text-blue-400 transition-colors flex items-center ${
                      location.pathname === item.path ? "text-white" : ""
                    }`}
                  >
                    {item.name}
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
                  {location.pathname === item.path && (
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
                      borderTop: `2px solid ${navigationContent.dropdownStyles.borderColor}`
                    }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                      <img
                        src={navigationContent.dropdownStyles.backgroundImages.topCorner}
                        alt="Top left decorative corner"
                        className="absolute top-0 left-0 z-0 w-[150px]"
                      />
                      <img
                        src={navigationContent.dropdownStyles.backgroundImages.bottomCorner}
                        alt="Bottom right decorative corner"
                        className="absolute bottom-0 right-0 z-0 w-[150px]"
                      />
                    </div>

                    <div className="w-full flex justify-between relative z-10 px-[150px]">
                      {item.dropdownContent.map((category, categoryIndex) => (
                        <div
                          key={categoryIndex}
                          className="py-4 px-4 border-r border-gray-200 last:border-r-0 flex-1"
                        >
                          <h3 className="font-bold text-[#010170] mb-3">
                            {category.category}
                          </h3>
                          {category.servicesLeft ? (
                            <div className="flex">
                              <div className="w-1/2 pr-2">
                                <ul className="space-y-2">
                                  {category.servicesLeft.map((service, serviceIndex) => (
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
                              </div>
                              <div className="w-1/2 pl-2">
                                <ul className="space-y-2">
                                  {category.servicesRight.map((service, serviceIndex) => (
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
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  className={`relative hover:text-blue-400 transition-colors ${
                    location.pathname === item.path ? "text-white" : ""
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-blue-500"></div>
                  )}
                </Link>
              )
            ))}
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
                  {navigationContent.menuItems.map((item, index) => 
                    item.hasDropdown ? (
                      <div key={index} className="text-white">
                        <div 
                          className="flex justify-center items-center py-3 px-4 hover:bg-blue-800"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        >
                          <div className="flex items-center">
                            <Link to={item.path} className="text-white">
                              {item.name}
                            </Link>
                            <motion.div
                              animate={{ rotate: mobileServicesOpen ? 90 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="ml-1"
                            >
                              <FontAwesomeIcon
                                icon="caret-right"
                                className="h-4 w-4"
                              />
                            </motion.div>
                          </div>
                        </div>
                        
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="bg-blue-900 px-2"
                            >
                              {item.dropdownContent.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="py-2 px-2 text-center">
                                  <h3 className="font-bold text-white text-sm mb-1">
                                    {category.category}
                                  </h3>
                                  {category.servicesLeft ? (
                                    <div className="flex flex-col">
                                      <ul className="space-y-1">
                                        {[...category.servicesLeft, ...category.servicesRight].map((service, serviceIndex) => (
                                          <li key={serviceIndex} className="text-center">
                                            <a
                                              href="#"
                                              className="text-blue-200 hover:text-white text-xs"
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
                                        <li key={serviceIndex} className="text-center">
                                          <a
                                            href="#"
                                            className="text-blue-200 hover:text-white text-xs"
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
                    ) : (
                      <Link
                        key={index}
                        to={item.path}
                        className="text-white py-3 px-4 hover:bg-blue-800 text-center"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
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
