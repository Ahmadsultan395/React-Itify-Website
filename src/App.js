import React from 'react'
import './App.css';
// import ParticlesBackground from './component/Particles';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
// import {Routes, Route} from 'react-router-dom'
import Navbar from './pages/navbar/Navbaar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Team from "./pages/team/Team"
import Contact from "./pages/contact/Contact"
import About from "./pages/about/About"
import Service from "./pages/service/Service"
import Portfolio from "./pages/portfolio/Portfolio"
import Footer from './pages/footer/Footer';
import ScrollButton from './component/Scroll-Buttton/ScrollButton';



function App() {
  return (
    <div className="App">
      {/* <ParticlesBackground/> */}
      <Navbar/>
      <ScrollButton/>

      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/Portfolio' Component={Portfolio}/>
        <Route exact path='/About' Component={About}/>
        <Route exact path='/Contact' Component={Contact}/>
        <Route exact path='/Service' Component={Service}/>
        <Route exact path='/Team' Component={Team}/>
      </Routes>
      <Footer/>

      {/* scrol button */}
      {/* <button className='scrool-up-button' onClick={top}>top</button> */}
    </div>
  );
}

export default App;
