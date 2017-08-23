import React, { Component } from 'react';
import './Project.css';
/**
 * Project component which display the project.
 */
class Project extends Component {
  constructor() {
    super();
    this.state = {
      isVideoShown: false
    }
    this.toggleVideo = this.toggleVideo.bind(this);
    this.closeVideo = this.closeVideo.bind(this);
  }
  toggleVideo() {
    console.log('clicked')
    this.setState({isVideoShown: !this.state.isVideoShown});
    this.refs.video.play();
  }
  closeVideo() {
    console.log('clicked hide')
    this.setState({isVideoShown: false});
    this.refs.video.pause();
  }
  render(props) {
    const vSrc = this.props.videoSrc;
    const iSrc = this.props.thumbSrc;
    const proName = this.props.projectName;
    const proUrl = this.props.projectUrl;
    const tags = this.props.projectTags;
    const techs = this.props.projectTechs;

    const techsList = techs.map((tech, index) => {
      return <li key={index}><a href="void(0)">{tech}</a></li>
    });
    const tagsList = tags.map((tag, index) => {
      return <li key={index}><a href="void(0)">#{tag}</a></li>
    });
    return (
      <div className="sk-project">
        <div className="sk-project-card">
          <div className="project-thumbnail" onClick={this.toggleVideo}>
            <img src={iSrc} alt="thumbnail"/>
            <span className="hover-bg"></span>
            <span className="play-icon"></span>
          </div>
          <div className="project-info">
            <a href={proUrl} className="project-name">{proName}</a>
            <div className="project-technologies">
              <p>Technologies :</p>
              <ul>
                {techsList}
              </ul>
            </div>
            <div className="project-technologies project-tags">
              <p>Tags :</p>
              <ul>
                {tagsList}
              </ul>
            </div>
          </div>
        </div>
        <div className={"video-overlay " + (this.state.isVideoShown ? 'shown' : '')}>
          <div className="video-container">
            <video preload controls muted ref="video">
              <source src={vSrc} type="video/mp4"></source>
            </video>
          </div>
          <div className="video-bg-cover" onClick={this.closeVideo}></div>
          <div className="close-video-btn" onClick={this.closeVideo}><span></span><span></span></div>
        </div>
      </div>
    );
  }
}

export default Project;