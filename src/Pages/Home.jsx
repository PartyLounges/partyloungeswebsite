import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Slider from '../Components/Navbar/Slider'
import IntroSection from '../Sections/Home/IntroSection'
import ServiceCardGrid from '../Sections/Home/ServiceCardGrid'
import BlogSection from '../Sections/Home/BlogSection'
import Footer from '../Components/Footer/Footer'
import InstagramProfile from '../Sections/Home/InstagramProfile'

function Home() {
    return (
        <div>
          <Navbar />
          <Slider />
          <IntroSection />
          <ServiceCardGrid />
          <BlogSection />
          <InstagramProfile />
          <Footer />
        </div>
    )
}

export default Home