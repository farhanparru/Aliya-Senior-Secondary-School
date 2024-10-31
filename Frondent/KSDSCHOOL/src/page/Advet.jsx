// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaUserGraduate, FaLightbulb } from 'react-icons/fa';
import main from '../assets/images/1586489840_about-1-1.jpg'

const Advertisement = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white py-12 px-6 md:px-12">
      <div className="md:w-1/2 space-y-6 text-left">
        <h2 className="text-4xl font-bold text-gray-800">Welcome To Apsara Public School</h2>
        <p className="text-gray-600 leading-relaxed">
          Apsara Public Schools offers an inspiring and exceptional education in an inclusive environment for students from Kindergarten to XII. As a caring school committed to overall excellence, APS aims to train and guide its students to fit the role of leaders capable of bringing their creative vision and innovative solutions to benefit the changing world.
        </p>
        
        <div className="flex space-x-10 mt-8">
          <div className="flex items-center space-x-3">
            <FaUserGraduate className="text-teal-500 text-3xl" />
            <div>
              <h4 className="font-semibold text-gray-800">Start learning from our experts</h4>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaLightbulb className="text-teal-500 text-3xl" />
            <div>
              <h4 className="font-semibold text-gray-800">Enhance your skills with us now</h4>
            </div>
          </div>
        </div>
        
        <button className="bg-indigo-700 text-white px-8 py-3 rounded-full hover:bg-indigo-800 mt-8">
          Learn More
        </button>
      </div>
      
      <div className="md:w-1/2 mt-8 md:mt-0 relative flex items-center justify-center">
        <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-lg">
          <img src={main} alt="Student" className="w-full h-full object-cover" />
          {/* Arc overlay */}
          <div className="absolute inset-0 border-4 border-t-0 border-l-0 border-orange-500 rounded-full"></div>
        </div>

        {/* Student count badge */}
        <div className="absolute bottom-6 right-12 bg-white shadow-lg p-6 rounded-full text-center transform translate-x-1/2">
          <p className="text-lg font-semibold text-gray-800">STUDENTS</p>
          <p className="text-3xl font-bold text-orange-600">4890</p>
        </div>

        {/* Dotted background */}
        <div className="absolute -right-24 top-0 w-32 h-32 bg-pattern-dots-sm bg-orange-500 bg-opacity-20"></div>
      </div>
    </div>
  );
};

export default Advertisement;
