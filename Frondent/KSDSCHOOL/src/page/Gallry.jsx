// eslint-disable-next-line no-unused-vars
import React from 'react';
import gallry1 from '../assets/images/gallry1.jpeg'
import gallry2 from '../assets/images/gallry2.jpeg'
import gallry3 from '../assets/images/gallry3.jpeg'
import gallry4 from '../assets/images/gallry 4.jpg'
import gallry5 from '../assets/images/gallry5.jpg'
import gallry6 from '../assets/images/gallry1.jpeg'

const Gallery = () => {
  return (
    <div className="bg-blue-900 p-8">
      <h1 className="text-center text-3xl font-bold text-white mb-6">Gallery</h1>
      <div className="flex justify-center space-x-4 mb-8">
        <button className="text-white px-4 py-2 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 transition-colors">IMAGES</button>
        <button className="text-white px-4 py-2 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 transition-colors">VIDEOS</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <img src={gallry1} alt="Gallery Image 1" className="w-full h-auto object-cover" />
        <img src={gallry2} alt="Gallery Image 2" className="w-full h-auto object-cover" />
        <img src={gallry3} alt="Gallery Image 3" className="w-full h-auto object-cover" />
        <img src={gallry4} alt="Gallery Image 4" className="w-full h-auto object-cover" />
        <img src={gallry5} alt="Gallery Image 5" className="w-full h-auto object-cover" />
        <img src={gallry6} alt="Gallery Image 6" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

export default Gallery;
