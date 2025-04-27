import React from 'react'
import profileImg from '/profileImg.svg'
function ProfileDetail() {
  return (
    <div>
<div className='bg-white rounded-lg p-4 shadow-md flex flex-col items-center gap-2'>
<img className='w-20' src={profileImg} alt="" />
<h1 className='text-2xl font-semibold'>John Doe</h1>
<p>Manufacturer</p>
</div>
    </div>
  )
}

export default ProfileDetail
