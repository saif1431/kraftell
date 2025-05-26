import React from 'react'
import portfolio from '/portfolio.jpg'
import { NavLink } from 'react-router-dom'

function ManufacturerPortfolio() {
  return (
      <div className='bg-white rounded-lg  px-8 py-8'>
      <h1 className='text-2xl font-semibold'>Portfolio</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4'>
            <div className='h-[300px] rounded-lg '>
                  <img className='w-full h-full rounded-lg object-cover object-center' src={portfolio} alt="" />
            </div>
            <div className='h-[300px] rounded-lg '>
                  <img className='w-full h-full rounded-lg object-cover object-center' src={portfolio} alt="" />
            </div>
            <div className='h-[300px] rounded-lg '>
                  <img className='w-full h-full rounded-lg object-cover object-center' src={portfolio} alt="" />
            </div>
            <div className='h-[300px] rounded-lg '>
                  <img className='w-full h-full rounded-lg object-cover object-center' src={portfolio} alt="" />
            </div>
      </div>
      <div className='flex justify-center mt-6'>
            <NavLink className='bg-[#3977ED] text-white px-6 py-3 rounded-lg' to='/ProductCatalogue'>
            View Catalog
            </NavLink>
      </div>
    </div>
  )
}

export default ManufacturerPortfolio



