import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PortfolioPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % awardsData.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []); //

  // Awards/Accomplishments data
  const awardsData = [
    {
      title: "Tech Behemoths",
      image: "/awards/Tech Behemoths.svg",
      year: "2023-2024"
    },
    {
      title: "Tech Behemoths",
      image: "/awards/Meta.svg",
      year: "2023-2024"
    },
    {
      title: "Tech Behemoths",
      image: "/awards/Innovative Developers.svg",
      year: "2023-2024"
    },
    {
      title: "Tech Behemoths",
      image: "/awards/Premier Software.svg",
      year: "2023-2024"
    }
  ];

  // Portfolio data from the image
  const portfolioData = [
    {
      title: "Singapore Management System",
      description:
        "Founded by an industry software developer in 2016, Mediaone Software Solutions is a team of dedicated software developers and technology enthusiast based in Davao City, Philippines. We pride ourselves on having the skills to integrate cross disciplinary experience into each project, taking advantage of our thirst for new and innovative ideas in order to bring out a wide variety of business solutions. Mediaone Software Solutions specializes in expert web systems, integrated web and mobile applications, business process systems and business automation systems in healthcare and education.",
      image: "/portfolio/SMU.png"
    },
    {
      title: "Fertilizer Calculator App",
      description:
        "Is a mobile application developed to determine the amount of fertilizer needed to satisfy the recommended rate from a given soil test result and the crop to be planted in the Philippines. Based on the selected combination of fertilizer grades, various fertilizer recommendations are generated but only the best combination is suggested to be adopted as other options may have either excess or insufficiency in nutrient. Fertilizer application rates are based on the research from the Department of Soil Science, University of the Philippines Los Baños, Laguna, in cooperation with the National Food and Agricultural Council.",
      image: "/portfolio/Fertilizer Calculator App.png"
    },
    {
      title: "Cyber Security Audit for Various System",
      description:
        "Mediaone Software Solutions performed a review and assessment of an organization's information security and technology systems, identified vulnerabilities and potential risks by performing penetration testing, code review, organization's network infrastructure evaluation, software and hardware, policies and procedures, and overall security posture. The goal of a cybersecurity audit is to identify and mitigate any potential security threats and to ensure compliance with industry standards and regulations. Mediaone Software Solutions was lauded by the University and the DTI Quality management review for its role in securing the University of Mindanao's current systems.",
      image: "/portfolio/cyber.png"
    },
    {
      title: "Application Development for New Systems",
      description:
        "We specialize in modernizing legacy systems through innovative application development. Our approach seamlessly integrates new technologies with existing infrastructure to enhance efficiency and competitiveness.",
      image: "/portfolio/delmonte.png"
    },
    {
      title: "LIFTED Asia",
      description:
        "Created the famous magazine's website using craftCMS. Client only provided wireframe and simple instructions as to what they want and the team were able to deliver the project on time with all of the requirements covered.",
      image: "/portfolio/lifted.png"
    },
    {
      title: "HRISONE",
      description:
        "Created a comprehensive HRIS (Human Resource Information System) for Government and Private Institutions. The main framework that was used for this platform is Laravel, it also has provisions ready for mobile app integration. This SaaS platform consists of these following modules: 201, Payroll, DTR, Appointment, Application, Deduction and Reports. It is now being used by various LGU's and private companies as a subscription system.",
      image: "/portfolio/hris.png"
    }
  ];

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
          WORKS & AWARDS
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
            clipPath: "polygon(0 0, 50% 4%, 100% 0, 100% 95%, 50% 100%, 0 95%)"
          }}
        />

        {/* Portfolio Content inside the textured area */}
        <div className="container mx-auto px-4 pt-50 pb-64 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#010170] text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            EXPLORE OUR SHOWCASE OF FEATURED WORKS
          </motion.h2>
          <div className="max-w-7xl mx-auto space-y-6">
            {portfolioData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                {/* Title bar */}
                <div className="bg-[#010170] text-white py-2 px-8 rounded-lg w-fit">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>

                {/* Main card */}
                <div className="bg-white rounded-tr-lg rounded-b-lg flex flex-col md:flex-row">
                  {/* Image section - Fixed to prevent cropping */}
                  <div className="md:w-2/5 p-4 flex items-center justify-center">
                    <div className="w-full h-[250px] md:h-[300px] flex items-center justify-center overflow-visible">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain"
                        style={{ 
                          objectFit: "contain",
                          maxHeight: "100%",
                          width: "auto"
                        }}
                      />
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="md:w-3/5 p-8 flex flex-col h-full">
                    {index <= 2 ? (
                      // First 3 cards: Sentence by sentence with even vertical spacing
                      <div className="flex flex-col justify-between h-full">
                        <p className="text-[#010170] text-[17px] leading-7">
                          {item.description
                            .split(". ")
                            .map((sentence, i, arr) => (
                              <React.Fragment key={i}>
                                {sentence}
                                {i < arr.length - 1 ? ". " : ""}
                                {i < arr.length - 1 && <br />}
                                {i < arr.length - 1 && <br />}
                              </React.Fragment>
                            ))}
                        </p>
                      </div>
                    ) : index === 5 ? (
                      // Last card (HRISONE): Two paragraphs with even vertical spacing
                      <div className="flex flex-col justify-between h-full">
                        <p className="text-[#010170] text-[17px] leading-7 mb-auto">
                          Created a comprehensive HRIS (Human Resource
                          Information System) for Government and Private
                          Institutions. The main framework that was used for
                          this platform is Laravel, it also has provisions ready
                          for mobile app integration.
                        </p>
                        <br />
                        <p className="text-[#010170] text-[17px] leading-7 mt-auto">
                          This SaaS platform consists of these following
                          modules: 201, Payroll, DTR, Appointment, Application,
                          Deduction and Reports. It is now being used by various
                          LGU's and private companies as a subscription system.
                        </p>
                      </div>
                    ) : (
                      // Delmonte and LIFTED Asia: Centered single paragraph
                      <div className="flex items-center justify-center h-full">
                        <p className="text-[#010170] text-[17px] leading-7 text-center my-auto">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards/Accomplishments Section */}
      <div className="relative">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row items-center justify-between min-h-[500px] gap-8">
            {/* Left side - Text */}
            <div className="w-full md:w-2/5 text-center md:text-left">
              <motion.div className="relative text-[50px] xs:text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-bold text-[#01177e] opacity-80 pointer-events-none">
                AWARDS
                <div className="absolute top-0 left-0 w-full text-[18px] xs:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-bold text-[#ffffff] pointer-events-none pt-10 xs:pt-12 sm:pt-16 md:pt-20 lg:pt-57 md:pl-26">
                  ACCOMPLISHMENTS
                </div>
              </motion.div>
            </div>

            {/* Right side - Award Carousel - Fixed to prevent cropping */}
            <div className="w-full md:w-3/5 md:pl-10">
              <div className="relative overflow-visible min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                {awardsData.map((award, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-500 absolute inset-0 flex flex-col items-center justify-center ${
                      currentSlide === index
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                  >
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center overflow-visible">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="max-w-full max-h-full object-contain px-4"
                        style={{ 
                          objectFit: "contain",
                          maxHeight: "100%",
                          width: "auto"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* Dots Navigation */}
              <div className="flex justify-center gap-2 mt-4 md:mt-8">
                {awardsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === idx ? "bg-white w-6" : "bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
