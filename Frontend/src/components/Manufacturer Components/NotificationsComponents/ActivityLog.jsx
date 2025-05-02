import React from "react";
import { FaCheckCircle,  FaTruck } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";



const ActivityLog = () => {
  const activities = [
    {
      icon: <FaCheckCircle className="text-gray-500" />,
      title: "Prototype Approved",
      date: "Apr 19, 2025",
      time: "14:30"
    },
    {
      icon: <FaDollarSign className="text-gray-500" />,
      title: "Payment Request Sent",
      date: "Apr 19, 2025",
      time: "13:45"
    },
    {
      icon: <FaTruck className="text-gray-500" />,
      title: "Order Status Updated",
      date: "Apr 19, 2025",
      time: "12:15"
    }
  ];

  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-800">Activity Log</h2>
      </div>
      
      <div className="divide-y divide-gray-200">
        {activities.map((activity, index) => (
          <div key={index} className="px-6 py-3 hover:bg-gray-50 transition-colors duration-150">
            <div className="flex items-start space-x-3">
              <div className="mt-1">
                <div className="w-8 h-8 flex items-center justify-center">
                  {activity.icon}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{activity.title}</h3>
                <p className="text-sm text-gray-500">
                  {activity.date} <span className="mx-1">•</span> {activity.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;