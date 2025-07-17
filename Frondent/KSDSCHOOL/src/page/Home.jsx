import React from 'react';
import scholl from '../assets/images/2017-08-08.jpg';
import { FaCalendarAlt, FaBook, FaGraduationCap } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const Home = ({ colors }) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50" id="home">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.primary }}>
            Welcome to Aliya Senior Secondary School
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg font-semibold" style={{ color: colors.secondary }}>
            [CBSE BOARD] - UAE Branch
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Image Section */}
          <div className="lg:w-2/5 relative">
            <img 
              src={scholl} 
              alt="School Building" 
              className="w-full h-auto rounded-xl shadow-xl transform hover:scale-105 transition duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border-l-4" style={{ borderColor: colors.primary }}>
              <p className="font-bold text-sm" style={{ color: colors.primary }}>Since 2005</p>
              <p className="text-xs text-gray-600">Providing Quality Education</p>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-3/5">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4" style={{ borderColor: colors.secondary }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
                Excellence in Education with UAE Values
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Aliya Senior Secondary School, established in 2005 and affiliated with the CBSE Board, brings its legacy of academic excellence to the UAE. Our Kowdiar Campus philosophy integrates the visionary educational principles of St Kuriakose Elias Chavara with the dynamic, multicultural environment of the Emirates.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                As we serve the aspirations of the UAE's evolving society, we maintain our hallmark of excellence while embracing local culture and values. Our mission is to guide every Aliya student to greater heights in life, preparing them as global citizens with strong roots in both Indian and Emirati traditions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  className="px-6 py-3 rounded-lg font-bold text-white hover:shadow-lg transition-all"
                  style={{ backgroundColor: colors.primary }}
                >
                  Discover Our Programs
                </button>
                <button 
                  className="px-6 py-3 rounded-lg font-bold border-2 hover:shadow-lg transition-all"
                  style={{ 
                    borderColor: colors.primary,
                    color: colors.primary
                  }}
                >
                  Meet Our Faculty
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notice Board Section - Modern Card Design */}
        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div 
            className="p-4 text-white font-bold text-xl"
            style={{ backgroundColor: colors.primary }}
          >
            <h3>ANNOUNCEMENTS</h3>
          </div>
          <div className="p-6 grid md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="mr-4 mt-1" style={{ color: colors.secondary }}>
                <FaCalendarAlt size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-2">Academic Calendar</h4>
                <p className="text-gray-600">Re-Opening Dates 2024-25 (Tentative)</p>
                <a href="#" className="text-sm font-medium mt-2 inline-block" style={{ color: colors.secondary }}>
                  View Full Calendar →
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1" style={{ color: colors.secondary }}>
                <FaBook size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-2">Book Distribution</h4>
                <p className="text-gray-600">Schedule for Text Books & Note Books 2024-25</p>
                <a href="#" className="text-sm font-medium mt-2 inline-block" style={{ color: colors.secondary }}>
                  Download Schedule →
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1" style={{ color: colors.secondary }}>
                <FaGraduationCap size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-2">Special Events</h4>
                <p className="text-gray-600">Kindergarten Convocation Day 2023-24 Invitation</p>
                <a href="#" className="text-sm font-medium mt-2 inline-block" style={{ color: colors.secondary }}>
                  Event Details →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* UAE Cultural Integration Highlight */}
        <div className="mt-16 p-8 rounded-xl" style={{ backgroundColor: colors.primary, backgroundImage: 'linear-gradient(to right, #0C4DA2, #0C4DA2, #0C6DA2)' }}>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Bridging Indian Excellence with UAE Vision</h3>
            <p className="mb-6 text-lg">
              At Aliya Senior Secondary School UAE, we combine CBSE academic rigor with appreciation for UAE heritage, offering Arabic language classes, local history modules, and celebrating national occasions to foster true cultural integration.
            </p>
            <button 
              className="px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
              style={{ 
                backgroundColor: colors.accent,
                color: colors.dark
              }}
            >
              Learn About Our UAE Integration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;