import React from 'react'
import Image from '/HomeImg2.png'
import { IoMdCheckmarkCircle } from "react-icons/io";


function StartManufact() {
  return (
    <div className=''>
      <div className=' text-center leading-tight lg:px-14 px-6 py-14'>
            <h1 className='lg:text-4xl text-2xl font-bold '>Smarter Manufacturing Starts Here</h1>
            <p className='mt-4 max-w-4xl mx-auto leading-relaxed'>Kraftell empowers businesses to connect with verified manufacturers, streamline prototyping, simplify communication – and now, predict the best time to place orders.</p>
      </div>

{/* Second Div --------------- */}

      <div className='bg-[#E5E7EB] lg:px-14 px-8 py-14 flex items-center justify-between flex-col md:flex-row gap-6'>
            <div className='space-y-4 lg:w-1/2 w-full'>
                  <h4 className='text-xl font-bold'>Why Predictive Ordering Matters</h4>
                  <div className='checkBox space-x-1 flex items-center'>
                  <IoMdCheckmarkCircle  className='text-[#3978edc4]  rounded-full' />
                        <span className='text-sm'>Seasonality trends in your industry</span>
                  </div>
                  <div className='checkBox space-x-1 flex items-center'>
                  <IoMdCheckmarkCircle  className='text-[#3978edc4]  rounded-full' />
                        <span className='text-sm'>Supplier lead time forecasts</span>
                  </div>
                  <div className='checkBox space-x-1 flex items-center'>
                  <IoMdCheckmarkCircle  className='text-[#3978edc4]  rounded-full' />
                        <span className='text-sm'>Real-time production load visibility</span>
                  </div>
                  <div className='checkBox space-x-1 flex items-center'>
                  <IoMdCheckmarkCircle  className='text-[#3978edc4]  rounded-full' />
                        <span className='text-sm'>Historical pattern analysis</span>
                  </div>
            </div>
            <div className='lg:w-1/2 w-full flex items-end justify-end'>
                  <img className='rounded-lg lg:w-[80%] w-full' src={Image} alt="" />
            </div>
      </div>
    </div>
  )
}

export default StartManufact
