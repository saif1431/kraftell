import React from 'react'
import Navbar from './components/Reuseable Component/Navbar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import LandingPageRoutes from './Routes/LandingPageRoutes'
import BuyerPageRoutes from './Routes/BuyerPageRoutes'
import ManufacturerPageRoutes from './Routes/ManufacturerPageRoutes'


function App() {
  return (
   <BrowserRouter>
  <LandingPageRoutes/>
  <BuyerPageRoutes/>
  <ManufacturerPageRoutes/>
   </BrowserRouter>
  )
}

export default App
