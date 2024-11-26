import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Slider from '../Components/Navbar/Slider'
import IntroSection from '../Sections/Home/IntroSection'
import ServiceCardGrid from '../Sections/Home/ServiceCardGrid'

function Home() {
    return (
        <div>
          <Navbar />
          <Slider />
          <IntroSection />
          <ServiceCardGrid />
        </div>
    )
}

export default Home