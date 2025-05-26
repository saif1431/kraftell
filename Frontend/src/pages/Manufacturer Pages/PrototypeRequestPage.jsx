import React from 'react'
import ManufacturerNavbar from '../../components/Reuseable Component/ManufacturerNavbar'
import Footer from '../../components/Reuseable Component/Footer'
import PrototypeManagement from '../../components/Manufacturer Components/PrototypeRequestComponents/PrototypeManagement'

function PrototypeRequestPage() {
  return (
    <div className='bg-primary'>
      <ManufacturerNavbar/>
     <div className='lg:px-18 px-4 lg:py-14 py-8 space-y-4'>
      <h1 className='text-2xl font-semibold'>Prototype Request List</h1>
<PrototypeManagement/>
     </div>

     <Footer/>
    </div>
  )
}

export default PrototypeRequestPage
