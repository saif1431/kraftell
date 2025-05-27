import React from 'react'
import PaymentForm from '../../components/Manufacturer Components/PaymentForm'
import Footer from '../../components/Reuseable Component/Footer'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'


function PaymentFormPage() {
  return (
    <div className='bg-primary'>
      <DashBoardNavbar/>
      <div className=' lg:px-18 px-4 lg:py-14 py-8'>
        <PaymentForm/>
        </div>
        <Footer/>   
       </div>
  )
}

export default PaymentFormPage
