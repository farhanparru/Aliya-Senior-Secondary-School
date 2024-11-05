// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import schoolLogo from '../assets/images/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top section with logo, contact info, and navigation links */}
      <div className="max-w-7xl mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo and Address */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={schoolLogo}
            alt="School Logo"
            className="mb-4 w-24 h-24"
          />
          <p>Katampazhippuram PO</p>
          <p>Palakkad, Kerala, 678 633</p>
          <p>+91 8547 749 379</p>
          <p>0491 2980 464</p>
        </div>

        {/* Main Navigation */}
        <div>
          <h3 className="font-bold mb-4">MAIN NAVIGATION</h3>
          <ul>
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Academics</a></li>
            <li><a href="#" className="hover:underline">History</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Information For */}
        <div>
          <h3 className="font-bold mb-4">INFORMATION FOR</h3>
          <ul>
            <li><a href="#" className="hover:underline">Mission & Values</a></li>
            <li><a href="#" className="hover:underline">Management</a></li>
            <li><a href="#" className="hover:underline">Campus</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4">QUICK LINKS</h3>
          <ul>
            <li><a href="#" className="hover:underline">Mandatory Public Disclosure</a></li>
            <li><a href="#" className="hover:underline">Gallery</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom section with social icons */}
      <div className="bg-gray-900 py-5">
        <div className="flex items-center justify-center space-x-6">
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaYoutube size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Copyright and links */}
      <div className="bg-gray-200 py-4 text-center text-gray-600 text-sm">
        <p>Copyright © 2023 Sreekrishnapuram Central School. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:underline">Cookies</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
