// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Mangments = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const schoolImages = [
    {
      id: 1,
      image: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png",
      title: "Modern Classrooms",
      description: "Engaging and well-equipped classrooms for effective learning.",
    },
    {
      id: 2,
      image: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png",
      title: "Sports Facilities",
      description: "World-class sports facilities for student development.",
    },
    {
      id: 3,
      image: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png",
      title: "Library Resources",
      description: "A vast collection of books and resources for students.",
    },
    {
      id: 4,
      image: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png",
      title: "Laboratories",
      description: "State-of-the-art labs for science and technology experiments.",
    },
  ];

  return (
    <div className="mt-3 relative max-w-screen-lg mx-auto">
      <Slider {...settings} className="relative">
        {schoolImages.map((item) => (
          <div key={item.id} className="p-2">
            <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden w-[300px] h-[350px] mx-auto">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded shadow">
                {item.title}
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <button className="explore-button absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white w-full py-2 rounded-lg transition-all duration-300 group-hover:bottom-4">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-gray-800 rounded-full cursor-pointer"
    onClick={onClick}
  >
    <svg
      className="w-5 h-5 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

// eslint-disable-next-line react/prop-types
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-gray-800 rounded-full cursor-pointer"
    onClick={onClick}
  >
    <svg
      className="w-5 h-5 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5l-7 7 7 7" />
    </svg>
  </div>
);

export default Mangments;
