import { useState, useEffect } from 'react';
import Activities from './Advet';
import Home from './Home';
import logo from '../assets/images/logo.png';
import Mangments from './Mangments';
import Principle from './Principle';
import Gallery from './Gallry';
import Footer from './Footer';

const NavbarWithBackground = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(0);

  // List of background images
  const backgroundImages = [
    'https://www.theasianschool.net/blog/wp-content/uploads/2018/10/St.-Xaviers-Collegiate-School-Kolkata.jpg',
    'https://blog.boardingschoolsofindia.com/wp-content/uploads/2024/07/The-Doon-School.webp',
    'https://candidschools.com/wp-content/uploads/2024/08/4-1-1024x576.jpg'
  ];

  // Function to toggle menu on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Automatically change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: `url(${backgroundImages[currentBackground]})`,
          height: '100%',
          width: '100%',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Navbar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4 md:px-8">
        <img src={logo} alt="School Logo" className="h-10 md:h-12" />
        
        <div className="space-x-4 md:space-x-8 text-white text-sm md:text-lg hidden md:flex">
          {['Home', 'About', 'Services', 'Career', 'Admission', 'Contact', 'Login', 'Register'].map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white text-lg z-20 md:hidden">
          {['Home', 'About', 'Services', 'Career', 'Admission', 'Contact', 'Login', 'Register'].map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
          <button
            className="text-xl font-bold absolute top-4 right-4"
            onClick={toggleMenu}
          >
            &#10005; {/* Close icon */}
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <h1 className="text-white text-3xl md:text-6xl font-bold text-center">
          Welcome to Aliya Senior Secondary School
        </h1>
      </div>
      
      {/* Additional Components */}
      <div className="relative z-10">
        <Activities />
        <Home />
        <Mangments/>
        <Principle/>
        <Gallery/>
        
        <Footer/>
       
      </div>
    </div>
  );
};

export default NavbarWithBackground;
