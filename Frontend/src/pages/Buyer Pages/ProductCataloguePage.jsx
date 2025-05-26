import React from 'react'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'
import Footer from '../../components/Reuseable Component/Footer'
import ProductCatalogueView from '../../components/Buyer Components/ProductCatalogueComponents/ProductCatalogueView'

function ProductCataloguePage() {
  return (
   <div className='bg-primary'>
      <DashBoardNavbar/>
      <div className='lg:px-18 px-4 lg:py-14 py-6'>
            <ProductCatalogueView/>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductCataloguePage
