import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaSignature } from 'react-icons/fa';

const Principle = ({ colors }) => {
  return (
    <section 
      className="py-16 px-4 md:px-8 relative overflow-hidden"
      style={{ backgroundColor: colors.light }}
      id="principal-message"
    >
      {/* UAE-inspired decorative elements */}
      <div 
        className="absolute top-0 left-0 w-full h-2"
        style={{ backgroundColor: colors.primary }}
      ></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: colors.secondary }}></div>
      <div className="absolute top-20 left-20 w-16 h-16 rounded-full opacity-10" style={{ backgroundColor: colors.accent }}></div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Principal's Image with UAE-style frame */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative lg:w-2/5 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-2xl border-4" style={{ borderColor: colors.primary }}></div>
              <div className="absolute inset-4 rounded-xl border-2" style={{ borderColor: colors.accent }}></div>
              <img
                src="https://img.freepik.com/free-photo/portrait-arab-businessman_23-2148311078.jpg"
                alt="Principal"
                className="w-full h-full object-cover rounded-xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg z-20 border-t-4" style={{ borderColor: colors.secondary }}>
                <FaSignature className="text-2xl" style={{ color: colors.primary }} />
              </div>
            </div>
          </motion.div>

          {/* Message Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <div className="mb-6 flex items-center">
              <div className="w-12 h-1 mr-4" style={{ backgroundColor: colors.accent }}></div>
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: colors.secondary }}>
                Principal's Message
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.primary }}>
              A Word From Our Principal
            </h2>

            <div className="relative">
              <FaQuoteLeft 
                className="absolute -top-2 -left-2 text-4xl opacity-10" 
                style={{ color: colors.primary }}
              />
              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                "Dear Students, Parents, and Staff,
                <br /><br />
                As we come to the close of another enriching academic year at our UAE campus, I am filled with gratitude for our shared achievements in blending CBSE excellence with UAE cultural values. This year has demonstrated our community's resilience and commitment to holistic education.
                <br /><br />
                Our students have shown remarkable adaptability, embracing both technological advancements and cultural traditions. Their achievements in academics, sports, and cultural programs make me immensely proud."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-bold text-white"
                style={{ backgroundColor: colors.primary }}
              >
                Read Full Message
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-bold border-2"
                style={{ 
                  borderColor: colors.primary,
                  color: colors.primary
                }}
              >
                Meet The Principal
              </motion.button>
            </div>
          </motion.div>
        </div>

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

export default Principle;