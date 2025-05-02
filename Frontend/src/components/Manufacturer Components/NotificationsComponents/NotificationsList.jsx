import React, { useState } from "react";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const NotificationItem = ({ count = 0, icon, title }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex items-center justify-between py-4 px-5 border border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
      <div className="flex items-center space-x-4">
        {/* Icon with optional count badge */}
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-gray-600">
            {icon}
          </div>
          
        </div>
        
        {/* Title */}
        <span className="text-gray-800 font-medium">{title}</span>
      </div>
      
      {/* Slider toggle */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={isActive}
          onChange={() => setIsActive(!isActive)}
        />
        <div className={`w-11 h-6 rounded-full peer ${isActive ? 'bg-black' : 'bg-gray-200'}`}>
          <div className={`absolute top-0.5 left-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-all ${isActive ? 'transform translate-x-5' : ''}`}></div>
        </div>
      </label>
    </div>
  );
};

const NotificationsList = () => {
  const notifications = [
    { icon: <LuMessageCircle size={20} />, title: "Prototype Feedback", count: 24 },
    { icon: <MdOutlinePayment size={20} />, title: "Payment Requests" },
    { icon: <FaTruckMoving size={18} />, title: "Order Status Updates" },
  ];

  return (
    <div className=" mx-auto bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-800">Notification Settings</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {notifications.map((item, index) => (
          <NotificationItem 
            key={index} 
            icon={item.icon} 
            title={item.title} 
            count={item.count} 
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationsList;