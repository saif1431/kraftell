import React from 'react'
import ManufacturerNavbar from '../../components/Reuseable Component/ManufacturerNavbar'
import Footer from '../../components/Reuseable Component/Footer'
import PaymentTable from '../../components/Manufacturer Components/PaymentTableComponents/PaymentTable'

function PaymentTablePage() {
  return (
  <div className='bg-primary'>
      <ManufacturerNavbar/>
      <div className=' lg:px-18 px-4 lg:py-14 py-8 space-y-4'>
            <h1 className='text-2xl font-semibold'>Payment</h1>
        <PaymentTable/>
        </div>
        <Footer/>   
       </div>
  )
}

export default PaymentTablePage
