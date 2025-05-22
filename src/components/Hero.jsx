import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-[#0a1358] to-[#000081]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-55"
      >
        <source src="/m1bg.mp4" type="video/mp4" />
      </video>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-16 py-4 sm:py-6 md:py-8 min-h-screen gap-y-8">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        ></motion.div>

        <motion.div
          className="w-full md:w-1/2 text-center md:text-right md:pl-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="space-y-2">
            <div className="flex items-baseline gap-2 sm:gap-4 justify-center md:justify-end">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold">
                WE
              </h1>
              <h1 className="text-[#0066FF] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-tight scale-y-115">
                &lt;BUILD/&gt;
              </h1>
            </div>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold">
              AWESOMENESS
            </h2>
          </div>
          <motion.button
            className="mt-5 w-full md:w-auto px-6 py-3 sm:px-8 sm:py-3 bg-transparent border border-[#0066FF] text-white rounded-xl hover:bg-[#0066FF] transition-all duration-300 text-sm sm:text-base font-medium mx-auto md:ml-auto md:mr-2 block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SEE HOW WE DO IT
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
