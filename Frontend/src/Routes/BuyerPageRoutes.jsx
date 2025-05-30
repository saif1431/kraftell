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
import BuyerPrototypePage from '../pages/Buyer Pages/BuyerPrototypePage'
import BuyerApprovedPage from '../pages/Buyer Pages/BuyerApprovedPage'
import BuyerPaymentForm from '../pages/Buyer Pages/BuyerPaymentForm'
import ReleasePayment from '../pages/Buyer Pages/ReleasePayment'
import ManufacturerProfilePage from '../pages/Buyer Pages/ManufacturerProfilePage'
import BuyerPrototypeListpage from '../pages/Buyer Pages/BuyerPrototypeListpage'
import BuyerProductRequest from '../pages/Buyer Pages/BuyerProductRequest'
import RequestQuotePage from '../pages/Buyer Pages/RequestQuotePage'
import ProductCataloguePage from '../pages/Buyer Pages/ProductCataloguePage'
import BuyerNotificationPage from '../pages/Buyer Pages/BuyerNotificationPage'
import BuyerProductCatalogue from '../pages/Buyer Pages/BuyerProductCatalogue'
import BuyerPaymentPage from '../pages/Buyer Pages/BuyerPaymentPage'

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
      <Route path='/ReleasePayment' element={<ReleasePayment />} />
      <Route path='/BuyerPrototypes' element={<BuyerPrototypePage />} />
      <Route path='/BuyerApprovalForm' element={<BuyerApprovedPage />} />
      <Route path='/BuyerPaymentForm' element={<BuyerPaymentForm />} />
      <Route path='/ManufacturerProfile' element={<ManufacturerProfilePage />} />
      <Route path='/BuyerPrototypeList' element={<BuyerPrototypeListpage />} />
      <Route path='/ProductRequestForm' element={<BuyerProductRequest />} />
      <Route path='/RequestQuoteForm' element={<RequestQuotePage />} />
      <Route path='/ProductCatalogueView' element={<ProductCataloguePage />} />
      <Route path='/BuyerNotification' element={<BuyerNotificationPage />} />
      <Route path='/ProductCatalogue' element={<BuyerProductCatalogue />} />
      <Route path='/BuyerPaymentDetail' element={<BuyerPaymentPage />} />

   </Routes>
  )
}

export default BuyerPageRoutes
