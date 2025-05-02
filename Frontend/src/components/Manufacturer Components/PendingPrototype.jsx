import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const PendingPrototype = () => {
  // Sample data for manufacturers
  const manufacturers = [
    {
      id: 1,
      name: 'TechPro Manufacturing',
      location: 'San Jose, United States',
      description: 'Specialized in precision electronics manufacturing with advanced automation capabilities.',
      matchPercentage: 95
    },
    {
      id: 2,
      name: 'GlobalTech Solutions',
      location: 'Shenzhen, China',
      description: 'Full-service manufacturing partner offering plastic injection molding and assembly.',
      matchPercentage: 87
    },
    {
      id: 3,
      name: 'PrecisionCraft Industries',
      location: 'Munich, Germany',
      description: 'High-precision CNC machining and metal fabrication services for automotive and aerospace.',
      matchPercentage: 82
    }
  ];

  return (
    <div className="lg:px-6" >
      <div className="flex justify-between items-center mb-6">
        <h1 className="lg:text-2xl text-md font-semibold">Pending Prototypes</h1>

      </div>

      <div className="space-y-4">
        {manufacturers.map((manufacturer) => (
          <div key={manufacturer.id} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
              <div className='space-y-2'>
                <h2 className="text-xl font-semibold">{manufacturer.name}</h2>
                <div className='flex items-center gap-2'>
                <FaLocationDot />
                <p className="text-gray-600 mb-2">{manufacturer.location}</p>
                </div>
           
                <p className="text-gray-700 text-lg">{manufacturer.description}</p>
              </div>
              <div className="flex lg:flex-col items-center lg:justify-center justify-between w-full lg:w-fit  flex-row">
                <p className=" px-2 py-1 rounded-full text-2xl font-medium">
                  {manufacturer.matchPercentage}% <span className='text-sm text-primary'>match</span>
                </p>
                <NavLink to='/MyPrototypes'>
                <button className="mt-2 bg-blue-600 hover:bg-blue-800 font-semibold text-white py-2 px-4 rounded">
                  Prototype Form
                </button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingPrototype;



