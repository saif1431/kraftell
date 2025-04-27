import React from 'react'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'
import ProfileDetail from '../../components/Buyer Components/MyProfileComponents.jsx/ProfileDetail'
import ProfileInformation from '../../components/Buyer Components/MyProfileComponents.jsx/ProfileInformation'
import Document from '../../components/Buyer Components/MyProfileComponents.jsx/Document'
import ChangePassword from '../../components/Buyer Components/MyProfileComponents.jsx/ChangePassword'

function MyProfile() {
  return (
    <div className='bg-[#F5F5F5] h-fit'>
      <DashBoardNavbar/>
      <div className='flex flex-col md:flex-row items-start lg:px-18 px-4 py-14 gap-4'>
            <div className='md:w-[20%] w-full'>
                  <ProfileDetail/>
            </div>
            <div className='flex-1 w-full space-y-8'>
                  <ProfileInformation/>
                  <Document/>
                  <ChangePassword/>
            </div>
      </div>
    </div>
  )
}

export default MyProfile
