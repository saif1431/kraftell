import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function PrototypeDecision() {
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [comments, setComments] = useState('');

  const handleApprove = () => {
    setShowApproveModal(true);
  };

  const confirmApproval = () => {
    // Handle the approval confirmation logic here
    console.log('Approved with comments:', comments);
    setShowApproveModal(false);
    setComments('');
  };

  const cancelApproval = () => {
    setShowApproveModal(false);
  };

  return (
    <div className='space-y-6 bg-white rounded-md p-6'>
      <h1 className='text-xl font-semibold'>Review Decision</h1>
      <div className='flex flex-wrap items-center gap-4'>
        <button 
          onClick={handleApprove}
          className='bg-[#3977ED] text-white px-6 py-4 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center gap-4 text-lg'
        >
          Approve
        </button>
      
      </div>


      {/* Approval Modal */}
      {showApproveModal && (
        <div className="fixed inset-0 bg-blend-darken bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Confirm Approval</h2>
            <p className="mb-6">Are you sure you want to approve this item?</p>
            
            <div className="flex justify-end space-x-4">
              <button
                onClick={cancelApproval}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <NavLink to=''
                onClick={confirmApproval}
                className="px-4 py-2 bg-[#3977ED] text-white rounded-md hover:bg-blue-600 transition"
              >
                Confirm Approval
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PrototypeDecision;


