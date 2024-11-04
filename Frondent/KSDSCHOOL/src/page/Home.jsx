// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle'; // Ensure to import the necessary Swiper modules
import 'swiper/swiper-bundle.css'; // Import Swiper styles


const Home = () => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const mySwiper = new Swiper('.swiper-container', {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
      },
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []); // Run once on mount

  return (
    <div className="flex flex-col items-center py-12">
      <h2 className="text-2xl font-bold mb-6">School Managements</h2>
      <div className="swiper-container w-[750px]">
        <div className="swiper-wrapper">
          <div className="swiper-slide w-[300px]">
            <img src="https://img.freepik.com/premium-photo/man-with-beard-blue-circle-with-white-background_1057389-84761.jpg" alt="Principal" />
            <span className="block text-center font-semibold mt-2">John Doe</span>
            <span className="block text-center text-sm text-gray-600">Principal</span>
          </div>
          <div className="swiper-slide w-[300px]">
            <img src="https://img.freepik.com/premium-photo/man-with-beard-blue-circle-with-white-background_1057389-84761.jpg" alt="Vice Principal" />
            <span className="block text-center font-semibold mt-2">Jane Smith</span>
            <span className="block text-center text-sm text-gray-600">Vice Principal</span>
          </div>
          <div className="swiper-slide w-[300px]">
            <img src="https://img.freepik.com/premium-photo/man-with-beard-blue-circle-with-white-background_1057389-84761.jpg" alt="Administrator" />
            <span className="block text-center font-semibold mt-2">Alice Johnson</span>
            <span className="block text-center text-sm text-gray-600">Administrator</span>
          </div>
          <div className="swiper-slide w-[300px]">
            <img src="https://img.freepik.com/premium-photo/man-with-beard-blue-circle-with-white-background_1057389-84761.jpg" alt="Teacher" />
            <span className="block text-center font-semibold mt-2">Bob Brown</span>
            <span className="block text-center text-sm text-gray-600">Teacher</span>
          </div>
          <div className="swiper-slide w-[300px]">
            <img src="https://img.freepik.com/premium-photo/man-with-beard-blue-circle-with-white-background_1057389-84761.jpg" alt="Counselor" />
            <span className="block text-center font-semibold mt-2">Emily White</span>
            <span className="block text-center text-sm text-gray-600">Counselor</span>
          </div>
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
}

export default Home;
