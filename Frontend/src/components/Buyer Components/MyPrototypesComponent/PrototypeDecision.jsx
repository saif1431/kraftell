import React from 'react'
import { TiTick } from "react-icons/ti";
import { RiCloseLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

function PrototypeDecision() {
  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-semibold'>Prototype Decision</h1>
      <div className='flex flex-wrap items-center gap-4'>
            <NavLink to='/ProductRequestForm' className='bg-[#3977ED] text-white px-6 py-4 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center gap-4 text-xl'>
            <TiTick />
Approve Prototype
            </NavLink>
            <button className='border border-gray-300 text-black px-6 py-4 rounded-lg   flex items-center gap-4 text-xl hover:bg-[#3977ED] hover:text-white transition duration-300'>
            <RiCloseLine />
            Reject Prototype
            </button>
      </div>

      {/* Request Revision-------- */}
      <div className=''>
            <h1 className='text-2xl font-semibold'>Request Revision</h1>
            <div className='mt-4 bg-white w-full h-[300px] rounded-lg flex items-center justify-center text-primary'>
                  
            </div>
      </div>
    </div>
  )
}

export default PrototypeDecision
