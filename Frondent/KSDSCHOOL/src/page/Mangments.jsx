import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Mangments = ({ colors }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const managementTeam = [
    {
      id: 1,
      image: "https://img.freepik.com/free-photo/portrait-arab-businessman_23-2148311078.jpg",
      name: "Sheikh Khalid Al Maktoum",
      position: "Chairman",
      bio: "Visionary leader with 20+ years in educational administration across UAE.",
      achievements: "Established 15 schools in the Emirates",
    },
    {
      id: 2,
      image: "https://img.freepik.com/free-photo/portrait-arab-businesswoman_23-2148311081.jpg",
      name: "Dr. Amina Al Farsi",
      position: "Principal",
      bio: "PhD in Educational Leadership from UAE University, specializing in bilingual curriculum.",
      achievements: "Awarded 'Best Educator in GCC' 2022",
    },
    {
      id: 3,
      image: "https://img.freepik.com/free-photo/portrait-arab-businessman_23-2148311078.jpg",
      name: "Mr. Rajesh Kumar",
      position: "Vice Principal",
      bio: "Specialist in CBSE curriculum adaptation for UAE context with 15 years experience.",
      achievements: "Developed UAE-India cultural exchange program",
    },
    {
      id: 4,
      image: "https://img.freepik.com/free-photo/portrait-arab-businesswoman_23-2148311081.jpg",
      name: "Ms. Fatima Al Nahyan",
      position: "Academic Director",
      bio: "Expert in integrating UAE national identity with international education standards.",
      achievements: "Pioneered Arabic language immersion program",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8" style={{ backgroundColor: colors.light }} id="management">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.primary }}>
            Our Leadership Team
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: colors.accent }}></div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.dark }}>
            Guiding our institution with UAE values and global educational excellence
          </p>
        </motion.div>

        {/* UAE-Inspired Carousel */}
        <div className="relative">
          <Slider {...settings} className="px-2">
            {managementTeam.map((member) => (
              <motion.div 
                key={member.id}
                whileHover={{ scale: 1.03 }}
                className="px-2 py-4 focus:outline-none"
              >
                <div className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4" style={{ borderColor: colors.primary }}>
                  {/* UAE-Style Image Frame */}
                  <div className="relative pt-8 px-8">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4" style={{ borderColor: colors.accent }}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>

                  <div className="p-6 pt-16 text-center">
                    <h3 className="text-xl font-bold mb-1" style={{ color: colors.primary }}>{member.name}</h3>
                    <p className="text-sm font-medium mb-4" style={{ color: colors.secondary }}>{member.position}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    
                    {/* UAE-Inspired Achievement Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4" style={{ 
                      backgroundColor: `${colors.accent}20`,
                      color: colors.dark
                    }}>
                      <span className="mr-1">🏆</span> {member.achievements}
                    </div>

                    {/* Contact Button with UAE Colors */}
                    <button className="w-full py-2 rounded-lg font-medium text-sm transition-all" style={{ 
                      backgroundColor: `${colors.primary}10`,
                      color: colors.primary,
                      border: `1px solid ${colors.primary}`
                    }}>
                      View Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        {/* UAE Pattern Decoration */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-4">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: item * 0.3
                }}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: colors.primary }}
              ></motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Arrows with UAE Styling
const NextArrow = ({ onClick }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 p-3 rounded-full cursor-pointer shadow-lg"
    style={{ backgroundColor: '#0C4DA2' }}
    onClick={onClick}
  >
    <FaArrowRight className="text-white text-lg" />
  </motion.div>
);

const PrevArrow = ({ onClick }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 p-3 rounded-full cursor-pointer shadow-lg"
    style={{ backgroundColor: '#0C4DA2' }}
    onClick={onClick}
  >
    <FaArrowLeft className="text-white text-lg" />
  </motion.div>
);

export default Mangments;