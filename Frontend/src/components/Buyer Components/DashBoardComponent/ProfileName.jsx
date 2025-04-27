import React from 'react'
import profileImg from '/profileImg.svg'

function ProfileName() {
  return (
    <div className='py-8 lg:px-12 px-4 bg-white flex lg:items-center items-start gap-4 w-[90%] mx-auto mt-12 rounded-lg shadow-md'>
   <div className='w-16'>
      <img src={profileImg} alt="" />
   </div>
   <div className='flex flex-col gap-1'>
      <h1 className='lg:text-3xl text-xl font-semibold'>Welcome back, John!</h1>
      <span className='text-primary'>Last login: April 25, 2023</span>
   </div>
    </div>
  )   
}

export default ProfileName
