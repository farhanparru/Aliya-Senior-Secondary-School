// eslint-disable-next-line no-unused-vars
import React from 'react';
import school from '../assets/images/school-board-background-png-favpng-rqx5JutRz4b7mCuzNyY1J3mG4.jpg'

const WhiteSchoolInternational = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Image Section */}
        <div className="md:w-1/2">
          <img 
            src={school}
            alt="The White School International" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center bg-blue-900 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            THE WHITE SCHOOL INTERNATIONAL
          </h2>
          <p className="mb-4 text-gray-200 leading-relaxed">
            The White School International (TWSI) is a premier K-12 day-cum-boarding school located in Calicut, India. 
            It was founded by Mr. P. Sulaiman, the Chairman of HiLITE Group, with the goal of becoming one of the worlds 
            leading schools. TWSI offers students the choice of three syllabi: 
            <span className="font-bold text-yellow-400"> International Baccalaureate (IB), Edexcel, and CBSE</span>;
            being the only school in Kerala to do so.
          </p>
          <p className="mb-4 text-gray-200">
            As Kerala s first IB Continuum School, TWSI provides IB education right from the Early Years to the Diploma Programme level.
          </p>
          <a 
            href="#" 
            className="inline-block bg-yellow-500 text-blue-900 px-4 py-2 mt-4 rounded hover:bg-yellow-600 transition ease-in-out duration-200"
          >
            READ MORE →
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhiteSchoolInternational;
