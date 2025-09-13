// components/Banner.jsx
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // React Icons

const slides = [
  {
    title: `Fresh & Healthy Organic Food`,
    subtitle: "WELCOME TO SHOPERY",
    offer: "Sale up to 30% OFF",
    description: "Free shipping on all your order. We deliver, you enjoy.",
    image: "/src/assets/banner/Image.png",
    btnText: "Shop now",
  },
  {
    title: "100% Organic & Natural",
    subtitle: "NEW SEASON DEALS",
    offer: "Get up to 25% OFF",
    description: "Organic veggies delivered to your doorstep.",
    image: "/src/assets/banner/Image.png",
    btnText: "Explore Now",
  },
];

const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      {/* Arrows */}
      <div className="absolute top-1/2 left-4 z-10 -translate-y-1/2 xl:mx-w[1500px] mx-auto">
        <button
          ref={prevRef}
          className="bg-white shadow p-2 rounded-full hover:bg-green-100 transition"
        >
          <FiChevronLeft size={24} className="text-green-700" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
        <button
          ref={nextRef}
          className="bg-white shadow p-2 rounded-full hover:bg-green-100 transition"
        >
          <FiChevronRight size={24} className="text-green-700" />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-[440px] bg-green-50 flex items-center px-6 lg:px-20"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row items-center justify-between bg-green-50 py-12 ">
              {/* Image */}
              <div className="lg:w-1/2 flex justify-center">
                <img
                    src={slide.image}
                    alt="Organic Food"
                    className="max-w-[742px] max-h-[398px] w-full h-auto object-contain"
                />

              </div>

              {/* Text Content */}
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <p className="text-green-600 font-semibold text-sm mb-2">
                  {slide.subtitle}
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {slide.title}
                </h1>
                <h2 className="text-2xl text-orange-500 font-semibold mt-4">
                  {slide.offer}
                </h2>
                <p className="text-gray-600 mt-4 max-w-md">{slide.description}</p>
                <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
                  {slide.btnText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
