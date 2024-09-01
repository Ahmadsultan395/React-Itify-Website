import React, { useEffect } from 'react'
import "./Service.css"
import AOS from "aos"
import "../../../node_modules/aos/dist/aos.css"

const ServiceBody2=()=>{
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    return(<>
<div className="service-body2-heading">
<h2 data-aos="fade-up" >WORKING PROCESS</h2>
<h1 data-aos="fade-up">Our Working process-How We Work For Our Customers</h1>
</div>

<section className='service-body-part2-section'>
<div className='service-body-part2-section-div'>

    <div data-aos="fade-up" className="service-body2-cards">
        <h1 className='service-body2-cards-count'>1</h1>
        <h2 className='service-body2-cards-heading'>Discovery</h2>
        <p>is the initial phase of a project where the team works to understand the client's needs and requirements.</p>
    </div>

    <div data-aos="fade-up" className="service-body2-cards">
        <h1 className='service-body2-cards-count'>2</h1>
        <h2 className='service-body2-cards-heading'>Planning</h2>
        <p>is the process of defining project goals, determining tasks and resources needed, and creating a
                        roadmap for the development process</p>
    </div>

    <div data-aos="fade-up" className="service-body2-cards">
        <h1 className='service-body2-cards-count'>3</h1>
        <h2 className='service-body2-cards-heading'>Execute</h2>
        <p>The project plan is executed, and the software is tested and developed according to predefined requirements and specifications.</p>
    </div>

    <div data-aos="fade-up" className="service-body2-cards">
        <h1 className='service-body2-cards-count'>4</h1>
        <h2 className='service-body2-cards-heading'>Deliver</h2>
        <p>The final phase of a project where the completed software product is tested, deployed, and handed over to the client for use.</p>
    </div>

    </div>
</section>
    </>)
}

export default ServiceBody2;