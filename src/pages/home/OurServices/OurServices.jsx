import React, { useEffect } from 'react'
import "./OurServices.css"
import OurServicesCardData from './OurServicesData'
import OurServicesCard from './OurServicesCard'
import AOS from "aos"
import '../../../../node_modules/aos/dist/aos.css'
import ParticeBackgrond from "../../../component/Particles"
 
const OurServices=()=>{
    useEffect(()=>{
        AOS.init({duration:2000})
    })
    return(<>
    <section  className='services-section'>
        <div className='services-section-div'>
        <h1 className='services-section-div-h1' data-aos="fade-up">Our Services</h1>
        <p className='services-section-div-p' data-aos="fade-up">We are offering all kinds of solution services</p>
        <div className='services-section-cards'>
            {
                OurServicesCardData.map((value,index)=>{
                    return(<>
                    <OurServicesCard key={index}
                    image={value.image}
                    title={value.title}
                    body={value.body}
                    />
                    </>)
                })



            }
        </div>
        </div>
    </section>
    </>)
}
export default OurServices;