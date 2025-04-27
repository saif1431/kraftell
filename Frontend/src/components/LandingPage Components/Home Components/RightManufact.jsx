import React from 'react'
import Image from '/HomeImg3.jpg'
import { IoMdCheckmarkCircle } from "react-icons/io";


function RightManufact() {
  return (
    <div>
         <div className='bg-[#E5E7EB] lg:px-14 px-8 py-14 flex items-center justify-between flex-col md:flex-row gap-6'>
                  <div className='space-y-4 lg:w-1/2 w-full'>
                        <h4 className='text-xl font-bold'>Find the Right Manufacturer Instantly</h4>
                        <div className='checkBox space-x-1 flex items-center'>
                        <IoMdCheckmarkCircle  className='text-[#3978edc4]  rounded-full' />
                              <span className='text-sm'>Match by product type, material, and process</span>
                        </div>
                        <div className='checkBox space-x-1 flex items-center'>
                        <IoMdCheckmarkCircle  className='text-[#3978edc4]  rounded-full' />
                              <span className='text-sm'>Filter by region, certifications, and capabilities</span>
                        </div>
                        <div className='checkBox space-x-1 flex items-center'>
                        <IoMdCheckmarkCircle  className='text-[#3978edc4]  rounded-full' />
                              <span className='text-sm'>AI-assisted ranking to surface the most relevant suppliers</span>
                        </div>
                        <div className='checkBox space-x-1 flex items-center'>
                        <IoMdCheckmarkCircle  className='text-[#3978edc4]  rounded-full' />
                              <span className='text-sm'>Analyze historical performance and lead time patterns</span>
                        </div>
                  </div>
                  <div className='lg:w-1/2 w-full flex items-end justify-end'>
                        <img className='rounded-lg lg:w-[80%] w-full' src={Image} alt="" />
                  </div>
            </div>
    </div>
  )
}

export default RightManufact
