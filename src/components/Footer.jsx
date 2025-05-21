import React from "react";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 sm:py-6 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo with Text */}
          <div className="mb-2 flex items-center">
            <img
              src="/Logo.svg"
              alt="MediaOne PH"
              className="h-10 sm:h-12 md:h-15"
            />
            <span className="pt-4 sm:pt-6 text-lg sm:text-xl font-bold text-[#010170]">
              ediaOne PH
            </span>
          </div>

          {/* Copyright Text */}
          <p className="text-xs sm:text-sm text-gray-600">
            Copyright © {currentYear}. Powered By MediaOne Software Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
