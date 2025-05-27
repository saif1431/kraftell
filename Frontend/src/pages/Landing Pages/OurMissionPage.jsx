import React from 'react'

import OurMissionSection1 from '../../components/LandingPage Components/OurMissionComponents/OurMissionSection1'
import Footer from '../../components/Reuseable Component/Footer'
import Navbar from '../../components/Reuseable Component/Navbar'
import OurMissionSection2 from '../../components/LandingPage Components/OurMissionComponents/OurMissionSection2'
import OurMissionSection3 from '../../components/LandingPage Components/OurMissionComponents/OurMissionSection3'
import OurMissionSection4 from '../../components/LandingPage Components/OurMissionComponents/OurMissionSection4'

function OurMissionPage() {
  return (
   <div>
<Navbar/>
<div className='lg:py-20 py-12 bg-primary  px-4 sm:px-6 lg:px-8'>
 <div className='max-w-6xl  mx-auto space-y-12 w-full'>
   <OurMissionSection1/>
  <OurMissionSection2/>
  <OurMissionSection3/>
  <OurMissionSection4/>
 </div>
</div>
<Footer/>
    </div>
  )
}

export default OurMissionPage
