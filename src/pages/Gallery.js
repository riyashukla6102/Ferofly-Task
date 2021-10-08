import React from "react";
import Slider from "react-slick";


const Gallery=()=>{
    var settings = {
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        speed: 1000
      };
      return (
          <div id="gallery">
          <div className="gallery-heading">Gallery</div>
          <div className="gallery-content">
        <div className="slider">
          <Slider {...settings}>
              <img src="/slide3.jpg" />
              <img src="/slide1.jpg" />
          </Slider>
        </div>
        <div className="slider">
          <Slider {...settings}>
            <img src="/slide2.jpg" />
            <img src="/slide3.jpg" />
          </Slider>
        </div>
        <div className="slider">
          <Slider {...settings}>
              <img src="/slide1.jpg" />
              <img src="/slide2.jpg" />
          </Slider>
        </div>
        </div>
        </div>
        
      );
}
    
export default Gallery;
