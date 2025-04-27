import React from 'react'

function ChangePassword() {
  return (
      <div className='bg-white rounded-lg shadow-md p-4 space-y-4'>
      <h1 className='text-2xl font-semibold'>Password</h1>
      <div className='flex flex-col gap-2 mt-6'>
            <label className='text-lg' htmlFor="">Current Password</label>
            <input className='text-lg border border-gray-300 px-3 py-2 rounded-lg outline-none ' type="password" placeholder='Your Current Password' />
      </div>
<div className='flex flex-col gap-2 '>
            <label className='text-lg' htmlFor="">New Password</label>
            <input className='text-lg w-full border border-gray-300 px-3 py-2 rounded-lg outline-none ' type="password" placeholder='Enter New Password' />
      </div>
<div className='flex flex-col gap-2  '>
            <label className='text-lg' htmlFor="">Confirm New Password</label>
            <input className='text-lg w-full border border-gray-300 px-3 py-2 rounded-lg outline-none ' type="password" placeholder='Confirm New Password' />
      </div>
      <button className='bg-[#3977ED] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300'>Save Changes</button>
    </div>
  )
}

export default ChangePassword
