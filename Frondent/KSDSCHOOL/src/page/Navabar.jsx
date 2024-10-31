// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../assets/images/download.jpeg'

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-purple-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Contact Information */}
        <div className="text-sm">
          <span>info@apsarapublicschool.com | +91-4994-237222</span>
        </div>
        {/* Login/Register */}
        <div className="text-sm">
          <a href="#login" className="hover:underline">
            Login
          </a>
          <span> / </span>
          <a href="#register" className="hover:underline">
            Register
          </a>
        </div>
      </div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 mr-2" />
            <span className="font-bold text-lg text-gray-700">KSD Public School</span>
          </a>
          {/* Nav Links */}
          <ul className="flex space-x-6 text-gray-700 font-semibold">
            <li>
              <a href="#home" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about-us" className="hover:text-blue-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#apsara" className="hover:text-blue-600">
                Apsara
              </a>
            </li>
            <li>
              <a href="#admission" className="hover:text-blue-600">
                Admission
              </a>
            </li>
            <li>
              <a href="#academics" className="hover:text-blue-600">
                Academics
              </a>
            </li>
            <li>
              <a href="#beyond-academics" className="hover:text-blue-600">
                Beyond Academics
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-blue-600">
                Gallery
              </a>
            </li>
            <li>
              <a href="#career" className="hover:text-blue-600">
                Career
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
