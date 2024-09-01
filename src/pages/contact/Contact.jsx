import React, { useEffect } from 'react'
import Footer from "../footer/Footer"
import ContactHome from "../home/contact-home/Contact_home"
import GoogleMape from '../mape/GoogleMape'
import "./Contect.css"
import AOS from "aos"
import "../../../node_modules/aos/dist/aos.css"


const Contact=()=>{
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

return(<>
    <section id="head-section-contact-us-page">
        <div className="head-text-contact-us-page">
        </div>
    </section>
    
    
    <section className="who-we-are-contact-us-page">
        <h2 data-aos="fade-up">Connect With Our Team</h2>
        <p data-aos="fade-up">Let's Talk with experts</p>
    </section>
 
 <ContactHome/>
 <GoogleMape/>
</>);

}
export default Contact;