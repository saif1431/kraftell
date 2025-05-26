import React, { useState } from 'react'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'
import ProfileDetail from '../../components/Buyer Components/MyProfileComponents.jsx/ProfileDetail'
import ProfileInformation from '../../components/Buyer Components/MyProfileComponents.jsx/ProfileInformation'
import Document from '../../components/Buyer Components/MyProfileComponents.jsx/Document'
import ChangePassword from '../../components/Buyer Components/MyProfileComponents.jsx/ChangePassword'
import NotificationsPage from '../Manufacturer Pages/NotificationsPage'
import Footer from '../../components/Reuseable Component/Footer'
// import NotificationSettings from '../../components/Buyer Components/MyProfileComponents.jsx/NotificationSettings' // Create this new component

function MyProfile() {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className='bg-[#F5F5F5] h-fit'>
      <DashBoardNavbar/>
      <div className='flex flex-col lg:flex-row items-start lg:px-18 px-4 py-14 gap-4'>
        <div className='lg:w-[20%] w-full'>
          <ProfileDetail userType='buyer' onTabChange={handleTabChange}/>
        </div>
        <div className='flex-1 w-full space-y-8'>
          {activeTab === 'profile' && (
            <>
              <ProfileInformation/>
              <Document/>
              <ChangePassword/>
            </>
          )}

          {activeTab === 'notifications' && (
            <div>
              <NotificationsPage/>
            </div>
            // <NotificationSettings/>
          )}
          {activeTab === 'security' && (
            <ChangePassword/> // Or create a dedicated SecuritySettings component
          )}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default MyProfile