import React from 'react'
import './OurServices.css'

const OurServicesCard=(props)=>{
return(<>
<div className='service-card' data-aos="fade-up" >
    <div className='our-services-img-title'>
        <img src={props.image} alt={props.image} />
        <h1>{props.title}</h1>
    </div>
    <div className='our-services-body'>
        <p>{props.body}</p>
    </div>
</div>
</>)
}
export default OurServicesCard;