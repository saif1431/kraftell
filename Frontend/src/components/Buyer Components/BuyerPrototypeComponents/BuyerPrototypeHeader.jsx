import React, { useState } from 'react';
import ApproveList from './ApproveList';
import PendingList from './PendingList';
import RejectedList from './RejectedList';


function BuyerPrototypeHeader() {
  const [activeTab, setActiveTab] = useState('approve');

  // Sample data for each tab
  const approveData = [
    {
      id: 1,
      transactionId: 'TX-78945',
      amount: '$1,250.00',
      status: 'Approved',
      date: '2025-05-15'
    },
    {
      id: 2,
      transactionId: 'TX-78946',
      amount: '$850.50',
      status: 'Approved',
      date: '2025-05-14'
    }
  ];

  const pendingData = [
    {
      id: 1,
      transactionId: 'TX-78947',
      amount: '$1,500.00',
      status: 'Pending Review',
      date: '2025-05-16'
    },
    {
      id: 2,
      transactionId: 'TX-78948',
      amount: '$720.00',
      status: 'Pending Approval',
      date: '2025-05-15'
    }
  ];

  const rejectedData = [
    {
      id: 1,
      transactionId: 'TX-78949',
      amount: '$2,100.00',
      status: 'Rejected',
      reason: 'Incomplete documentation',
      date: '2025-05-14'
    },
    {
      id: 2,
      transactionId: 'TX-78950',
      amount: '$950.00',
      status: 'Rejected',
      reason: 'Policy violation',
      date: '2025-05-13'
    }
  ];

  return (
    <div className="">
      {/* Header Tabs */}
      <div className="flex border-b border-gray-200 mb-6 flex-wrap">
        <button 
          onClick={() => setActiveTab('approve')}
          className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'approve' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
        >
          Approve
        </button>
        <button 
          onClick={() => setActiveTab('pending')}
          className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'pending' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
        >
          Pending
        </button>
        <button 
          onClick={() => setActiveTab('rejected')}
          className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'rejected' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
        >
          Rejected
        </button>
      </div>

      {/* Tab Content */}
      <div className='bg-white rounded-md p-4'>
        {activeTab === 'approve' && <ApproveList data={approveData} />}
        {activeTab === 'pending' && <PendingList data={pendingData} />}
        {activeTab === 'rejected' && <RejectedList data={rejectedData} />}
      </div>
    </div>
  );
}

export default BuyerPrototypeHeader;