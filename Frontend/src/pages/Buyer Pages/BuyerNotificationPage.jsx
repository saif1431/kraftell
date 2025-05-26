import React from 'react'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'
import Footer from '../../components/Reuseable Component/Footer'
import { IoNotifications } from 'react-icons/io5'
import NotificationsList from '../../components/Manufacturer Components/NotificationsComponents/NotificationsList'
import ActivityLog from '../../components/Manufacturer Components/NotificationsComponents/ActivityLog'
import AdminAccessCard from '../../components/Manufacturer Components/NotificationsComponents/AdminAccessCard'

function BuyerNotificationPage() {
  return (
  <div className='bg-primary'>
      <DashBoardNavbar/>
   <div className='lg:px-18 px-4 lg:py-14 py-8'>
      <div className='flex items-center gap-4 text-xl'>
      <IoNotifications />
      <h1 className='font-semibold'>Notification & Logs</h1>
      </div>
      <div className='flex flex-col md:flex-row mt-4 items-start gap-6'>
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

export default BuyerNotificationPage
