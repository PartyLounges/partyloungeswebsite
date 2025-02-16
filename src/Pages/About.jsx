import React from 'react'
import AboutUsTopSection from '../Sections/About/AboutUsTopSection'
import AboutExperienceSection from '../Sections/About/AboutExperienceSection'
import AboutJourney from '../Sections/About/AboutJourney'
import AboutMissionVision from '../Sections/About/AboutMissionVision'
import AboutCoreBeliefs from '../Sections/About/AboutCoreBeliefs'
import AboutCommitment from '../Sections/About/AboutCommitment'
import AboutLetsCreate from '../Sections/About/AboutLetsCreate'

function About() {
    return (
        <div>
            <AboutUsTopSection />
            <AboutExperienceSection />
            <AboutMissionVision />
            <AboutJourney />
            <AboutCoreBeliefs />
            <AboutCommitment />
            <AboutLetsCreate />
        </div>
    )
}

export default About