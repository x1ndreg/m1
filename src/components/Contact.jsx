import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
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
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 md:px-16 bg-gradient-to-b from-[#010168] via-[#0a1358] to-[#000081] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column - Contact Info */}
        <div className="flex flex-col justify-center">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let's
            <br />
            Connect
          </motion.h2>

          <div className="mt-8 sm:mt-10 md:mt-12 space-y-6 sm:space-y-8">
            {/* Email */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm">
                  Like our job? Feel free to write us.
                </p>
                <p className="text-sm sm:text-base font-semibold">
                  ruinze@mediaoneph.com
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm">Feel free to call us.</p>
                <p className="text-sm sm:text-base font-semibold">
                  +63 (082) 293 2640
                </p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm">We Are located in</p>
                <p className="text-xs sm:text-sm md:text-base font-semibold">
                  Door 5, Block 8, Lot 2, Phase 4, Sectoral Road,
                </p>
                <p className="text-xs sm:text-sm md:text-base font-semibold">
                  NHA Bangkal Main Rd, Davao City, 8000
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <motion.div
          className="flex flex-col justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-1 sm:mb-2 text-sm sm:text-base"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-white/30 rounded focus:outline-none focus:border-white text-sm"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-1 sm:mb-2 text-sm sm:text-base"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-white/30 rounded focus:outline-none focus:border-white text-sm"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 sm:mb-2 text-sm sm:text-base"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email Address"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-white/30 rounded focus:outline-none focus:border-white text-sm"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block mb-1 sm:mb-2 text-sm sm:text-base"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-white/30 rounded focus:outline-none focus:border-white text-sm"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-1 sm:mb-2 text-sm sm:text-base"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-white/30 rounded focus:outline-none focus:border-white h-24 sm:h-32 resize-none text-sm"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 sm:py-3 bg-[#007bff] text-white font-medium uppercase tracking-wider rounded hover:bg-[#0069d9] transition-colors text-sm sm:text-base"
            >
              SUBMIT
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
