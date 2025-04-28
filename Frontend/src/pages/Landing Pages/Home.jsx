import React from 'react'
import Hero from '../../components/LandingPage Components/Home Components/Hero'
import StartManufact from '../../components/LandingPage Components/Home Components/StartManufact'
import Services from '../../components/LandingPage Components/Home Components/Services'
import RightManufact from '../../components/LandingPage Components/Home Components/RightManufact'
import SecurePayment from '../../components/LandingPage Components/Home Components/SecurePayment'
import KraftellFounder from '../../components/LandingPage Components/Home Components/KraftellFounder'
import Navbar from '../../components/Reuseable Component/Navbar'
import Footer from '../../components/Reuseable Component/Footer'
import TopFooter from '../../components/Reuseable Component/TopFooter'

function Home() {
  return (
    <div>
      <Navbar/>
<Hero/>
<StartManufact/>
<Services/>
<RightManufact/>
<SecurePayment/>
<KraftellFounder/>
<TopFooter/>
<Footer/>
    </div>
  )
}

export default Home
