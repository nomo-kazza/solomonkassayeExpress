import React, { Component } from 'react';
import './AboutMe.css';
/**
 * About me component.
 */
class AboutMe extends Component {

  render() {
    return (
      <div className="sk-about-me">
        <div className="bg-cover"></div>
        <div className="intro-bg"></div>
        <div className="sk-about-content">
          <div className="sk-section sk-intro-container">
            <div className="sk-h3"><h3>Hi, I am Solomon Kassaye</h3></div>
            <div className="sk-h4"><h4>Welcome to my portfolio.</h4></div>
            <div className="sk-h5"><h5>I am passionate about Software Development, ...I mean it.</h5></div>
            <div className="sk-h5"><h5>I have been in Software Development since 2009 after I graduated in Electrical Engineering from Haramaya University, Ethiopia, in 2008.</h5></div>
            <div className="sk-h5"><h5>
              I joined <a href="https://www.topcoder.com/members/nomo_kazza/" className="link">Topcoder </a> in 2009. I started to participate in Java Development projects and then I changed the track to UI Prototype (front end).
            </h5></div>
            <div className="sk-h5"><h5>
              In UI Prototype track I participated on different (more than 40) projects.
               All of them are stand alone projects which have more than 5 pages per project and they are responsive to mobile, tablet and desktop.
            </h5></div>
            <div className="sk-h5"><h5>
              While I was working with Topcoder, I got a lot of experiences in different technologies because those projects used various kinds of technologies.
            </h5></div>
            <div className="sk-h5"><h5>Thanks for visiting my site, and get in touch with any questions.</h5></div>
            <a href="/contact-me" className="sk-btn contact-me-btn">Contact Me</a>
          </div>
          <div className="sk-section sk-skills">
            <div className="sk-h4"><h4>SKILLS</h4></div>
            <div className="sub-title sk-h4"><h4>PROFICIENT</h4></div>
            <ul>
              <li className="html5">HTML5</li>
              <li className="css3">CSS3</li>
              <li className="bootstrap">BOOTSTRAP</li>
              <li className="sass">SASS</li>
              <li className="js">JAVASCRIPT</li>
              <li className="jquery">JQUERY</li>
              <li className="angular4">ANGULAR</li>
              <li className="react">REACT JS</li>
            </ul>
            <div className="sub-title sk-h4"><h4>Experienced</h4></div>
            <ul>
              <li className="node">Node JS</li>
              <li className="require">REQUIRE JS</li>
              <li className="d3">D3 JS</li>
              <li className="java">JAVA</li>
              <li className="mongodb">Mongodb</li>
              <li className="ionic">Ionic</li>
              <li className="ruby">Ruby On Rails</li>
              <li className="gmap">Google Map API</li>
              <li className="android">Android</li>
              <li className="sharepoint">Sharepoint</li>
            </ul>
            <div className="sub-title sk-h4"><h4>IDE (Development Environment)</h4></div>
            <ul>
              <li className="sublime">Sublime Text</li>
              <li className="sharepoint">Visual Studio Code</li>
              <li className="sublime">Eclipse</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;