import React from 'react';
import { Container } from '../../components/ui/reUsable/Container';
import bgImg from "../../assets/card/BG - Copy.png";

const stats = [
  { value: '37+', label: 'Years of Hard Work' },
  { value: '500k+', label: 'Happy Customers' },
  { value: '28', label: 'Qualified Team Members' },
  { value: '750k+', label: 'Monthly Orders' },
];

const StatsCards = () => {
  return (
    <div
      className="py-10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <Container>
        <div className="flex flex-wrap justify-between gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="h-[174px] w-[312px] bg-white/5 backdrop-blur-md border border-white/20 rounded-xl shadow-lg flex flex-col items-center justify-center"
            >
              <span className="text-green-400 text-4xl font-semibold">
                {stat.value}
              </span>
              <span className="text-white text-sm mt-2 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StatsCards;
