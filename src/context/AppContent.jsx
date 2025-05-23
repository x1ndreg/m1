import React, { createContext, useContext } from "react";

const AppContentContext = createContext();

export const useAppContent = () => useContext(AppContentContext);

export const AppContentProvider = ({ children }) => {
  const navigationContent = {
    logo: {
      src: "/m1 logo.svg",
      alt: "MediaOne PH",
      width: "w-32 md:w-40"
    },
    menuItems: [
      { name: "ABOUT", path: "/about" },
      {
        name: "SERVICES",
        path: "/services",
        hasDropdown: true,
        dropdownContent: [
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
        ]
      },
      { name: "PORTFOLIO", path: "/portfolio" },
      { name: "BLOG", path: "/blog" },
      { name: "CONTACT US", path: "/contact" }
    ],
    dropdownStyles: {
      backgroundImages: {
        topCorner: "/top corner bg.svg",
        bottomCorner: "/bottom corner bg.svg"
      },
      borderColor: "#0066cc"
    }
  };

  // Hero section content
  const heroContent = {
    video: "/m1bg.mp4",
    title: {
      firstPart: "WE",
      highlightedPart: "<BUILD/>",
      lastPart: "AWESOMENESS"
    },
    buttonText: "SEE HOW WE DO IT"
  };

  // About section content
  const aboutContent = {
    title: "ABOUT US",
    subtitle: "ABOUT US",
    images: [
      {
        src: "/about/about2.jpeg",
        alt: "About MediaOne",
        position: "top-left"
      },
      {
        src: "/about/about1.jpeg",
        alt: "About MediaOne",
        position: "bottom-right"
      }
    ],
    paragraphs: [
      "Founded by an industry software developer in 2016, Mediaone Software Solutions is a team of dedicated software developers and technology enthusiast based in Davao City, Philippines.",
      "We pride ourselves on having the skills to integrate cross disciplinary experience into each project, taking advantage of our thirst for new and innovative ideas in order to bring out a wide variety of business solutions.",
      "Mediaone Software Solutions specializes in expert web systems, integrated web and mobile applications, business process systems and business automation systems in healthcare and education."
    ],
    buttonText: "KNOW MORE ABOUT US"
  };

  // Services section content
  const servicesContent = {
    title: "SERVICES",
    subtitle: "SERVICES",
    backgroundImages: {
      texture: "Texture.svg",
      topCorner: "top corner bg.svg",
      bottomCorner: "bottom corner bg.svg"
    },
    services: {
      development: {
        title: "DEVELOPMENT",
        items: [
          "Web Application",
          "API Integration",
          "Front & Backend Web Development",
          "IOS App Development",
          "Android App Development"
        ],
        icon: "/development.svg",
        activeIcon: "/development.svg"
      },
      design: {
        title: "DESIGN",
        items: ["UI/UX Design", "Visual Design", "Logo Design"],
        icon: "/design.svg",
        activeIcon: "/design.svg"
      },
      mediaBuy: {
        title: "MEDIA BUY",
        items: [
          "Search Engine Marketing (SEM)",
          "Social Media Marketing (SMM)",
          "Lead Generation"
        ],
        icon: "/mediabuy.svg",
        activeIcon: "/mediaBuy.svg"
      },
      seo: {
        title: "SEO",
        items: ["SEO Subscription", "SEO Audit", "SEO Consultation"],
        icon: "/sEO.svg",
        activeIcon: "/seo.svg"
      },
      engineering: {
        title: "ENGINEERING SERVICES",
        items: [
          "Auxiliary Services",
          "Structured Cabling",
          "Fire Alarm Systems",
          "Solar Panel System",
          "Security System",
          "Building Automation",
          "Industrial Machine",
          "Nurse Call",
          "CCTV"
        ],
        icon: "/engineering.svg",
        activeIcon: "/engineering.svg"
      }
    }
  };

  // Portfolio section content
  const portfolioContent = {
    title: "WORKS",
    subtitle: "SOME OF OUR WORKS",
    items: [
      {
        id: 1,
        title: "Singapore Management University",
        description:
          "Founded by an industry software developer in 2016, MediaOne Software Solutions is a team of dedicated software developers...",
        image: "portfolio/SMU.png",
        category: "web"
      },
      {
        id: 2,
        title: "Fertilizer Calculator App",
        description:
          "Is a mobile application developed to determine the amount of fertilizer needed to satisfy the recommended rate from a given soil test result and the crop to be planted in the Philippines. Based on the selected combination of fertilizer grades, various fertilizer recommendations are generated but only the best combination is suggested to be adopted as other options may have either excess or insufficiency in nutrient. Fertilizer application rates are based on the research from the Department of Soil Science, University of the Philippines Los Baños, Laguna, in cooperation with the National Food and Agricultural Council.",
        image: "portfolio/Fertilizer Calculator App.png",
        category: "mobile",
        featured: true,
        badge: "E"
      },
      {
        id: 3,
        title: "Cyber Security Audit for Various Systems",
        description:
          "MediaOne Software Solutions performed a review and assessment of an organization's information security and technology systems...",
        image: "portfolio/cyber.png",
        category: "security"
      },
      {
        id: 4,
        title: "Application Development for New Systems",
        description:
          "We specialize in modernizing legacy systems through innovative application development...",
        image: "portfolio/delmonte.png",
        category: "development"
      },
      {
        id: 5,
        title: "ELITED Asia",
        description:
          "Created the Web Application for a leading recruitment firm for simplifying the hiring process...",
        image: "portfolio/lifted.png",
        category: "web",
        badge: "NEWS"
      },
      {
        id: 6,
        title: "HRISONE",
        description:
          "Created a comprehensive HRIS (Human Resource Information System) for Government and Private Institutions...",
        image: "portfolio/hris.png",
        category: "hris"
      }
    ]
  };

  // Partners/Carousel section content
  const partnersContent = {
    partnerLogos: [
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
    ]
  };

  // Awards section content
  const awardsContent = {
    title: "AWARDS",
    subtitle: "AWARDS & ACCOMPLISHMENTS",
    awards: [
      {
        id: 1,
        logo: "/awards/Tech Behemoths.svg",
        position: "left"
      },
      {
        id: 2,
        logo: "/awards/Meta.svg",
        position: "right",
        featured: true
      },
      {
        id: 3,
        logo: "/awards/Innovative Developers.svg",
        position: "left"
      },
      {
        id: 4,
        logo: "/awards/Premier Software.svg",
        position: "right"
      }
    ]
  };

  // Blog section content
  const blogContent = {
    title: "BLOGS",
    subtitle: "BLOGS",
    backgroundImages: {
      texture: "/Texture.svg",
      topRightCorner: "/top right corner bg.svg",
      bottomLeftCorner: "/bottom left corner bg.svg"
    },
    posts: [
      {
        id: 1,
        title:
          "Unleashing Innovation with Custom Software Development Solutions",
        image: "/blogs/image (1).png",
        date: "OCTOBER 22, 2024",
        link: "/blog/custom-software-development"
      },
      {
        id: 2,
        title: "How CRM Software Transforms Your Customer Relationships",
        image: "/blogs/image (2).png",
        date: "OCTOBER 23, 2024",
        link: "/blog/crm-software"
      },
      {
        id: 3,
        title:
          "Why Project Management Software Is the Backbone of Modern Business",
        image: "/blogs/image (3).png",
        date: "OCTOBER 24, 2024",
        link: "/blog/project-management-software"
      },
      {
        id: 4,
        title: "Why Every Business Needs a Content Management System (CMS)",
        image: "/blogs/image (4).png",
        date: "OCTOBER 25, 2024",
        link: "/blog/content-management-system"
      }
    ]
  };

  // Contact section content
  const contactContent = {
    title: {
      firstLine: "Let's",
      secondLine: "Connect"
    },
    contactInfo: [
      {
        type: "email",
        icon: "message",
        text: "Like our job? Feel free to write us.",
        value: "ruinze@mediaoneph.com"
      },
      {
        type: "phone",
        icon: "phone",
        text: "Feel free to call us.",
        value: "+63 (082) 293 2640"
      },
      {
        type: "address",
        icon: "location",
        text: "We Are located in",
        value: [
          "Door 5, Block 8, Lot 2, Phase 4, Sectoral Road,",
          "NHA Bangkal Main Rd, Davao City, 8000"
        ]
      }
    ],
    formFields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
      { name: "phone", label: "Contact Number", type: "tel", required: true },
      { name: "message", label: "Message", type: "textarea", required: true }
    ],
    submitButtonText: "SUBMIT"
  };

  // Footer content
  const footerContent = {
    logo: {
      src: "/Logo.svg",
      alt: "MediaOne PH"
    },
    companyName: "ediaOne PH",
    copyright: "Copyright © {year}. Powered By MediaOne Software Solutions"
  };

  // Pages content NAVLINK
  const pagesContent = {
    about: {
      title: "ABOUT US",
      companyProfile: {
        title: "COMPANY PROFILE",
        paragraphs: [
          "Founded by an industry software developer in 2016, Mediaone Software Solutions is a team of dedicated software developers and technology enthusiast based in Davao City, Philippines.",
          "We pride ourselves on having the skills to integrate cross disciplinary experience into each project, taking advantage of our thirst for new and innovative ideas in order to bring out a wide variety of business solutions.",
          "Mediaone Software Solutions specializes in expert web systems, integrated web and mobile applications, business process systems and business automation systems in healthcare and education."
        ],
        stats: ["100+ SUCCESSFUL PROJECTS", "15 PARTNERSHIPS/CLIENTS"]
      },
      partners: {
        title: "OUR CLIENTS/PARTNERS",
        logos: [
          { name: "University of Mindanao", src: "/partnership/um.svg" },
          { name: "Dctech Micro Services", src: "/partnership/dctech.svg" },
          { name: "MIO", src: "/partnership/unknownlogo1.svg" },
          { name: "HIOKI", src: "/partnership/hioki.svg" },
          { name: "SMU", src: "/partnership/smu.svg" },
          { name: "Shock & Awe Trading", src: "/partnership/shock.svg" },
          { name: "MT", src: "/partnership/unknownlogo2.svg" },
          { name: "Linnhoff Technologies", src: "/partnership/linnhoff.svg" },
          { name: "Medical Logo", src: "/partnership/udshmc.svg" },
          { name: "Compass", src: "/partnership/dmsf.svg" },
          { name: "Focus Chemistry", src: "/partnership/fucoschem.svg" },
          { name: "Circular Logo", src: "/partnership/kabacan.svg" }
        ]
      }
    },

    services: {
      title: "SERVICES",
      softwareServices: {
        title: "SOFTWARE SERVICES",
        services: [
          {
            category: "DEVELOPMENT",
            description:
              "Every website development project requires technology that best support the smart web design. We always use the right tool for the right job. Here at Mediaone we develop websites using specific tools to meet the client's preferences and requirements.",
            icon: "/development.svg",
            items: [
              "Web Application",
              "API Integration",
              "Frontend & Backend Web Development",
              "IOS App Development",
              "Android App Development"
            ]
          },
          {
            category: "DESIGN",
            description:
              "The look and feel of an impressive website are caused by a smart web design, well planned user experience and the appropriate technology. Here at Mediaone we implement this process of creating web designs with the intention of prioritizing the content of a website on electronic web pages for the internet.",
            icon: "/design.svg",
            items: ["UI/UX Design", "Logo Design", "Visual Design"]
          },
          {
            category: "MEDIA BUY",
            description:
              "Every website development project requires technology that best support the smart web design. We always use the right tool for the right job. Here at Mediaone we develop websites using specific tools to meet the client's preferences and requirements.",
            icon: "/mediabuy.svg",
            items: [
              "Search Engine Marketing (SEM)",
              "Social Media Marketing (SMM)",
              "Lead Generation"
            ]
          },
          {
            category: "SEARCH ENGINE OPTIMIZATION (SEO)",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            icon: "/sEO.svg",
            items: ["SEO Subscription", "SEO Consultation", "SEO Audit"]
          }
        ]
      },
      engineeringServices: {
        title: "ENGINEERING SERVICES",
        category: "ENGINEERING SERVICES",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        icon: "/engineering.svg",
        servicesLeft: [
          "Auxiliary Services",
          "Structured Cabling",
          "Fire Alarm Systems",
          "Solar Panel System",
          "Security System"
        ],
        servicesRight: [
          "Building Automation",
          "Industrial Machine",
          "Nurse Call",
          "CCTV"
        ]
      },
      technologies: {
        title: "TECHNOLOGIES USED",
        image: "/techstack.svg"
      }
    },

    portfolio: {
      title: "WORKS & AWARDS",
      subtitle: "EXPLORE OUR SHOWCASE OF FEATURED WORKS",
      projects: [
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
      ],

      awardsSection: {
        title: "AWARDS",
        subtitle: "ACCOMPLISHMENTS"
      },
      awards: [
        {
          title: "Tech Behemoths",
          image: "/awards/Tech Behemoths.svg",
          year: "2023-2024"
        },
        {
          title: "Meta",
          image: "/awards/Meta.svg",
          year: "2023-2024"
        },
        {
          title: "Innovative Developers",
          image: "/awards/Innovative Developers.svg",
          year: "2023-2024"
        },
        {
          title: "Premier Software",
          image: "/awards/Premier Software.svg",
          year: "2023-2024"
        }
      ]
    },

    blog: {
      title: "BLOGS",
      recentBlogsTitle: "Recent Blogs",
      backgroundImages: {
        texture: "/Texture.svg"
      },
      posts: [
        {
          id: 1,
          title:
            "Unleashing Innovation with Custom Software Development Solutions",
          image: "/blogs/image (1).png",
          date: "OCTOBER 22, 2024",
          link: "/blog/custom-software-development",
          content:
            "In today's fast-paced digital world, businesses that fail to innovate risk being left behind. But let's be honest, innovation isn't just about adding some flashy feature or chasing the latest tech trend. It's about crafting custom software solutions that genuinely improve operations, boost efficiency, and (dare we say) give companies a competitive edge. And that's exactly where a reliable software development solutions company steps in."
        },
        {
          id: 2,
          title: "How CRM Software Transforms Your Customer Relationships",
          image: "/blogs/image (2).png",
          date: "OCTOBER 23, 2024",
          link: "/blog/crm-software"
        },
        {
          id: 3,
          title:
            "Why Project Management Software Is the Backbone of Modern Business",
          image: "/blogs/image (3).png",
          date: "OCTOBER 24, 2024",
          link: "/blog/project-management-software"
        },
        {
          id: 4,
          title: "Why Every Business Needs a Content Management System (CMS)",
          image: "/blogs/image (4).png",
          date: "OCTOBER 25, 2024",
          link: "/blog/content-management-system"
        }
      ]
    }
  };

  // Combine all content
  const content = {
    hero: heroContent,
    about: aboutContent,
    services: servicesContent,
    portfolio: portfolioContent,
    partners: partnersContent,
    awards: awardsContent,
    blog: blogContent,
    contact: contactContent,
    footer: footerContent,
    pages: pagesContent,
    navigationContent: navigationContent
  };

  return (
    <AppContentContext.Provider value={content}>
      {children}
    </AppContentContext.Provider>
  );
};

export default AppContentProvider;
