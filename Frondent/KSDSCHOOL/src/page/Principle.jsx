// eslint-disable-next-line no-unused-vars
import React from 'react';

const Principle = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-black text-white p-8 space-y-6 md:space-y-0 md:space-x-8">
      <div className="md:w-2/3 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Message From The Principal</h1>
        <p className="text-base md:text-lg mb-6">
          Dear Students, Parents and Staff,
          <br />
          As we come to the close of another enriching academic year, I am filled with a deep sense of gratitude and pride for all that we have accomplished together. This year has presented us with unique challenges, yet it has also been a testament to our resilience, adaptability, and resolute dedication to excellence.
          <br />
          I have been truly inspired by my student’s tenacity to learning, their creativity, and their willingness to embrace new ideas. They have
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition">
            VIEW MORE
          </button>
        </div>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <img
          src="https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png" // Replace this URL with the principal's photo URL
          alt="Principal"
          className="w-40 h-40 object-cover border border-white"
        />
      </div>
    </div>
  );
};

export default Principle;
