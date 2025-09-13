import React, { useState } from "react";
import { FaShippingFast, FaHeadset, FaLock, FaBoxOpen } from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast className="text-green-600 text-3xl" />,
    title: "Free Shipping",
    subtitle: "Free shipping with discount",
  },
  {
    icon: <FaHeadset className="text-green-600 text-3xl" />,
    title: "Great Support 24/7",
    subtitle: "Instant access to Contact",
  },
  {
    icon: <FaLock className="text-white text-3xl" />,
    title: "100% Secure Payment",
    subtitle: "We ensure your money is safe",
    bg: "bg-green-600",
  },
  {
    icon: <FaBoxOpen className="text-green-600 text-3xl" />,
    title: "Money-Back Guarantee",
    subtitle: "30 days money-back",
  },
];

const InfoHome = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="w-full border-t border-gray-100 bg-white py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {features.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="flex flex-col items-center focus:outline-none border-b-4 border-transparent pb-4
                       transition-colors duration-300 ease-in-out hover:border-green-400"
            style={{
              borderBottomColor: isActive ? "#22c55e" : "transparent",
            }}
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${
                item.bg && isActive ? item.bg : "bg-green-100"
              } ${isActive && !item.bg ? "bg-green-600 text-white" : ""}`}
            >
              {item.icon}
            </div>
            <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.subtitle}</p>
          </button>
        );
      })}
    </div>
  );
};

export default InfoHome;
