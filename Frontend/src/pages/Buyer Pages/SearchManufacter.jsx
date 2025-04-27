import React from 'react'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'
import SearchProducts from '../../components/Buyer Components/SearchManufacturComponents/SearchProducts'
import Footer from '../../components/Reuseable Component/Footer'



function SearchManufacter() {
  return (
    <div className='bg-primary h-fit'>
<DashBoardNavbar/> 
<div className='lg:px-18 px-8 py-16'>
<SearchProducts/>   
</div>
<Footer/>
</div>
  )
}

export default SearchManufacter
