import React, { useEffect } from 'react'
import {NavLink} from "react-router-dom"
import './Footer.css'
import "../../../node_modules/font-awesome/css/font-awesome.min.css"
// import AOS from 'aos'
// import '../../../node_modules/aos/dist/aos.css'

const Footer =()=>{
    // useEffect(()=>{
    //     AOS.init({duration:2000})
    // },[])
    // const history = useHistory();

    const handleNavLinkClick = () => {
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    };
    return(<>
    
    {/* <!-- footer secrtion//////////////////////////////////////////////////////////////////////////////////// --> */}
    <section id="footer-section">
        <div className="footer">
    
          <div className="footer-item1">
            <h2  className='footer-item1-h2'>ITify (SMC PRIVATE) LIMITED</h2>
            <p >ITify was established in the year 2020 with an aim to provide best solution of your problem</p>
            <i  className="fa fa-phone"><a href="tel:+923361663905">(+92)336-1663905</a></i>
            <i  className="fa fa-envelope"><a href="mailto:support@itify.website">support@itify.website</a></i>
    
          </div>
          <div className="footer-item2">
            <div className="footer-links">
              <h2  className='footer-links-h2'>Quick Links</h2>
              <NavLink exact to="Contact" className='footer-item-2margin' onClick={handleNavLinkClick}>Contact us</NavLink>
              <NavLink exact to="Service" onClick={handleNavLinkClick}>Services</NavLink>
              <NavLink exact to="Portfolio" onClick={handleNavLinkClick}>Portfolio</NavLink>
              <NavLink exact to="About" onClick={handleNavLinkClick}>About Us</NavLink>
              <NavLink exact to="Team" onClick={handleNavLinkClick}>Our Team</NavLink>
            </div>
          </div>
          <div className="footer-item3">
            <h2 className='footer-item3-h2' style={{color:'orange'}}>Join Our Community</h2>
            <div className="footer-item3-social">
              <h3  >Find us on</h3>
              <div className="footer-item3-social-media">
                <div className="f-facebook"><a  href="https://www.facebook.com/ITify.makeITHappen?mibextid=ZbWKwL"><i className="fa fa-facebook"></i></a>
                </div>
                <div className="f-linkedin"><a  href="https://www.linkedin.com/company/itifysmcprivatelimited/"><i className="fa fa-linkedin"></i></a>
                </div>
                <div  className="f-twitter"><a  href="https://www.instagram.com/itify.official/?igsh=MTBjMGhwY3RsdGtmNg%3D%3D">
                    <i className="fa fa-instagram"></i></a></div>
                <div className="f-whatsapp"><a href="https://wa.me/+92336163905"><i className="fa fa-whatsapp "></i></a></div>
              </div>
            </div>
            <div className="footer-item3-job">
            <h3 >For Job Oppertunity</h3>
              <i  className="fa fa-envelope"><a href="mailto:support@itify.website">support@itify.website</a></i>
            </div>
          </div>
        </div>
        <div className='footer-end-line-div'>
        {/* <div  className='footer-end-line'> */}
          <hr />
        {/* </div> */}
        <p className='footer-end-line-p' >© 2023 ITify make IT happen. All rights reserved.</p>
      </div>
      </section>
    
    {/* <!-- footer section end///////////////////////////////////////////////////////////// --> */}




    </>)
}

export default Footer;