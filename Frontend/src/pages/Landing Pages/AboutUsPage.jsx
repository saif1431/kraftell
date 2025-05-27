import React from 'react'
import Navbar from '../../components/Reuseable Component/Navbar'
import Footer from '../../components/Reuseable Component/Footer'
import AboutUsHero from '../../components/LandingPage Components/AboutUsComponents/AboutUsHero'
import AboutUsSection2 from '../../components/LandingPage Components/AboutUsComponents/AboutUsSection2'
import AboutUsSection3 from '../../components/LandingPage Components/AboutUsComponents/AboutUsSection3'
import AboutUsSection4 from '../../components/LandingPage Components/AboutUsComponents/AboutUsSection4'

function AboutUsPage() {
  return (
   <div>
<Navbar/>
<AboutUsHero/>
<AboutUsSection2/>
<AboutUsSection3/>
<AboutUsSection4/>
<Footer/>
    </div>
  )
}

export default AboutUsPage
