import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css';
/**
 * Header component which display navigation and the logo.
 */
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggleHamburger = this.toggleHamburger.bind(this);
  }
  toggleHamburger() {
    this.setState({isOpen: !this.state.isOpen})
  }
  render() {
    return (
      <div className="sk-header">
        <div className="logo"><a href="/"><img src="https://dl.dropboxusercontent.com/s/p5kxedztr9iwgkt/my-logo4.png" alt="logo"/></a></div>
        <nav className={'mobile-nav'+ (this.state.isOpen ? ' open' : '')}>
            <ul className={this.state.isOpen ? 'mobile open' : ''} onClick={this.toggleHamburger}>
              <li><NavLink exact to="/" activeClassName="active-page"><span></span>Home</NavLink></li>
              <li><NavLink to="/projects" activeClassName="active-page"><span></span>Projects</NavLink></li>
              <li><NavLink to="/achievements" activeClassName="active-page"><span></span>Achievements</NavLink></li>
              <li><NavLink to="/resume" activeClassName="active-page"><span></span>Resume</NavLink></li>
              <li><NavLink to="/contact-me" activeClassName="active-page"><span></span>Contact Me</NavLink></li>
              <li><NavLink to="/about-me" activeClassName="active-page"><span></span>About Me</NavLink></li>
            </ul>
        </nav>
        <div id="nav-icon1" className={this.state.isOpen ? 'open' : ''} onClick={this.toggleHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}

export default Header;