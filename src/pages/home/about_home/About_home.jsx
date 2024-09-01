import React, { useEffect } from 'react'
import "./About_home.css"
import AboutHomeImage from "../../../assets/images/about-home/c-about-home.png"
import AOS from "aos"
import "../../../../node_modules/aos/dist/aos.css"


const About_home=()=>{
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return(<>
    <section data-aos="fade-right" className="home-about-us-section" >
        <div className="about-home-us">
            <div className="about-home-us-text">
                <h5>About us</h5>
                <h1>We Are Increasing Business Success With Technology</h1>
                <p>
                    Years of working in IT services developing software applications and mobile apps for clients all
                    over the world.
                    <br/><br/>
                    "ITify was established in the year 2020 with an aim to provide best solutions to your problems. We
                    have a team of highly skilled and experienced professionals who work round the clock to provide you
                    with the best possible solutions. We offer a wide range of services such as: -Website design and
                    development -Search engine optimization -Social media marketing -Email marketing -Pay per click
                    advertising -Graphic design -Mobile App Development We are a one-stop shop for all your IT needs and
                    our main aim is to provide you with the best possible solutions that meet your requirements and
                    budget. We believe that technology should be accessible to everyone, and our goal is to make IT
                    happen!"
                </p>
            </div>
            <div className="about-home-us-image"><img src={AboutHomeImage} alt={AboutHomeImage}/></div>
        </div>
    </section>

    </>)
}
export default About_home;