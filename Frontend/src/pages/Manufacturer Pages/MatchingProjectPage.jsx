import React from 'react'
import ManufacturerNavbar from '../../components/Reuseable Component/ManufacturerNavbar'
import Footer from '../../components/Reuseable Component/Footer'
import ProductManagement from '../../components/Manufacturer Components/MatchingProjectComponents/ProductManagement'

function MatchingProjectPage() {
  return (
    <div className='bg-primary'>
      <ManufacturerNavbar/>
     <div className='lg:px-18 px-4 lg:py-14 py-8 space-y-4'>
      <h1 className='text-2xl font-semibold'>My Projects</h1>
    <ProductManagement/>
     </div>

     <Footer/>
    </div>
  )
}

export default MatchingProjectPage
