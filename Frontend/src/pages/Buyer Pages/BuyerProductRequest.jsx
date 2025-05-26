import React from 'react'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'
import Footer from '../../components/Reuseable Component/Footer'
import ProductRequestForm from '../../components/Buyer Components/ProductRequestForm'

function BuyerProductRequest() {
  return (
   <div className=''>
      <DashBoardNavbar/>
      <div className='lg:px-18 px-4 py-14 space-y-6'> 
<ProductRequestForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default BuyerProductRequest
