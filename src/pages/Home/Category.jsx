import React, { useRef } from "react";
import { useCategory } from "../../hooks/category/useCategory";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Category = () => {
  const { data: Product, isLoading } = useCategory();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full  py-8 relative mt-32">
      <div className="flex gap-2 items-center justify-between">
        <h2 className="text-2xl font-bold mb-6">Shop by Top Categories</h2>
        <div className="flex gap-2 items-center hover:text-green-400 cursor-pointer font-bold">
          <p>View All</p>
          <FiArrowRight />
        </div>
      </div>

      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          ref={prevRef}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <FiArrowLeft size={20} />
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          ref={nextRef}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <FiArrowRight size={20} />
        </button>
      </div>


      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // Fix for custom navigation refs
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {Product?.categories?.map((category) => (
          <SwiperSlide
            key={category.id}
            className="flex justify-center items-center"
            style={{ width: "220px" }}
          >
            <div className="h-[200px] w-[200px] border rounded-lg shadow-md flex flex-col items-center justify-center text-center bg-white hover:shadow-lg transition hover:border-green-400 cursor-pointer">
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <p className="text-sm text-gray-500">
                {category.products_count} Products
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
