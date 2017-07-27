import React, { Component } from 'react';
import Slider from 'react-slick';
import './ProjectsSlider.css';

class ProjectsSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      arrows: false,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "ease-in-out",


      // autoplaySpeed: 100,
      // swipeToSlide: true,
      // touchMove: true
    };
    return (
      <div className="sk-projects-slider">
        <div className='slider-container'>
          <Slider {...settings}>
            <div><img src='https://dl.dropboxusercontent.com/s/y1xk77qera4a0fk/project-screen-3.png' alt="slide project"/></div>
            <div><img src='https://dl.dropboxusercontent.com/s/xppof81s3am9114/project-screen-4.png' alt="slide project"/></div>
            <div><img src='https://dl.dropboxusercontent.com/s/gh4w33pncezrip0/project-screen-5.png' alt="slide project"/></div>
            <div><img src='https://dl.dropboxusercontent.com/s/65xuwh71gyo86u5/project-screen-6.png' alt="slide project"/></div>
            <div><img src='https://dl.dropboxusercontent.com/s/h6l5jgwcvmbo4yz/project-screen-7.png' alt="slide project"/></div>
            <div><img src='https://dl.dropboxusercontent.com/s/zs5yr9wiodoe0t3/project-screen-8.png' alt="slide project"/></div>
            <div><img src='https://dl.dropboxusercontent.com/s/2y9b4jz2sn6jm4r/project-screen-9.png' alt="slide project"/></div>
            <div><img src='https://dl.dropboxusercontent.com/s/hb2rr7o68n3ap1e/project-screen-10.jpg' alt="slide project"/></div>
            <div><img src='https://dl.dropboxusercontent.com/s/t4o8j6cgk4ouo6c/project-screen-11.png' alt="slide project"/></div>
            <div><img src='https://dl.dropboxusercontent.com/s/1tpvfrrfqzfs0m0/project-screen-13.png' alt="slide project"/></div>
            <div><img src='https://dl.dropboxusercontent.com/s/3ncve5l37imoz83/project-screen-1.jpg' alt="slide project"/></div>
            <div><img src='https://dl.dropboxusercontent.com/s/flnhuipyoh3u9py/project-screen-2.png' alt="slide project"/></div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default ProjectsSlider;