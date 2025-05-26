import React from 'react'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'
import Footer from '../../components/Reuseable Component/Footer'
import BuyerPrototypeManagement from '../../components/Buyer Components/BuyerPrototypeListComponents/BuyerPrototypeManagement'

function BuyerPrototypeListpage() {
  return (
      <div className='bg-primary'>
      <DashBoardNavbar/>
      <div className='lg:px-18 px-4 py-14 space-y-6'> 
<BuyerPrototypeManagement/>
      </div>
      <Footer/>
    </div>
  )
}

export default BuyerPrototypeListpage
