import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Landing Pages/Home'
import Footer from '../components/Reuseable Component/Footer'
import ManufacturerForm from '../components/LandingPage Components/Home Components/ManufacturerForm'
import BuyerForm from '../components/LandingPage Components/Home Components/BuyerForm'
import Login from '../components/LandingPage Components/Home Components/Login'
import Navbar from '../components/Reuseable Component/Navbar'
import MemberShip from '../pages/Landing Pages/MemberShip'


function LandingPageRoutes() {
  return (
<div>
      {/* <Navbar/> */}
      <Routes>
<Route path='/' element={<Home />} />
    <Route path='/ManufacturerForm' element={<ManufacturerForm />} />
    <Route path='/BuyerForm' element={<BuyerForm />} />
    <Route path='/Login' element={<Login />} />
    <Route path='/MemberShip' element={<MemberShip />} />
    </Routes>
    {/* <Footer/> */}
</div>
  )
}

export default LandingPageRoutes
