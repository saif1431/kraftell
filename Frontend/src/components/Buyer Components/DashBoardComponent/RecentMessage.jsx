import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

function RecentMessage() {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      profileImg: '/profileImg.svg',
      title: 'Tech Manufacturing Inc.',
      description: 'Updated prototype specifications...',
    },
    {
      id: 2,
      profileImg: '/profileImg.svg',
      title: 'Global Prototypes Ltd.',
      description: 'Your quote is ready for review...',
    }
  ];

  return (
    <div className="flex flex-col gap-6 p-4 lg:w-1/2 w-full  bg-white rounded-lg">
      <h1 className='text-2xl font-semibold'>Recent Message</h1>
      {cards.map((card) => (
        <div 
          key={card.id}
          className="flex-1 border-b border-gray-200"
        >
          <div className="mb-4 flex items-center gap-4">
            <img src={card.profileImg} alt="" className="w-12 h-12 rounded-full mr-4" />
           <div className='mb-3'>
           <h3 className="text-lg   text-gray-800">{card.title}</h3>
            <div className="flex justify-between items-end">
              <p className="text-gray-600 text-md flex-1">{card.description}</p>
            </div>
           </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentMessage;






