import React, { Component } from 'react';
import ProjectsSlider from '../ProjectsSlider';
import Achievements from '../Achievements';
import './Home.css';
/**
 * Home component which display home page content.
 */
class Home extends Component {
  render() {
    return (
      <div className="sk-wrapper">
        <div className="sk-main-content">
          <div className="bg-cover"></div>
          <div className="intro-bg"></div>
          <div className="sk-section sk-intro-container">
            <div className="sk-h3"><h3>Hi, I am Solomon Kassaye</h3></div>
            <div className="sk-h4"><h4>Welcome to my portfolio.</h4></div>
            <div className="sk-h5"><h5>I invite you to explore my site to get
              a better understanding of my specialties, technique and professional experience.
              What you’ll find below is the projects I was working at <a href="https://www.topcoder.com/members/nomo_kazza/" className="link"> www.topcoder.com</a> and the certificate I got from online courses.</h5></div>
            <div className="sk-h5"><h5>Enjoy browsing, and get in touch with any questions.</h5></div>
            <a href="/contact-me" className="sk-btn contact-me-btn">Contact Me</a>
          </div>
          <div className="sk-section sk-carousel-container">
            <ProjectsSlider></ProjectsSlider>
            <div className="projects-right">
              <div className="sk-h4"><h4>Previous Projects</h4></div>
              <div className="sk-h5"><h5>I have been used different technologies,</h5></div>
              <div className="sk-h5"><h5>from simple css styling and javascript interaction</h5></div>
              <div className="sk-h5"><h5>to google map API, Aangular scope, React state and d3 complex interactions</h5></div>
              <a href="/projects" className="sk-btn more-btn">See More</a>
            </div>
          </div>

          <div className="sk-section sk-achievements-container" id="achievements">
            <Achievements></Achievements>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
