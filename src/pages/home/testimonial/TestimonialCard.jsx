import React, { useEffect } from 'react'
import AOS from "aos"
import '../../../../node_modules/aos/dist/aos.css'
 
const TestimonialCard =(props)=>{
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    return(<>
    <div data-aos="fade-up" className='testimonial-card'>
        <div className='testimonial-card-head'>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        </div>
        <div className='testimonial-card-body'>
            <p>{props.body}</p>
            <img src={props.image} alt="" />           
        </div>
    </div>
    </>)
}

export default TestimonialCard;