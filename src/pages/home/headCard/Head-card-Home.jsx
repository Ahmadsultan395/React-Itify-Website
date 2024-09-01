import React, { useEffect } from 'react'
import "./Headcard.css"
import AOS from "aos"
import "../../../../node_modules/aos/dist/aos.css"

const Home_card=(props)=>{
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    return(<>
    {/* <div data-aos="fade-up" className=' col-lg-3 col-md-6  col-sm-12 gy-4'> */}
    <div data-aos="fade-up" className='card  '>
        <div className="image-div">
        <img src={props.image} alt="card-logo1" />
        </div>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
    </div>
    {/* </div> */}
    </>)
}

export default Home_card;