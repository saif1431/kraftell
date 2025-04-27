import React from 'react'
import DashboardNavbar from '../../components/Reuseable Component/DashboardNavbar'
import ReleasePaymentForm from '../../components/Buyer Components/PaymentComponent/ReleasePaymentForm'
import Footer from '../../components/Reuseable Component/Footer'

function ReleasePayment() {
  return (
    <div>
<DashboardNavbar/>
<ReleasePaymentForm/>
<Footer/>
    </div>
  )
}

export default ReleasePayment
