import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import gallry1 from '../assets/images/gallry1.jpeg';
import gallry2 from '../assets/images/gallry2.jpeg';
import gallry3 from '../assets/images/gallry3.jpeg';
import gallry4 from '../assets/images/gallry 4.jpg';
import gallry5 from '../assets/images/gallry5.jpg';
import gallry6 from '../assets/images/gallry6.jpeg';

const Gallery = ({ colors }) => {
  const [activeTab, setActiveTab] = useState('images');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { id: 1, src: gallry1, category: 'campus', title: 'School Campus View' },
    { id: 2, src: gallry2, category: 'events', title: 'National Day Celebration' },
    { id: 3, src: gallry3, category: 'activities', title: 'Science Fair Exhibition' },
    { id: 4, src: gallry4, category: 'campus', title: 'Modern Library' },
    { id: 5, src: gallry5, category: 'events', title: 'Sports Day' },
    { id: 6, src: gallry6, category: 'activities', title: 'Art Competition' },
    // Add more images as needed
  ];

  const openImage = (img, index) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    } else {
      newIndex = (currentIndex + 1) % galleryImages.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section className="py-16 px-4 md:px-8" style={{ backgroundColor: colors.light }} id="gallery">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.primary }}>
            Our School Gallery
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: colors.accent }}></div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.dark }}>
            Capturing moments of excellence and cultural celebration
          </p>
        </motion.div>

        {/* Gallery Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg p-1" style={{ backgroundColor: `${colors.primary}20` }}>
            {['images', 'videos'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${activeTab === tab ? 'text-white' : 'text-gray-600'}`}
                style={{
                  backgroundColor: activeTab === tab ? colors.primary : 'transparent',
                  textTransform: 'capitalize'
                }}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
              onClick={() => openImage(img, index)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-48 md:h-56 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <h3 className="text-white font-medium">{img.title}</h3>
              </div>
              <div className="absolute top-2 right-2 bg-white/90 text-xs px-2 py-1 rounded-full" style={{ color: colors.primary }}>
                {img.category}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg font-bold"
            style={{ 
              backgroundColor: colors.primary,
              color: 'white'
            }}
          >
            View Full Gallery
          </motion.button>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={closeImage}
            >
              <FiX />
            </button>
            
            <button 
              className="absolute left-6 text-white text-3xl p-2 rounded-full bg-white/20"
              onClick={() => navigate('prev')}
            >
              <FiChevronLeft />
            </button>
            
            <div className="max-w-4xl w-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-sm opacity-80">{currentIndex + 1} / {galleryImages.length}</p>
              </div>
            </div>
            
            <button 
              className="absolute right-6 text-white text-3xl p-2 rounded-full bg-white/20"
              onClick={() => navigate('next')}
            >
              <FiChevronRight />
            </button>
          </div>
        )}

        {/* UAE Pattern Divider */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((item) => (
              <div 
                key={item}
                className="w-3 h-3 rounded-full"
                style={{ 
                  backgroundColor: item % 2 === 0 ? colors.primary : colors.accent,
                  opacity: 0.6
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;