import React from 'react'
import DashBoardNavbar from '../../components/Reuseable Component/DashBoardNavbar'
import PrototypeApprovalForm from '../../components/Buyer Components/MyPrototypesComponent/PrototypeApprovalForm'
import PrototypeDecision from '../../components/Buyer Components/MyPrototypesComponent/PrototypeDecision'
import RevisionHistory from '../../components/Buyer Components/MyPrototypesComponent/RevisionHistory'
import Footer from '../../components/Reuseable Component/Footer'

function MyPrototypes() {
  return (
    <div className='bg-primary'>
      <DashBoardNavbar/>
      <div className='lg:px-18 px-4 py-14 space-y-6'> 
            <PrototypeApprovalForm/>
            <PrototypeDecision/>
            <RevisionHistory/>
      </div>
      <Footer/>
    </div>
  )
}

export default MyPrototypes
