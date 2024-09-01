import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo/c-logo.png"
import "./Navbar.css"
import AOS from "aos"
import "../../../node_modules/aos/dist/aos.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

 
const Navbar=()=>{
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  const handlenavbarClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);}

    

     return(<>
    <div
    data-aos="fade-down"
    className='container-fluid  nav-main'>
        <div className='row'>
            <div className='col-lg-11  col-11  mx-auto'>

    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    {/* <h1 className='itify-text'>ITIFY</h1> */}
    <img className='logo-img' src={logo} alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link mx-1" activeclassname="active" aria-current="page" to="/" onClick={handlenavbarClick} >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link mx-1" activeclassname="active" aria-current="page" to="/About" onClick={handlenavbarClick} >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link mx-1" activeclassname="active" aria-current="page" to="/Service" onClick={handlenavbarClick} >Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link mx-1" activeclassname="active" aria-current="page" to="/Portfolio" onClick={handlenavbarClick} >Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link mx-1" activeclassname="active" aria-current="page" to="/Team" onClick={handlenavbarClick} >Team</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link mx-1" activeclassname="active" aria-current="page" to="/Contact" onClick={handlenavbarClick} >Contact</NavLink>
        </li>
        
       
      </ul>
     
    </div>
  </div>
</nav>
</div>
        </div>
    </div>

    </>)
}

export default Navbar;