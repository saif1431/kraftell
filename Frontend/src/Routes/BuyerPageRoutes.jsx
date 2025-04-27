import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../pages/Buyer Pages/DashBoard'
import SearchManufacter from '../pages/Buyer Pages/SearchManufacter'
import MyProfile from '../pages/Buyer Pages/MyProfile'
import MyPrototypes from '../pages/Buyer Pages/MyPrototypes'

function BuyerPageRoutes() {
  return (
   <Routes>
      <Route path='/dashboard' element={<DashBoard />} />
      <Route path='/searchManufacturers' element={<SearchManufacter />} />
      <Route path='/MyProfile' element={<MyProfile />} />
      <Route path='/MyPrototypes' element={<MyPrototypes />} />
   </Routes>
  )
}

export default BuyerPageRoutes
