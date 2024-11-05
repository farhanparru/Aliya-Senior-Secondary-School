// eslint-disable-next-line no-unused-vars
import React from 'react';
import scholl from '../assets/images/2017-08-08.jpg'

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 max-w-6xl mx-auto" >
      {/* Image Section */}
      <div className="w-full md:w-1/3 mb-8 md:mb-0" >
        <img 
          src={scholl} 
          alt="School Building" 
          className="w-full h-auto rounded-lg shadow-lg" style={{marginLeft:"-18px"}}
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
          Welcome to the Aliya Senior Secondary School
        </h1>
        <p className="text-lg font-semibold text-center md:text-left mb-2 text-gray-600">
          [CBSE BOARD]
        </p>
        <p className="text-gray-700 leading-relaxed text-justify mb-4">
        Aliya Senior Secondary School, started in 2005, at Kowdiar Campus got affiliated to the CBSE Board of Secondary Education (1-10) in 2013-’14 and to the Senior Secondary section (11-12) in 2018-19. As envisioned by St Kuriakose Elias Chavara, the founder of the CMI Congregation, CNCS caters to the aspirations of a fast changing society for quality education. The school has achieved credible laurels in all fields. Excellence is the hallmark of Christ Nagar Institutions. The vision and mission of CNCS is to lead every Christ Nagarian to greater heights in life.
        </p>
        <button className="px-4 py-2 border border-gray-800 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition duration-300 self-center md:self-start">
          VIEW MORE
        </button>
      </div>

      {/* Notice Board Section */}
      <div className="w-full md:w-1/4 bg-red-600 text-white p-4 rounded-lg shadow-lg mt-8 md:mt-0 md:ml-8">
        <h2 className="text-xl font-bold mb-4">NOTICE BOARD</h2>
        <ul className="space-y-2">
          <li>✅ Re-Opening Dates 2024-25 (Tentative)</li>
          <li>✅ Schedule for Distribution of Text Books & Note Books 2024-25</li>
          <li>✅ KINDERGARTEN CONVOCATION DAY 2023-24 INVITATION</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
