import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

function CommentHistory() {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: 'Commented by ',
      description: 'Updated the navigation flow based on feedback. Implemented new color scheme.',
      date: 'Apr 15, 2025',
    },
    {
      id: 2,
      title: 'Commented by',
      description: 'Modified button placement and sizing for better usability.',
    },
    {
      id: 3,
      title: 'Commented by',
      description: 'First prototype submission for review.',
    }
  ];

  return (
    <div className="flex flex-col gap-2 bg-white rounded-md p-6 w-full  ">
      <h1 className='text-2xl font-semibold'>Comments History</h1>
      {cards.map((card) => (
    <div className='flex-1 bg-white rounded-lg px-4 py-5 border-gray-200 flex border-b items-center justify-between flex-wrap gap-4'  key={card.id}>
          <div className=""
        >
          <div className="mb-1 flex items-center gap-4">
           <div className='mb-1'>
            
           <h3 className="text-lg   text-gray-800">{card.title}</h3>
           </div>
          </div>
           <p className="text-gray-600 text-md flex-1">{card.description}</p>
           
        </div>
       
        <span className='text-primary'>{card.date}</span>
        
    </div>
      ))}
    </div>
  );
}

export default CommentHistory;




 


