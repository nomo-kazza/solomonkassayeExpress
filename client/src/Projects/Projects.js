import React, { Component } from 'react';
import Project from '../Project';
import './Projects.css';
import ProjectsSlider from '../ProjectsSlider';
/**
 * Projects component which display the Projects.
 */
class Projects extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      projects: []
    }
    this.tcDash = `https://www.topcoder.com/members/nomo_kazza`+
              `/details/?track=DEVELOP&subTrack=UI_PROTOTYPE_COMPETITION&tab=challenges`;
  }

  componentDidMount() {
    var url = 'https://res.cloudinary.com/nomo-kazza/raw/upload/v1503446423/web-assets/projects.json'

    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          projects: responseJson.projects,
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const cardsList = this.state.projects.map((project, index) => {
      return <Project {...project} key={index}></Project>
    });
    return (
      <div className="sk-projects">
        <div className="sk-projects-video">
          <div className="sk-h4"><h4>Projects I have been participated while I was working with Topcoder at <a href={this.tcDash}>www.topcoder.com</a></h4></div>
          <div className="bg-cover"></div>

          <ProjectsSlider></ProjectsSlider>
        </div>
        <h3>Projects</h3>
        <div className="sk-project-cards-container">
          { cardsList }
        </div>
      </div>
    );
  }
}

export default Projects;