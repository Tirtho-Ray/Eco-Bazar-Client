import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Robert Fox",
    role: "Customer",
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Dianne Russell",
    role: "Customer",
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Eleanor Pena",
    role: "Customer",
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  };

  return (
    <section className="py-16 relative">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <p className="text-green-500 italic font-medium">TESTIMONIAL</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Customer Says
        </h2>
      </div>

      {/* Testimonial Cards */}
      <div className="flex justify-center gap-6">
        {testimonials.map((item, i) => (
          <div
            key={item.id}
            className={`w-full max-w-sm bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border
            ${i === index ? "opacity-100" : "opacity-40 scale-95"}`}
          >
            {/* Quote Mark */}
            <div className="text-green-500 text-4xl mb-3">“</div>
            <p className="text-gray-600 mb-6">{item.text}</p>

            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="mt-4 flex gap-1 text-yellow-400">
              {Array(item.rating)
                .fill()
                .map((_, idx) => (
                  <FaStar key={idx} />
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-26 -translate-y-1/2 right-6 top flex gap-3">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow hover:bg-green-50"
        >
          <FaChevronLeft className="text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white shadow hover:bg-green-600"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
