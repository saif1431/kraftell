import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

function RecentPrototype() {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: 'Smart Watch Design',
      description: 'Submitted: Apr 15, 2025',
      buttonText: 'In Review',
    },
    {
      id: 2,
      title: 'Eco Bottle',
      description: 'Submitted: Apr 10, 2025s',
      buttonText: 'Approved',
    }
  ];

  return (
    <div className="flex flex-col gap-6 p-4 lg:w-1/2 w-full  bg-white rounded-lg">
      <h1 className='text-2xl font-semibold'>Recent Prototypes</h1>
      {cards.map((card) => (
        <div 
          key={card.id}
          className="flex-1 border-b border-gray-200"
        >
          <div className="mb-4">
            <h3 className="text-lg   text-gray-800">{card.title}</h3>
            
            <div className="flex justify-between items-end">
              <p className="text-gray-600 text-md flex-1">{card.description}</p>
              
              <button
                
                className="ml-4 flex items-center justify-center px-3 py-2 bg-[#E5E7EB] text-sm text-[#525252]  rounded-full  font-medium"
              >
                {card.buttonText}
                {/* <FiArrowRight className="ml-2" /> */}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentPrototype;



