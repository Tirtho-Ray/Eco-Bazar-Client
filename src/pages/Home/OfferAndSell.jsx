import React, { useEffect, useState } from "react";
import img1 from "../../assets/offer/Image.png";
import img2 from "../../assets/offer/Image2.png";

const OfferAndSell = () => {
  const getNextTargetDate = () => {
    const now = new Date();
    const target = new Date();

    target.setHours(23, 59, 59, 0); // Set to 23:59:59

    if (now > target) {
      target.setDate(target.getDate() + 1);
    }

    return target;
  };

  const [targetDate, setTargetDate] = useState(getNextTargetDate());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        const nextTarget = getNextTargetDate();
        setTargetDate(nextTarget);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-6 justify-center items-center p-6 mt-20">
      <div
        className="h-[360px] w-[648px] bg-cover bg-center rounded-xl text-white flex flex-col justify-center px-10"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <p className="text-sm uppercase">100% Organic</p>
        <h2 className="text-3xl font-bold mb-4">Fruit & Vegetable</h2>
        <p className="mb-4 text-sm">
          Starting at:{" "}
          <span className="bg-orange-500 px-2 py-1 rounded text-white font-semibold ml-1">
            $11.99
          </span>
        </p>
        <button className="bg-green-500 hover:bg-green-600 transition-all duration-200 text-white px-6 py-2 rounded-full w-max">
          Shop Now →
        </button>
      </div>

      <div
        className="h-[360px] w-[648px] bg-cover bg-center rounded-xl text-white flex flex-col justify-center px-10"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <p className="text-sm uppercase">Sale of the Week</p>
        <h2 className="text-3xl font-bold mb-4">Sales of the Year</h2>

        <div className="flex gap-4 mb-4 text-center font-semibold text-white">
          <div>
            <div className="text-2xl">
              {String(timeLeft.days).padStart(2, "0")}
            </div>
            <div className="text-xs">DAYS</div>
          </div>
          <div>
            <div className="text-2xl">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="text-xs">HOURS</div>
          </div>
          <div>
            <div className="text-2xl">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="text-xs">MINS</div>
          </div>
          <div>
            <div className="text-2xl">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div className="text-xs">SECS</div>
          </div>
        </div>

        <button className="bg-green-500 hover:bg-green-600 transition-all duration-200 text-white px-6 py-2 rounded-full w-max">
          Shop Now →
        </button>
      </div>
    </div>
  );
};

export default OfferAndSell;
