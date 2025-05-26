import React from 'react'
import NotificationsList from '../../components/Manufacturer Components/NotificationsComponents/NotificationsList'
import { IoNotifications } from "react-icons/io5";
import AdminAccessCard from '../../components/Manufacturer Components/NotificationsComponents/AdminAccessCard';
import ActivityLog from '../../components/Manufacturer Components/NotificationsComponents/ActivityLog';
import ManufacturerNavbar from '../../components/Reuseable Component/ManufacturerNavbar';
import Footer from '../../components/Reuseable Component/Footer';

function NotificationsPage() {
  return (
  <div className='bg-primary'>
<ManufacturerNavbar/>
  <div className='lg:px-18 px-4 lg:py-14 py-8'>
      <div className='flex items-center gap-4 text-xl'>
      <IoNotifications />
      <h1 className='font-semibold'>Notification & Logs</h1>
      </div>
      <div className='flex flex-col md:flex-row  items-start gap-6'>
            <div className='flex-1 w-full space-y-8'>
            <NotificationsList/>    
            <ActivityLog/>
            </div>
            <div>
            <AdminAccessCard/>
            </div>
      </div>

</div>
<Footer/>
  </div>
  )
}

export default NotificationsPage
