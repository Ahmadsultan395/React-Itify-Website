import React from 'react';
import Slider from 'react-slick';
import './PortfolioSlider.css';

import slide_image_1 from '../../../assets/images/portfolio/cpmoress-Ansari-port (1).png';
// import slide_image_2 from '../../../assets/images/portfolio/image_original (2).png';
import slide_image_3 from '../../../assets/images/portfolio/compress-yeebly-port (1).jpg';
import slide_image_4 from '../../../assets/images/portfolio/compress-islam7232.png';
import slide_image_5 from '../../../assets/images/portfolio/compress-image_original.png';
import slide_image_6 from '../../../assets/images/portfolio/compress-image_original (2).png';
import slide_image_7 from '../../../assets/images/portfolio/landing-NTC.png';

function PortfolioSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '10%',
    autoplay: true,
    autoplaySpeed: 0, 
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: '8%',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '5%',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '3%',
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid portfolio-slider-main-container">
        <div>
          <h2 style={{ textAlign: 'center', color: 'white', fontSize: '3rem', padding: '1rem' }}>Portfolio</h2>
          <Slider {...settings}>
            <div>
              <img src={slide_image_1} className="portfolio-slider-images" alt="slide_image-1" />
            </div>
            <div>
              <img src={slide_image_6} className="portfolio-slider-images" alt="slide_image-2" />
            </div>
            <div>
              <img src={slide_image_3} className="portfolio-slider-images" alt="slide_image-3" />
            </div>
            <div>
              <img src={slide_image_4} className="portfolio-slider-images" alt="slide_image-4" />
            </div>
            <div>
              <img src={slide_image_5} className="portfolio-slider-images" alt="slide_image-5" />
            </div>
            <div>
              <img src={slide_image_6} className="portfolio-slider-images" alt="slide_image-6" />
            </div>
            <div>
              <img src={slide_image_7} className="portfolio-slider-images" alt="slide_image-7" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default PortfolioSlider;
