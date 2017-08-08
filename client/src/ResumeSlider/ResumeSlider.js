import React, { Component } from 'react';
import Slider from 'react-slick';
import './ResumeSlider.css';

class ResumeSlider extends Component {

  render() {
    const settings = {

      vertical: true,
      dots: true,
      infinite: true,
      speed: 1000,
      arrows: false,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      verticalSwiping: true,
      draggable: true,
      cssEase: "ease-in-out",
      // autoplaySpeed: 100,
      // swipeToSlide: true,
      // touchMove: true
    };
    return (
      <div className="sk-resume-slider">
        <div className='slider-container'>
          <Slider {...settings}>
            <div className="resume-section">
              <h5>Career Objective</h5>
              <p>Web Developer offering advanced knowledge of Javascript, HTML5, 
                and CSS3, as well as extensive experience with Jquery, Angular 1, 
                Angular 4, React, and Bootstrap Frameworks. Experienced Web Developer 
                specializing in front-end development for dynamic web application projects.</p>
            </div>
            <div className="resume-section">
              <h5>Core Competencies</h5>
              <ol>
                <li>Expert in responsive and mobile design implementation</li>
                <li>Modern cross browser development</li>
                <li>Pixel Perfect development</li>
                <li>Familiarity with RESTful Services</li>
                <li>Experience with Photoshop/Illustrator</li>
                <li>Experience with Git/Github</li>
                <li>Great Problem solving skills</li>
                <li>Optimization of web page performance</li>
                <li>Object Oriented Programming</li>
                <li>Self-motivated / Meditative</li>
              </ol>
            </div>
            <div className="resume-section">
              <h5>Professional Experience</h5>
              <h6>Front End Developer, 09/2014 – present, Topcoder, San Francisco, CA</h6>
              <ul>
                <li>Create the web application (website) using the provided wireframes, storyboards (Photoshop/Illustrator), and the specification document.</li>
                <li>Develop fully functional and responsive front end web application within 5-7 days.</li>
                <li>Develop web app that should pass 75% of Topcoder reviewing scorecards.</li>
                <li>Participated in more than 45 projects, each of them was stand alone and have more than 5 pages per project.</li>
                <li>Make sure images should be properly compressed and look sharp for Retina and Standard devices.</li>
                <li>Make sure the design, layout, and typography of the prototype (page) match the storyboard (Photoshop).</li>
              </ul>
              <h6>Java Developer, 08/2009 – 01/2012, Topcoder, San Francisco, CA</h6>
              <ul>
                <li>Convert a component design (UML Class Diagram) into a functional component.</li>
                <li>Implement each class using the given UML Diagram and the Component Specification.</li>
                <li>Document all classes, interfaces, methods, and variables through Javadoc comments.</li>
                <li>Unit test each class of the component.</li>
              </ul>
            </div>
            <div className="resume-section">
              <h5>Education</h5>
              <p>Bachelor of Science, 2004 - 2008</p>
              <p>Haramaya University, Dire Dawa, Ethiopia</p>
              <p>Electrical Engineering</p>
            </div>
            <div className="resume-section">
              <h5>Skills</h5>
              <ol>
                <li>HTML5 * CSS3 * Javascript (Expert)</li>
                <li>Bootstrap * Sass</li>
                <li>Jquery * Angular 1 * Angular 4 * React</li>
                <li>D3 Js * Require Js</li>
                <li>Node * Mongodb</li>
                <li>Ionic * Google Map API * Java * Android</li>
                <li>Ruby on Rails * Microsoft Sharepoint 2013</li>
              </ol>
            </div>
            <div className="resume-section">
              <h5>Accomplishments</h5>
              <ol>
                <li>TCO2016 (Topcoder Open Challenge 2016) Finalist</li>
                <li>Coursera Full Stack Specialization MOC</li>
                <li>Coursera mobile apps for Android</li>
                <li>Coursera Ruby on Rails</li>
                <li>MongoDB University</li>
              </ol>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default ResumeSlider;