// PendingList.js
import React from 'react';

const PendingList = ({ data }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Pending Transactions</h2>
      {data.map((item) => (
        <div key={item.id} className="border border-gray-200 rounded-lg p-4 ">
          <div className="flex justify-between items-start">
            <div>
          
              <p className="text-gray-600">Amount: {item.amount}</p>
            </div>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              {item.status}
            </span>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <p className="text-sm text-gray-500">Date: {item.date}</p>

          </div>
        </div>
      ))}
    </div>
  );
};

export default PendingList;