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
  const [scrolled, setScrolled] = useState(false);

  // UAE-inspired color scheme
  const colors = {
    primary: '#0C4DA2', // UAE flag blue
    secondary: '#E30A17', // UAE flag red
    accent: '#FFD700', // Gold accent
    light: '#F5F5F5',
    dark: '#222222'
  };

  // UAE-relevant background images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1517825738774-7de9363ef735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  ];

  // UAE-appropriate navigation items
  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Academics', path: '#academics' },
    { name: 'Admission', path: '#admission' },
    { name: 'School Life', path: '#life' },
    { name: 'News', path: '#news' },
    { name: 'Contact', path: '#contact' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [backgroundImages.length]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full">
      {/* Hero Section with Background */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${backgroundImages[currentBackground]})`,
            height: '100%',
            width: '100%',
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C4DA2] to-[#0C4DA2]/70"></div>
        </div>

        {/* Navbar */}
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="School Logo" 
                className={`h-12 transition-all duration-300 ${scrolled ? 'filter brightness(0)' : ''}`} 
              />
              {scrolled && (
                <h1 className="ml-4 text-xl font-bold" style={{ color: colors.primary }}>
                  Aliya Senior Secondary School
                </h1>
              )}
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  href={item.path}
                  key={item.name}
                  className={`font-medium transition-all duration-300 ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-300'}`}
                >
                  {item.name}
                </a>
              ))}
              <button 
                className="px-6 py-2 rounded-full font-bold text-white"
                style={{ backgroundColor: colors.secondary }}
              >
                Apply Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="text-2xl md:hidden"
              onClick={toggleMenu}
              style={{ color: scrolled ? colors.primary : 'white' }}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 pt-20"
            style={{ marginTop: '0' }}
          >
            {navItems.map((item) => (
              <a
                href={item.path}
                key={item.name}
                className="text-2xl font-medium"
                style={{ color: colors.primary }}
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
            <button 
              className="px-8 py-3 rounded-full font-bold text-white mt-4"
              style={{ backgroundColor: colors.secondary }}
            >
              Apply Now
            </button>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center container mx-auto">
          <h1 
            className="text-white text-4xl md:text-6xl font-bold mb-6"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            Excellence in Education <br/> 
            <span style={{ color: colors.accent }}>UAE-Inspired Learning</span>
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl">
            Preparing future leaders with a curriculum that combines academic excellence and UAE cultural values
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="px-8 py-3 rounded-full font-bold text-white"
              style={{ backgroundColor: colors.secondary }}
            >
              Explore Programs
            </button>
            <button 
              className="px-8 py-3 rounded-full font-bold"
              style={{ 
                backgroundColor: 'transparent',
                border: `2px solid ${colors.accent}`,
                color: colors.accent
              }}
            >
              Virtual Tour
            </button>
          </div>
        </div>

        
      </div>

      {/* Main Content Sections */}
      <div className="relative z-10 bg-white">
        <Home colors={colors} />
        <Activities colors={colors} />
        <Mangments colors={colors} />
        <Principle colors={colors} />
        <Gallery colors={colors} />
        <Footer colors={colors} />
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl animate-bounce"
          style={{ backgroundColor: colors.secondary }}
        >
          <i className="fas fa-comment-alt text-white text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default NavbarWithBackground;