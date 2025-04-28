import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";
import { FaCcPaypal } from "react-icons/fa";


function RecentActivities() {
      const recentActivities = [
            {
              type: "Project completed",
              title: "E-commerce UI Kit",
              time: "2 hours ago",
              icon: <IoIosCheckmarkCircle />

            },
            {
              type: "New message",
              title: "From Client ABC",
              time: "5 hours ago",
              icon: <BiSolidMessage />

            },
            {
              type: "Payment received",
              title: "$850 - Mobile App Design",
              time: "1 day ago",
              icon: <FaCcPaypal />

            },
          ];
  return (
    <div className='bg-white rounded-lg px-6 py-6'>
      <div className="recent-activity">
  <h2 className='text-2xl'>Recent Activity</h2>
  <ul className=''>
    {recentActivities.map((activity, index) => (
      <li key={index} className='border-b pb-2 border-gray-300'>
        <div className='flex lg:items-center justify-between sm:flex-row flex-col'>
    <div className='mt-6 flex items-center gap-3'>
      <div className='text-xl text-zinc-700'>{activity.icon}</div>
   <div>
   <h5 className='text-xl'>{activity.type}</h5>
   <p className='text-primary'>{activity.title}</p>
   </div>
    </div>
        <span>{activity.time}</span>
        </div>
      </li>
    ))}
  </ul>
</div>
    </div>
  )
}

export default RecentActivities
