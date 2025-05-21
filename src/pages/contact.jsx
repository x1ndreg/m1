import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#000028] via-[#000000] to-[#00005a] overflow-hidden">
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
          LET'S CONNECT
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
            clipPath: "polygon(0 0, 50% 10%, 100% 0, 100% 80%, 50% 100%, 0 80%)"
          }}
        />

        {/* Contact Content inside the textured area */}
        <div className="container mx-auto px-4 pt-50 pb-60 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column - Contact Info */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-6">
                  <motion.h2
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#010170] mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Let's
                    <br />
                    Connect
                  </motion.h2>

                  <motion.div
                    className="mt-8 space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {/* Email */}
                    <motion.div
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 mr-4 flex items-center justify-center">
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-[#010170]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          whileHover={{ scale: 1.1 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                          />
                        </motion.svg>
                      </div>
                      <div>
                        <p className="text-sm text-[#010170]">
                          Like our job? Feel free to write us.
                        </p>
                        <p className="text-base font-semibold text-[#010170]">
                          ruinze@mediaoneph.com
                        </p>
                      </div>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 mr-4 flex items-center justify-center">
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-[#010170]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          whileHover={{ scale: 1.1 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </motion.svg>
                      </div>
                      <div>
                        <p className="text-sm text-[#010170]">
                          Feel free to call us.
                        </p>
                        <p className="text-base font-semibold text-[#010170]">
                          +63 (082) 293 2640
                        </p>
                      </div>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 mr-4 flex items-center justify-center">
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-[#010170]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          whileHover={{ scale: 1.1 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </motion.svg>
                      </div>
                      <div>
                        <p className="text-sm text-[#010170]">
                          We Are located in
                        </p>
                        <p className="text-sm font-semibold text-[#010170]">
                          Door 5, Block 8, Lot 2, Phase 4, Sectoral Road,
                        </p>
                        <p className="text-sm font-semibold text-[#010170]">
                          NHA Bangkal Main Rd, Davao City, 8000
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {/* First Name */}
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block mb-2 text-sm text-[#010170]"
                        >
                          First Name
                        </label>
                        <motion.input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter First Name"
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#010170] text-sm"
                          required
                          whileFocus={{
                            boxShadow: "0 0 0 2px rgba(1, 1, 112, 0.2)"
                          }}
                        />
                      </div>

                      {/* Last Name */}
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block mb-2 text-sm text-[#010170]"
                        >
                          Last Name
                        </label>
                        <motion.input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter Last Name"
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#010170] text-sm"
                          required
                          whileFocus={{
                            boxShadow: "0 0 0 2px rgba(1, 1, 112, 0.2)"
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm text-[#010170]"
                      >
                        Email Address
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Email Address"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#010170] text-sm"
                        required
                        whileFocus={{
                          boxShadow: "0 0 0 2px rgba(1, 1, 112, 0.2)"
                        }}
                      />
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm text-[#010170]"
                      >
                        Contact Number
                      </label>
                      <motion.input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter Phone Number"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#010170] text-sm"
                        required
                        whileFocus={{
                          boxShadow: "0 0 0 2px rgba(1, 1, 112, 0.2)"
                        }}
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm text-[#010170]"
                      >
                        Message
                      </label>
                      <motion.textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#010170] h-32 resize-none text-sm"
                        required
                        whileFocus={{
                          boxShadow: "0 0 0 2px rgba(1, 1, 112, 0.2)"
                        }}
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      className="w-full py-3 bg-[#010170] text-white font-medium uppercase tracking-wider rounded hover:bg-[#01015a] transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      whileHover={{ scale: 1.02, backgroundColor: "#01015a" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      SUBMIT
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-60"></div>
    </div>
  );
};

export default ContactPage;
