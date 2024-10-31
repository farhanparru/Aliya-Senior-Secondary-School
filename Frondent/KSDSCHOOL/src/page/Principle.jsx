// eslint-disable-next-line no-unused-vars
import React from 'react';
import avatar from '../assets/images/download (1).jpeg'
const PrincipalSection = () => {
  return (
    <div className="w-full">
      {/* Admissions Message Section */}
      <div className="bg-yellow-400 text-center py-8">
        <h2 className="text-lg font-semibold mb-4 px-4">
          Admissions are open to Kindergarten to First standard only and to other classes admission is based on the vacancy of seats available.
        </h2>
        
        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Download Brochure</button>
          <button className="border border-black text-black px-4 py-2 rounded hover:bg-gray-200 transition">View Admission</button>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Download Application</button>
        </div>
      </div>

      {/* Principal's Message and Image Section */}
      <div className="flex flex-col md:flex-row bg-blue-900 text-white p-8 md:p-16">
        {/* Message Section */}
        <div className="flex-1 text-left md:pr-8 mb-8 md:mb-0">
          <p className="text-lg italic mb-6">
            “We honour the trust parents place on us. We take the responsibility seriously, and strive for the safety, security and scholastic achievements of our students. Our school is a cheerful centre of excellence, and a caring institution. Each of our pupils will feel supported and cared for in the joyful fold of Apsara Public School. Our students thrive in the stimulating environment we provide them in the school. We aim to arouse and challenge the minds of our pupils to help them attain all-round excellence.”
          </p>
          <p className="font-bold">PRINCIPAL</p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={avatar}
            alt="Principal"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default PrincipalSection;
