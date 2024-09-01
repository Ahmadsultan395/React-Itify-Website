import React, { useCallback, useEffect } from 'react'
import "./Testimonial.css"
import TestimonialCard from './TestimonialCard'
import TestimonialCardData from './TestimonialCardData'
import AOS from "aos"
import '../../../../node_modules/aos/dist/aos.css'
 

const Testinomial=()=>{
    useEffect(()=>{
AOS.init({duration:2000})
    },[])
    return(<>
    <section className='testimonial-section'>
        <h1 data-aos="fade-up" className='testimonial-section-h1'>Our<span> Testimonial</span></h1> 
        <p data-aos="fade-up" className='testimonial-section-p'>What Saying Our Customers</p>
        <div  className='testimonial-div'>
            {
                TestimonialCardData.map((value,index)=>{
                    return(<>
                    <TestimonialCard key={index}
                    title={value.title}
                    subtitle={value.subtitle}
                    body={value.body}
                    image={value.image}
                    />
                    </>)
                })


            }
        </div>
    </section>
    </>)
}

export default Testinomial;