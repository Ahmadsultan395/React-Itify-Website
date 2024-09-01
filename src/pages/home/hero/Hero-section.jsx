import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import '../../../../node_modules/aos/dist/aos.css';
import './Hero-section.css';

const HeroSection = () => {
  const [aosInitialized, setAosInitialized] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    AOS.init({ duration: 2000 });
    setAosInitialized(true);
  }, []);

  useEffect(() => {
    if (aosInitialized) {
      const originalText = "We increase your business success using modern technology & modern Framework";
      let currentIndex = 0;

      const interval = setInterval(() => {
        setText(originalText.substring(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex === originalText.length) {
          clearInterval(interval);
        }
      }, 50); // Adjust the interval as needed
    }
  }, [aosInitialized]);

  const handleheroClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);}
  return (
    <>
      {/* head section */}
      <section className='main-section'>
        <div className='head-part'>
          <div className='head-part-content'>
            <h2 data-aos='fade-right'>Top Software Development with</h2>
            <h1 data-aos='fade-left'>ITIFY</h1>
            <p data-aos='fade-right' id='fade-paragraph'>
              {text}
            </p>
            <div data-aos='fade-up'>
              <button className='btn-get-started'>
                <NavLink to='./Service'
                onClick={handleheroClick}
                >Get Started</NavLink>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
