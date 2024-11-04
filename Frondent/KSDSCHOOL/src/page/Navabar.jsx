import { useState, useEffect } from 'react';
import Activities from './Advet';
import Home from './Home';

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
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: `url(${backgroundImages[currentBackground]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          height: '100%',
          width: '100%',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Navbar */}
      <div className="relative z-10 flex items-center justify-between px-8 py-4">
        <div className="text-white text-2xl font-bold">My Logo</div>
        <div className="space-x-8 text-white text-lg hidden md:flex">
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
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Welcome to Aliya Public School
        </h1>
      </div>
  <Activities/>
  <Home/>
    </div>
  );
};

export default NavbarWithBackground;
