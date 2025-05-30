import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ManufacturerDashboard from '../pages/Manufacturer Pages/ManufacturerDashboard'
import ProfileSummary from '../pages/Manufacturer Pages/ProfileSummary'
import RequestPrototype from '../pages/Manufacturer Pages/RequestPrototype'
import SendMessageForm from '../pages/Manufacturer Pages/SendMessageForm'
import PaymentFormPage from '../pages/Manufacturer Pages/PaymentFormPage'
import PlaceOrderPage from '../pages/Manufacturer Pages/PlaceOrderPage'
import PendingPrototypePage from '../pages/Manufacturer Pages/PendingPrototypePage'
import EditProfilePage from '../pages/Manufacturer Pages/EditProfilePage'
import ProductRequestPage from '../pages/Manufacturer Pages/ProductRequestPage'
import UploadPreviewPage from '../pages/Manufacturer Pages/UploadPreviewPage'
import NotificationsPage from '../pages/Manufacturer Pages/NotificationsPage'
import MatchingProjectPage from '../pages/Manufacturer Pages/MatchingProjectPage'
import PrototypeRequestPage from '../pages/Manufacturer Pages/PrototypeRequestPage'
import PaymentTablePage from '../pages/Manufacturer Pages/PaymentTablePage'
import PrototypePreviewPage from '../pages/Manufacturer Pages/PrototypePreviewPage'

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
      <Route path='/EditProfile' element={<EditProfilePage />} />
      <Route path='/ProductRequestForm' element={<ProductRequestPage />} />
      <Route path='/UploadPreview' element={<UploadPreviewPage />} />
      <Route path='/notification' element={<NotificationsPage />} />
      <Route path='/MatchingProject' element={<MatchingProjectPage />} />
      <Route path='/PrototypeRequestList' element={<PrototypeRequestPage />} />
      <Route path='/PaymentTable' element={<PaymentTablePage />} />
      <Route path='/PrototypePreview' element={<PrototypePreviewPage />} />
   </Routes>
  )
}

export default ManufacturerPageRoutes
