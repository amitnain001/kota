import React from 'react'
import HeroSection from '../sections/HeroSection'
import LatestArticle from '../sections/LatestArticle'
import OurClients from '../sections/OurClients'
import OurCreative from '../sections/OurCreative'
import Services from '../sections/Services'
import WorkSection from '../sections/WorkSection'

const Home = () => {
    return (
        <>
            <HeroSection />
            <OurCreative />
            <Services />
            <WorkSection />
            <OurClients />
            <LatestArticle />
        </>
    )
}

export default Home