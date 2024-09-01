import React, { useEffect } from 'react'
import CountUp from 'react-countup'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Counter.css"
import AOS from "aos"
import '../../../../node_modules/aos/dist/aos.css'

const Counter=()=>{
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
return(<>
<div className="container counter-caontainer my-5">
		<div className="row text-center gy-4">

	        <div className="col-lg-3 col-md-6 col-11 col-sm-11 mx-auto">
	        <div data-aos="fade-up" className="counter">
      <i className="fa fa-globe fa-2x"></i>
      <h1 className="counter-number"><CountUp end={1532} duration={20}/></h1>
       <p className="count-text ">Web Developing</p>
    </div>
	        </div>

              <div className="col-lg-3 col-md-6 col-11 col-sm-11 mx-auto">
               <div data-aos="fade-up" className="counter">
      <i className="fa fa-user fa-2x"></i>
      <h1 className="counter-number"><CountUp end={876} duration={20}/></h1>
      <p className="count-text ">Happy Clients</p>
    </div>
              </div>

              <div className="col-lg-3 col-md-6 col-11 col-sm-11 mx-auto">
                  <div data-aos="fade-up" className="counter">
      <i className="fa fa-file fa-2x"></i>
      <h1 className="counter-number"><CountUp end={1245} duration={20}/></h1>
      <p className="count-text ">Project Done</p>
    </div>
    </div>

              <div className="col-lg-3 col-md-6 col-11 col-sm-11 mx-auto">
              <div data-aos="fade-up" className="counter">
      <i className="fa fa-home fa-2x"></i>
      <h1 className="counter-number"><CountUp end={100}  duration={20}/></h1>
      <p className="count-text ">Company</p>
    </div>
              </div>

         </div>
</div>

</>)
}
export default Counter;