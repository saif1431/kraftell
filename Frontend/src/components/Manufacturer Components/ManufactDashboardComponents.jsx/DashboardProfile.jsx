import React from 'react'
import profileImg from '/profileImg.svg'
import { FaEdit } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


function DashboardProfile() {
  return (
<div className='bg-white rounded-lg p-6 shadow-md flex flex-col items-center gap-2'>
<img className='w-20' src={profileImg} alt="" />
<h1 className='text-2xl font-semibold'>John Doe</h1>
<p className='text-primary'>UI/UX Designer</p>
<div className='flex items-center ga-2 text-primary mt-3'>
<NavLink to='/EditProfile' className='flex items-center gap-2'>
<FaEdit />
<span>Edit Profile</span>
</NavLink>
</div>
</div>
  )
}

export default DashboardProfile
