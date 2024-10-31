// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import firstLogo from '../assets/images/1588662828.slide2.jpg'
import sendond from '../assets/images/1588662909.slide4.jpg'
import third from '../assets/images/1588662869.slide3.jpg'
import last from '../assets/images/1588662922.slide6.jpg'
import Advet from "./Advet";
import Principle from "./Principle";
import FormAdmission from "./FormAdmision";
import Gallery from "./Gallry";
import Latest from '../page/Latest'


const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
        type: "image",
        src: `${firstLogo}`,
    },
    {
      type: "image",
      src: `${sendond}`,
    },
    {
      type: "image",
      src: `${third}`,
    },
    {
      type: "image",
      src: `${last}`,
    },
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-64 overflow-hidden rounded-lg md:h-96 lg:h-[35rem]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full duration-700 ease-in-out ${
                index === activeSlide ? "block" : "hidden"
              }`}
              data-carousel-item
            >
              {slide.type === "video" ? (
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={slide.src}
                  className="w-full h-64 md:h-80 lg:h-[37rem] object-cover"
                  alt={`Slide ${index + 1}`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === activeSlide ? "bg-white" : "bg-gray-400"
              }`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
            ></button>
          ))}
        </div>

        {/* Previous Button */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 6 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 1L1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 6 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 9l4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    
    <Principle/>
    <Advet/>
    <FormAdmission/>
    <Gallery/>
    <Latest/>
    </div>
  );
};

export default Home;
