import React from 'react'
import Navbar from '../../components/Reuseable Component/Navbar'
import Footer from '../../components/Reuseable Component/Footer'
import HowItWorkSection1 from '../../components/LandingPage Components/HowItWorksComponents/HowItWorkSection1'
import ManufacturerCards from '../../components/LandingPage Components/HowItWorksComponents/ManufacturerCards'

function HowItWorksPage() {
  return (
    <div>
      <Navbar/>
   <div className="min-h-screen bg-primary">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <HowItWorkSection1 />
        <ManufacturerCards />
      </div>
    </div>
<Footer/>
    </div>
  )
}

export default HowItWorksPage
