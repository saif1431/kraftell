import React from 'react'
import FilterProducts from './FilterProducts'
import ManufacturerSearchResults from './ManufacturerSearchResults'

function SearchProducts() {
  return (
  <div>
      <div className='bg-white p-4 rounded-lg'>
      <input className='text-lg w-full border-none outline-none' type="text" placeholder='Search Here............' />
    </div>

    <div className='flex flex-col lg:flex-row items-start gap-6 mt-12'>
      <div className='bg-white rounded-lg lg:w-[20%] w-full'>
        <FilterProducts/>
      </div>
      <div className='flex-1 rounded-lg'>
        <ManufacturerSearchResults/>
      </div>
    </div>
  </div>
  )
}

export default SearchProducts
