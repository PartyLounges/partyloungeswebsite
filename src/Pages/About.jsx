import React from 'react'
import AboutUsTopSection from '../Sections/About/AboutUsTopSection'
import AboutExperienceSection from '../Sections/About/AboutExperienceSection'
import AboutServicesSection from '../Sections/About/AboutServiceSection'
import AboutJourney from '../Sections/About/AboutJourney'
import AboutMissionVision from '../Sections/About/AboutMissionVision'
import AboutCoreBeliefs from '../Sections/About/AboutCoreBeliefs'

function About() {
    return (
        <div>
            <AboutUsTopSection />
            <AboutExperienceSection />
            <AboutMissionVision />
            <AboutJourney />
            <AboutCoreBeliefs />
            <AboutServicesSection />
        </div>
    )
}

export default About