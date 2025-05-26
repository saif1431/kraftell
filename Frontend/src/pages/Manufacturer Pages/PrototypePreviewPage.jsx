import React from 'react'
import PrototypePreview from '../../components/Buyer Components/BuyerApprovalComponents/PrototypePreview'
import PrototypeDecision from '../../components/Manufacturer Components/PrototypePreviewComponents/PrototypeDecision'
import CommentHistory from '../../components/Manufacturer Components/PrototypePreviewComponents/CommentHistory'
import BuyerRevisionHistory from '../../components/Buyer Components/BuyerApprovalComponents/BuyerRevisionHistory'
import ManufacturerNavbar from '../../components/Reuseable Component/ManufacturerNavbar'
import Footer from '../../components/Reuseable Component/Footer'

function PrototypePreviewPage() {
  return (
    <div className='bg-primary'>
      <ManufacturerNavbar/>
     <div className='lg:px-18 px-4 lg:py-14 py-8 space-y-4'>
      <h1 className='text-2xl font-semibold'>Prototype Preview</h1>
<div className='space-y-6'>
   <PrototypePreview/>
 <PrototypeDecision/>
 <CommentHistory/>
 <BuyerRevisionHistory/>
 </div>

     </div>

     <Footer/>
     </div>
  )
}

export default PrototypePreviewPage
