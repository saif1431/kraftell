import React from 'react'

function ProfileInformation() {
  return (
    <div className='bg-white rounded-lg shadow-md p-4 space-y-4'>
      <h1 className='text-2xl font-semibold'>Profile Information</h1>
<div className='flex flex-col lg:flex-row items-center gap-4'>
      <div className='flex flex-col gap-2 mt-6 lg:w-1/2 w-full'>
            <label className='text-lg' htmlFor="">First Name</label>
            <input className='text-lg border border-gray-300 px-3 py-2 rounded-lg outline-none ' type="text" placeholder='First Name' />
      </div>
      <div className='flex flex-col gap-2 mt-6 lg:w-1/2 w-full'>
            <label className='text-lg' htmlFor="">Last Name</label>
            <input className='text-lg w-full border border-gray-300 px-3 py-2 rounded-lg outline-none ' type="text" placeholder='Last Name' />
      </div>
</div>

<div className='flex flex-col gap-2 '>
            <label className='text-lg' htmlFor="">Business Name</label>
            <input className='text-lg w-full border border-gray-300 px-3 py-2 rounded-lg outline-none ' type="text" placeholder='Business Name' />
      </div>
<div className='flex flex-col gap-2  '>
            <label className='text-lg' htmlFor="">Email</label>
            <input className='text-lg w-full border border-gray-300 px-3 py-2 rounded-lg outline-none ' type="email" placeholder='Email' />
      </div>
      <button className='bg-[#3977ED] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300'>Save Changes</button>
    </div>
  )
}

export default ProfileInformation
