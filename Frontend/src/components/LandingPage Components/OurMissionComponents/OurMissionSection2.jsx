import React from 'react';
import { Clock, Shield, Zap } from "lucide-react"
// Card data defined at the top
const cardData = [
  {
    title: "Reduce Lead Times",

    description: "Predictive AI enables faster sourcing and easier fulfillment.",
    icon: <Clock className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Mitigate Risk",
    description: "Data-driven insights minimize production delays and disruptions.",
     icon: <Shield className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Increase Agility",
    description: "Seamless management of complex production workloads — all in one place.",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
  }
];

const OurMissionSection2 = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Optimizing Procurement for the Future
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {cardData.map((card, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">{card.icon}</div>
              <h2 className="text-xl text-center font-semibold text-gray-900 mb-4">
                {card.title}
              </h2>
              <p className="text-primary text-center text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default  OurMissionSection2
