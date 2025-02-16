import React from 'react'
import AboutUsTopSection from '../Sections/About/AboutUsTopSection'
import AboutExperienceSection from '../Sections/About/AboutExperienceSection'
import AboutServicesSection from '../Sections/About/AboutServiceSection'
import AboutJourney from '../Sections/About/AboutJourney'
import AboutMissionVision from '../Sections/About/AboutMissionVision'

function About() {
    return (
        <div>
            <AboutUsTopSection />
            <AboutExperienceSection />
            <AboutMissionVision />
            <AboutJourney />
            <AboutServicesSection />
        </div>
    )
}

export default About