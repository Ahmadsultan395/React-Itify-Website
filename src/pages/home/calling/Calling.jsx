import React, { useEffect } from 'react'
import "./calling.css"
import callinglogo from "../../../assets/images/calling/c-calling-1.png"
import { NavLink } from 'react-router-dom'
import AOS from "aos"
import "../../../../node_modules/aos/dist/aos.css"
// import ParticlesBackground from "../../../component/Particles"
 
const Callinghome=()=>{
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
    const handlecallingClick = () => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);}
    return(<>
    <div className="Calling-section" >    
    <img data-aos="fade-up" src={callinglogo} alt="" />
    <h2 data-aos="fade-up" >Call US 24/7</h2>
    <h1 data-aos="fade-up" >+923361663905</h1>
    <p data-aos="fade-up" >Have any idea or project for in your mind call us or schedule a appointment. Our representative will reply you shortly.</p>
    <NavLink  to='./Contact' data-aos="fade-up" onClick={handlecallingClick}><button>Let's Talk</button></NavLink>
    {/* <ParticlesBackground/> */}
    </div>
    </>)
}

export default Callinghome;