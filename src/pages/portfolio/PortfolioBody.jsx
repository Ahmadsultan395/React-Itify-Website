import React, { useEffect } from 'react'
import AnsariPort from "../../assets/images/portfolio/cpmoress-Ansari-port (1).png"
import Yeebly from "../../assets/images/portfolio/compress-yeebly-port (1).jpg"
import Landingpage_NTC from "../../assets/images/portfolio/landing-NTC.png"
import Islam7 from "../../assets/images/portfolio/compress-islam7232.png"
import RedValvet from "../../assets/images/portfolio/compress-image_original.png"
import Bismillah from "../../assets/images/portfolio/compress-image_original (2).png"

import './Portfolio.css'
import AOS from 'aos'
import "../../../node_modules/aos/dist/aos.css"


const PortfolioBody1 =()=>{
useEffect(()=>{
  AOS.init({duration:1000})
},[])

    return(<>
     {/* <!-- head image ///////////////////////////// --> */}
  <section id="head-section-portfolio-page">
    <div className="head-text-portfolio-page">
      
    </div>
  </section>
  {/* <!-- end --> */}

  {/* <!-- text section///////////////////////////////////////////////////////////////// --> */}
  <section className="who-we-are-portfolio-page">
    <h2 data-aos="fade-up">Project Highlights</h2>
    <h4 data-aos="fade-up">Our Past Work</h4>
  </section>
  {/* <!-- end --> */}


  {/* <!-- portfolio card////////////////////// --> */}

  <div className="card-container-portfolio-page">
    <div data-aos="fade-up" className="card-portfolio-page">
      <div className="card-inner-portfolio-page">
        <img src={AnsariPort} alt="Image 1" />
        <div className="card-content-portfolio-page">
          <h2>Ansari Trust Website</h2>
          <p>Trust/Charity</p>
        </div>
      </div>
    </div>
    <div data-aos="fade-up" className="card-portfolio-page">
      <div className="card-inner-portfolio-page">
        <img src={Bismillah} alt="Image 2" />
        <div className="card-content-portfolio-page">
          <h2>Bismillah Bakary UK</h2>
          <p>Ecommerce</p>
        </div>
      </div>
    </div>
    {/* <!-- Repeat the above card structure for the other cards --> */}
  </div>

  <div  className="card-container-portfolio-page">
    <div data-aos="fade-up" className="card-portfolio-page">
      <div className="card-inner-portfolio-page">
        <img src={RedValvet} alt="Image 1"/>
        <div className="card-content-portfolio-page">
          <h2>Cakery Suppliers Web</h2>
          <p>Ecommerce</p>
        </div>
      </div>
    </div>
    <div data-aos="fade-up" className="card-portfolio-page">
      <div className="card-inner-portfolio-page">
        <img src={Islam7} alt="Image 2"/>
        <div className="card-content-portfolio-page">
          <h2>Islamic App</h2>
          <p>Islamic/Religon App</p>
        </div>
      </div>
    </div>
    {/* <!-- Repeat the above card structure for the other cards --> */}
  </div>

  <div  className="card-container-portfolio-page">
    <div data-aos="fade-up" className="card-portfolio-page">
      <div className="card-inner-portfolio-page">
        <img src={Landingpage_NTC} alt="Image 1" />
        <div className="card-content-portfolio-page">
          <h2>Cakery Suppliers Web</h2>
          <p>Ecommerce</p>
        </div>
      </div>
    </div>
    <div data-aos="fade-up" className="card-portfolio-page">
      <div className="card-inner-portfolio-page">
        <img src={Yeebly} alt="Image 2" />
        <div className="card-content-portfolio-page">
          <h2>Yeebly</h2>
          <p>Ecommerce</p>
        </div>
      </div>
    </div>
    {/* <!-- Repeat the above card structure for the other cards --> */}
  </div>
  {/* <!-- end --> */}


    </>)
}

export default PortfolioBody1;