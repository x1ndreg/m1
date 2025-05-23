import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppContent } from "../context/AppContent";

function LogoCarousel() {
  const { partners } = useAppContent();
  const [width, setWidth] = useState(0);
  const carouselRef = React.useRef();

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        );
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const duplicatedLogos = [...partners.partnerLogos, ...partners.partnerLogos];

  return (
    <div className="py-8 sm:py-10 md:py-12 bg-white w-full overflow-hidden">
      <div className="w-full px-2 sm:px-4">
        <div className="relative overflow-hidden">
          {/* Logo Carousel */}
          <motion.div
            ref={carouselRef}
            className="flex items-center"
            animate={{
              x: [-width, 0]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 px-4 sm:px-6 md:px-8"
                style={{
                  width: "250px",
                  "@media (min-width: 640px)": { width: "250px" }, 
                  "@media (min-width: 768px)": { width: "250px" } 
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-25 flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      style={{
                        width: `${logo.width}px`,
                        height: `${logo.height}px`,
                        objectFit: "contain"
                      }}
                      onError={(e) => {
                        console.error(`Failed to load image: ${logo.image}`);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LogoCarousel;
