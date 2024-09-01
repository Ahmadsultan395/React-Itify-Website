import React, { useEffect } from 'react'
import "./About.css"
import  aboutUsPageImage  from '../../assets/images/about/c-about-girl.png'
import AOS from 'aos'
import "../../../node_modules/aos/dist/aos.css"
import { NavLink } from 'react-router-dom'
 

const AboutBody=()=>{
useEffect(()=>{
    AOS.init({duration:2000})
},[])

const handleaboutClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);}
    return(<>
    
    <section id="head-section-about-us-page">
        <div className="head-text-about-us-page">
        </div>
    </section>

    <section className="who-we-are-about-us-page">
        <h2 data-aos="fade-up" >Who We Are</h2>
    </section>

    
    {/* // <!-- about section  --> */}
    <section className="about-section-cantainer-about-us-page">
        <div className="about-section-about-us-page">
            <div className="about-section-text-about-us-page">
                <h5 data-aos="fade-up">About Us</h5>
                <h2 data-aos="fade-up">We Are Increasing Business Success With Technology</h2>
                <p data-aos="fade-up">Years of working in IT services developing software applications and mobile apps for clients all over
                    the world. <br /><br/>
                    "ITify was established in the year 2020 with an aim to provide best solutions to your problems. We
                    have a team of highly skilled and experienced professionals who work round the clock to provide you
                    with the best possible solutions. We offer a wide range of services such as: -Website design and
                    development -Search engine optimization -Social media marketing -Email marketing -Pay per click
                    advertising -Graphic design -Mobile App Development We are a one-stop shop for all your IT needs and
                    our main aim is to provide you with the best possible solutions that meet your requirements and
                    budget. We believe that technology should be accessible to everyone, and our goal is to make IT
                    happen!"</p>
                    
                <div data-aos="fade-up" className="about-section-mail-about-us-page">Request Quote: <a href="mailto:support@itify.website">support@itify.website</a></div>
                <NavLink exact to='/Contact' className="btn-about-us-page-a" onClick={handleaboutClick}><button data-aos="fade-up" className="btn-about-us-page" >See More</button></NavLink>

            </div>
            <div className="about-section-image">
                <div data-aos="fade-up" className="about-section-image-innerdiv-about-us-page"> <img src={aboutUsPageImage} alt={aboutUsPageImage} /></div>
            </div>
        </div>
    </section>
    
    
    </>)
}
export default AboutBody;