import React, { Component } from 'react';
import Slider from 'react-slick';
import './Achievements.css';

class Achievements extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      arrows: false,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "ease-in-out"
    };
    return (
      <div className="sk-achievements-content">
        <div className="sk-achievements-link">
          <h4>Achievements</h4>
          <ul>
            <li><a href="https://www.coursera.org/account/accomplishments/records/D9TGMUVCRGWZ" className="link-to">Coursera Full Stack Specialization MOC</a></li>
            <li><a href="vhttps://www.coursera.org/account/accomplishments/records/fYcUKdKWyU92MBDC" className="link-to">Coursera mobile apps for android</a></li>
            <li><a href="https://www.coursera.org/account/accomplishments/records/9PSM788NY23H" className="link-to">Coursera Ruby on Rials</a></li>
            <li><a href="http://tco16.topcoder.com/" className="link-to">Topcoder Open Challenge (TCO2016) Finalist</a></li>
            <li><a href="http://university.mongodb.com/course_completion/27fd23dc484e434088cfd94717b555ae" className="link-to">Mongodb University</a></li>
            <li><a href="https://www.codecademy.com/nomo_kazza" className="link-to">Codecademy</a></li>
          </ul>
        </div>
        <div className="sk-achievements">
          <div className="sk-achievements-list">
            <Slider {...settings}>
              <div><img src='https://dl.dropboxusercontent.com/s/fhiq6196sec7rsl/android.jpg' alt="slide project"/></div>
              <div><img src='https://dl.dropboxusercontent.com/s/0pz7fyg3xd4nlhy/htmlCssJavascript.jpg' alt="slide project"/></div>
              <div><img src='https://dl.dropboxusercontent.com/s/ubi8xknl2ffbdv5/mongodb1.png' alt="slide project"/></div>
              <div><img src='https://dl.dropboxusercontent.com/s/kiuylugj1ylsskb/javascriptFramework.jpg' alt="slide project"/></div>
              <div><img src='https://dl.dropboxusercontent.com/s/n8w59ef4aceijrf/multiplatformMobileApp.jpg' alt="slide project"/></div>
              <div><img src='https://dl.dropboxusercontent.com/s/ihdci0z7c6glnok/mongodb2.png' alt="slide project"/></div>
              <div><img src='https://dl.dropboxusercontent.com/s/3pucijvhrelnnb0/rubyOnRails.jpg' alt="slide project"/></div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Achievements;