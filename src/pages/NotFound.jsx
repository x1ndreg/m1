import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000028] via-[#000000] to-[#00005a] flex items-center justify-center">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-white mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-white text-lg mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="space-x-4">
            <Link
              to="/"
              className="inline-block bg-[#010170] text-white px-6 py-3 rounded-md hover:bg-[#0101a0] transition-colors"
            >
              Go Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
