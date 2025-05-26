import React, { useState } from 'react'
import profileImg from '/profileImg.svg'
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { FaCcAmazonPay } from "react-icons/fa";

function ProfileDetail({ onTabChange, userType = 'manufacturer' }) {  // Added userType prop with default
  const [activeTab, setActiveTab] = useState('profile');

  // Base tabs that both users will see
  const baseTabs = [
    { id: 'profile', label: 'Profile', icon: <CgProfile /> },
    { id: 'notifications', label: 'Notifications', icon: <IoMdNotificationsOutline /> },
    { id: 'security', label: 'Security', icon: <RxQuestionMarkCircled /> },
  ];

  // Add payment tab only for manufacturers
  const tabs = userType === 'manufacturer'
    ? [...baseTabs, { id: 'payments', label: 'Payment', icon: <FaCcAmazonPay /> }]
    : baseTabs;

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    onTabChange(tabId); // Notify parent component about tab change
  };

  return (
    <div className='space-y-6'>
      <div className='bg-white rounded-lg p-4 shadow-md flex flex-col items-center gap-2'>
        <img className='w-20' src={profileImg} alt="" />
        <h1 className='text-2xl font-semibold'>John Doe</h1>
        <p>{userType === 'buyer' ? 'Buyer' : 'Manufacturer'}</p>  {/* Dynamic role display */}
      </div>
      <div className="bg-white rounded-lg shadow-md">
        <div className="flex flex-col gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-3 px-4 flex items-center gap-4 text-lg font-medium focus:outline-none transition-colors ${
                activeTab === tab.id
                  ? 'text-black border-l-4 border-black'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`}
              onClick={() => handleTabChange(tab.id)}
            >
              <div>{tab.icon}</div>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileDetail