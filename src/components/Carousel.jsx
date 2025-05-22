import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Partner logos array with individual size configurations
const partnerLogos = [
  {
    id: 1,
    name: "University of Mindanao",
    image: "/partnership/um.svg",
    width: 100,
    height: 180
  },
  {
    id: 2,
    name: "Dctech Micro Services",
    image: "/partnership/dctech.svg",
    width: 110,
    height: 180
  },
  { 
    id: 3, 
    name: "", 
    image: "/partnership/unknownlogo1.svg",
    width: 100,
    height: 170
  },
  { 
    id: 4, 
    name: "HIOKI", 
    image: "/partnership/hioki.svg",
    width: 150,
    height: 180
  },
  {
    id: 5,
    name: "SMU",
    image: "/partnership/smu.svg",
    width: 100,
    height: 190
  },
  {
    id: 6,
    name: "DMSF",
    image: "/partnership/dmsf.svg",
    width: 90,
    height: 105
  },
  {
    id: 7,
    name: "Shock and Awe Trading",
    image: "/partnership/shock.svg",
    width: 150,
    height: 80
  },
  {
    id: 8,
    name: "Partner 8",
    image: "/partnership/unknownlogo2.svg",
    width: 100,
    height: 160
  },
  {
    id: 9,
    name: "LINNHOF",
    image: "/partnership/linnhoff.svg",
    width: 120,
    height: 150
  },
  {
    id: 10,
    name: "UDSHMC",
    image: "/partnership/udshmc.svg",
    width: 110,
    height: 160
  },
  {
    id: 11,
    name: "FUCOS CHEMISTRY",
    image: "/partnership/fucoschem.svg",
    width: 190,
    height: 80
  },
  {
    id: 12,
    name: "KABACAN WATER DISTRICT",
    image: "/partnership/kabacan.svg",
    width: 110,
    height: 160
  }
];

function LogoCarousel() {
  const [width, setWidth] = useState(0);
  const carouselRef = React.useRef();

  // Calculate the width of the carousel container on mount and window resize
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

  // Create a duplicate array for infinite scrolling effect
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

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
                  width: "250px", // Increased from 180px
                  "@media (min-width: 640px)": { width: "250px" }, // Increased from 180px
                  "@media (min-width: 768px)": { width: "250px" } // Increased from 180px
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-25 flex items-center justify-center"> {/* Increased from h-20 to h-28 */}
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
