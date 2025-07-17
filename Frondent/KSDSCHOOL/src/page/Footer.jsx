import React from 'react';
import { 
  FaFacebookF, 
  FaYoutube, 
  FaInstagram, 
  FaTwitter,
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import schoolLogo from '../assets/images/logo.png';

const Footer = ({ colors }) => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", url: "#" },
        { name: "About Us", url: "#" },
        { name: "Admissions", url: "#" },
        { name: "Academics", url: "#" },
        { name: "School Calendar", url: "#" }
      ]
    },
    {
      title: "Our School",
      links: [
        { name: "Vision & Mission", url: "#" },
        { name: "Leadership", url: "#" },
        { name: "CBSE Curriculum", url: "#" },
        { name: "Facilities", url: "#" },
        { name: "School Policies", url: "#" }
      ]
    },
    {
      title: "UAE Resources",
      links: [
        { name: "KHDA Information", url: "#" },
        { name: "UAE National Agenda", url: "#" },
        { name: "Arabic Program", url: "#" },
        { name: "Islamic Studies", url: "#" },
        { name: "Cultural Activities", url: "#" }
      ]
    }
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaYoutube />, url: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16">
      {/* UAE Pattern Top Border */}
      <div className="h-2 w-full" style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary}, ${colors.accent})` }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* School Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <img 
              src={schoolLogo} 
              alt="School Logo" 
              className="h-20 w-auto"
            />
            <p className="text-gray-300">
              Providing quality CBSE education integrated with UAE national values and cultural heritage.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" style={{ color: colors.accent }} />
                <span>Al Nahda, Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-3 flex-shrink-0" style={{ color: colors.accent }} />
                <span>+971 4 123 4567</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 flex-shrink-0" style={{ color: colors.accent }} />
                <span>info@aliyaschool.ae</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-3 flex-shrink-0" style={{ color: colors.accent }} />
                <span>Sunday - Thursday: 7:30 AM - 3:30 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-bold uppercase tracking-wider" style={{ color: colors.accent }}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url} 
                      className="text-gray-300 hover:text-white transition-colors flex items-start"
                    >
                      <span className="mr-2" style={{ color: colors.primary }}>›</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pb-12 border-b border-gray-800"
        >
          <h3 className="text-lg font-bold mb-4" style={{ color: colors.accent }}>
            Subscribe to Our Newsletter
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2"
              style={{ focusBorderColor: colors.primary }}
            />
            <button 
              className="px-6 py-3 rounded-lg font-bold whitespace-nowrap"
              style={{ 
                backgroundColor: colors.primary,
                color: 'white'
              }}
            >
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ y: -3 }}
                href={social.url}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-gray-700 transition-colors"
                style={{ color: colors.accent }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Aliya Senior Secondary School, Dubai. All rights reserved.</p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              KHDA Compliance
            </a>
          </div>
        </div>
      </div>

      {/* UAE Flag Inspired Bottom Border */}
      <div className="h-4 w-full mt-4 flex">
        <div className="w-1/4" style={{ backgroundColor: colors.primary }}></div>
        <div className="w-1/4" style={{ backgroundColor: colors.secondary }}></div>
        <div className="w-1/4" style={{ backgroundColor: colors.accent }}></div>
        <div className="w-1/4" style={{ backgroundColor: colors.primary }}></div>
      </div>
    </footer>
  );
};

export default Footer;