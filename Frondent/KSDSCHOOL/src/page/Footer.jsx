// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#00203F] text-white">
      {/* Top Section with Payment System */}
      <div className="bg-[#FFD500] text-center py-4">
        <h3 className="text-xl font-bold">Online Payment System</h3>
        <p>We accept payment through Debit Card / Credit Card / Internet Banking / Mobile Banking</p>
        <button className="bg-teal-500 text-white py-2 px-6 rounded mt-2 hover:bg-teal-600">
          PAY NOW
        </button>
      </div>

      {/* Main Footer Section */}
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        
        {/* Student Activities Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Student Activities</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-[#FFD500]">Reading a gateway to knowledge</a></li>
            <li className="mb-2"><a href="#" className="hover:text-[#FFD500]">Eid-A festival of Devine Sacrifice</a></li>
            <li className="mb-2"><a href="#" className="hover:text-[#FFD500]">Pubescent Awareness</a></li>
            <li className="mb-2"><a href="#" className="hover:text-[#FFD500]">Keralappiravi Day</a></li>
          </ul>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Explore</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-[#FFD500]">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:text-[#FFD500]">About</a></li>
            <li className="mb-2"><a href="#" className="hover:text-[#FFD500]">Academics</a></li>
            <li className="mb-2"><a href="#" className="hover:text-[#FFD500]">Gallery</a></li>
            <li className="mb-2"><a href="#" className="hover:text-[#FFD500]">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p>Apsara Public School</p>
          <p>Apsara Nagar, Perumbala (PO)</p>
          <p>Kasaragod, Kerala, Pin-671316</p>
          <p>Phone: +91-4994-237222, 239222</p>
          <p>Email: <a href="mailto:apsaraschoolksd@gmail.com" className="hover:text-[#FFD500]">apsaraschoolksd@gmail.com</a></p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About</h3>
          <p className="mb-4">
            Apsara Public Schools offers an inspiring and exceptional education in an inclusive environment for students from Kindergarten to XII.
          </p>
          <a href="#" className="bg-[#FFD500] text-black px-4 py-2 rounded hover:bg-yellow-500">Read More</a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#003153] py-4 text-center">
        <p className="text-sm">&copy; Copyright 2020 by Third Eye Technology & Solutions.</p>
      </div>
    </footer>
  );
};

export default Footer;
