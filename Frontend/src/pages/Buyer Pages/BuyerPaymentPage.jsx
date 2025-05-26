import React from 'react'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'
import Footer from '../../components/Reuseable Component/Footer'
import PaymentForm from '../../components/Manufacturer Components/PaymentForm'
import PaymentTable from '../../components/Manufacturer Components/PaymentTableComponents/PaymentTable'

function BuyerPaymentPage() {
  return (
      <div className='bg-primary'>
      <DashBoardNavbar/>
      <div className=' lg:px-18 px-4 lg:py-14 py-8'>
     <PaymentTable/>
        </div>
        <Footer/>   
       </div>
  )
}

export default BuyerPaymentPage
