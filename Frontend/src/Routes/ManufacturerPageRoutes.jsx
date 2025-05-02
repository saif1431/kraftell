import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ManufacturerDashboard from '../pages/Manufacturer Pages/ManufacturerDashboard'
import ProfileSummary from '../pages/Manufacturer Pages/ProfileSummary'
import RequestPrototype from '../pages/Manufacturer Pages/RequestPrototype'
import SendMessageForm from '../pages/Manufacturer Pages/SendMessageForm'
import PaymentFormPage from '../pages/Manufacturer Pages/PaymentFormPage'
import PlaceOrderPage from '../pages/Manufacturer Pages/PlaceOrderPage'
import PendingPrototypePage from '../pages/Manufacturer Pages/PendingPrototypePage'

function ManufacturerPageRoutes() {
  return (
      <Routes>
      <Route path='/ManufacturerDashboard' element={<ManufacturerDashboard />} />
      <Route path='/ProfileSummary' element={<ProfileSummary />} />
      <Route path='/RequestPrototype' element={<RequestPrototype />} />
      <Route path='/SendMessageForm' element={<SendMessageForm />} />
      <Route path='/PaymentForm' element={<PaymentFormPage />} />
      <Route path='/PlaceOrder' element={<PlaceOrderPage />} />
      <Route path='/PendingPrototypes' element={<PendingPrototypePage />} />
   </Routes>
  )
}

export default ManufacturerPageRoutes
