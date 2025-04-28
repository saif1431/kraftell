import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Landing Pages/Home'
import Footer from '../components/Reuseable Component/Footer'
import Navbar from '../components/Reuseable Component/Navbar'
import MemberShip from '../pages/Landing Pages/MemberShip'
import ReleasePayment from '../pages/Buyer Pages/ReleasePayment'
import BuyerSignUpForm from '../pages/Landing Pages/BuyerSignUpForm'
import ManufacturerSignUpForm from '../pages/Landing Pages/ManufacturerSignUpForm'
import LoginForm from '../pages/Landing Pages/LoginForm'
import Message from '../pages/Buyer Pages/Message'


function LandingPageRoutes() {
  return (
<div>
      {/* <Navbar/> */}
      <Routes>
<Route path='/' element={<Home />} />
    <Route path='/ManufacturerForm' element={<ManufacturerSignUpForm />} />
    <Route path='/BuyerSignUpForm' element={<BuyerSignUpForm />} />
    <Route path='/Login' element={<LoginForm />} />
    <Route path='/MemberShip' element={<MemberShip />} />
    <Route path='/ReleasePayment' element={<ReleasePayment />} />
    <Route path='/Message' element={<Message />} />
    </Routes>
    {/* <Footer/> */}
</div>
  )
}

export default LandingPageRoutes
