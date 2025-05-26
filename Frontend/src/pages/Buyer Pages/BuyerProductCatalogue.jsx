import React from 'react'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'
import Footer from '../../components/Reuseable Component/Footer'
import ProductCatalogueManagement from '../../components/Buyer Components/BuyerProductCatalogueComponent/ProductCatalogueManagement'

function BuyerProductCatalogue() {
  return (
      <div className='bg-primary'>
      <DashBoardNavbar/>
      <div className=' lg:px-18 px-4 lg:py-14 py-8'>
      <ProductCatalogueManagement/>
        </div>
        <Footer/>   
       </div>
  )
}

export default BuyerProductCatalogue
