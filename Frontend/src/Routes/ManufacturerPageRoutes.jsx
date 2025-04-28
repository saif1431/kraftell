import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ManufacturerDashboard from '../pages/Manufacturer Pages/ManufacturerDashboard'

function ManufacturerPageRoutes() {
  return (
      <Routes>
      <Route path='/ManufacturerDashboard' element={<ManufacturerDashboard />} />
   </Routes>
  )
}

export default ManufacturerPageRoutes
