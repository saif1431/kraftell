import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../pages/Buyer Pages/DashBoard'
import SearchManufacter from '../pages/Buyer Pages/SearchManufacter'
import MyProfile from '../pages/Buyer Pages/MyProfile'
import MyPrototypes from '../pages/Buyer Pages/MyPrototypes'
import PrototypeWorkflowPage from '../pages/Buyer Pages/PrototypeWorkflowPage'
import PlatformActorsPage from '../pages/Buyer Pages/PlatformActorsPage'
import ProductSpecificationPage from '../pages/Buyer Pages/ProductSpecificationPage'
import OrderManagementPage from '../pages/Buyer Pages/OrderManagementPage'

function BuyerPageRoutes() {
  return (
   <Routes>
      <Route path='/dashboard' element={<DashBoard />} />
      <Route path='/searchManufacturers' element={<SearchManufacter />} />
      <Route path='/MyProfile' element={<MyProfile />} />
      <Route path='/MyPrototypes' element={<MyPrototypes />} />
      <Route path='/PrototypeWorkflow' element={<PrototypeWorkflowPage />} />
      <Route path='/PlatformActors' element={<PlatformActorsPage />} />
      <Route path='/ProductSpecification' element={<ProductSpecificationPage />} />
      <Route path='/OrderManagement' element={<OrderManagementPage />} />
   </Routes>
  )
}

export default BuyerPageRoutes
