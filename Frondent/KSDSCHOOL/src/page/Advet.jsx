import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaSchool, 
  FaRunning, 
  FaLaptop, 
  FaUsers, 
  FaUniversity, 
  FaTools, 
  FaBook, 
  FaGraduationCap, 
  FaWallet 
} from 'react-icons/fa';

const ActivityCard = ({ title, description, icon, color, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`p-6 rounded-xl shadow-lg w-full sm:w-[48%] lg:w-[30%] xl:w-[22%] mb-6 relative overflow-hidden ${color} transition-all duration-300`}
      style={{ minHeight: '200px' }}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute -bottom-4 -right-4 opacity-20"
        animate={isHovered ? { scale: 1.5 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      
      <div className="flex items-start z-10 relative">
        <div className="text-white mr-4 text-3xl p-3 rounded-full bg-white bg-opacity-20">
          {icon}
        </div>
        <div>
          <h2 className="text-white font-bold text-lg mb-2">{title}</h2>
          <p className="text-white text-opacity-80 text-sm">{description}</p>
        </div>
      </div>
      
      {/* Animated "Learn More" button */}
      <motion.div
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
      >
        <button className="text-white text-xs font-semibold px-3 py-1 rounded-full border border-white border-opacity-30 hover:bg-white hover:bg-opacity-20 transition">
          Learn More →
        </button>
      </motion.div>
    </motion.div>
  );
};

const Activities = ({ colors }) => {
  const activities = [
    {
      title: "Know Your School",
      description: "Discover our UAE campus through virtual tours and information",
      icon: <FaSchool />,
      color: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      title: "Student Activities",
      description: "Explore our diverse extracurricular programs in the UAE",
      icon: <FaRunning />,
      color: "bg-gradient-to-br from-red-600 to-red-800"
    },
    {
      title: "Digital Learning",
      description: "Access our advanced e-learning resources and platforms",
      icon: <FaLaptop />,
      color: "bg-gradient-to-br from-yellow-600 to-yellow-800"
    },
    {
      title: "UAE Cultural Programs",
      description: "Our initiatives blending Indian and Emirati traditions",
      icon: <FaUsers />,
      color: "bg-gradient-to-br from-green-600 to-green-800"
    },
    {
      title: "Premium Facilities",
      description: "World-class infrastructure meeting UAE standards",
      icon: <FaUniversity />,
      color: "bg-gradient-to-br from-purple-600 to-purple-800"
    },
    {
      title: "Skill Development",
      description: "Vocational training aligned with UAE job market needs",
      icon: <FaTools />,
      color: "bg-gradient-to-br from-indigo-600 to-indigo-800"
    },
    {
      title: "Academic Excellence",
      description: "CBSE curriculum enhanced for UAE context",
      icon: <FaBook />,
      color: "bg-gradient-to-br from-pink-600 to-pink-800"
    },
    {
      title: "Alumni Network",
      description: "Connect with our successful graduates in UAE and beyond",
      icon: <FaGraduationCap />,
      color: "bg-gradient-to-br from-teal-600 to-teal-800"
    },
    {
      title: "Online Services",
      description: "Convenient digital payments and parent portal",
      icon: <FaWallet />,
      color: "bg-gradient-to-br from-orange-600 to-orange-800"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8" style={{ backgroundColor: colors.light }} id="activities">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.primary }}>
            Our School Activities
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: colors.accent }}></div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.dark }}>
            Discover the vibrant programs that combine academic excellence with UAE cultural values
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="flex flex-wrap justify-center">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              title={activity.title}
              description={activity.description}
              icon={activity.icon}
              color={activity.color}
              delay={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <button 
            className="px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
            style={{ 
              backgroundColor: colors.secondary,
              color: 'white'
            }}
          >
            View All Programs
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;