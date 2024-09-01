import React from 'react'
import Headcard from './headCard/HeadCard'
import HeroSection from './hero/Hero-section'
import OurServices from './OurServices/OurServices'
import Callinghome from './calling/Calling'
import Counter from './counter/Counter'
import Testinomial from './testimonial/Testimonial'
import About_home from './about_home/About_home'
import ContactHome from './contact-home/Contact_home'
import PortfolioSilder from './portfolioSlider/PortfolioSlider'


const Home=()=>{

    return(<>
    <HeroSection/>
    <Headcard/>
    <OurServices/>
    <Callinghome/>
    <Counter/>  
    <PortfolioSilder/>
    <Testinomial/>
    <About_home/>
    <ContactHome/>
    </>)
}
export default Home;
