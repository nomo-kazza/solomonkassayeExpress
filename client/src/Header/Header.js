import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

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
                <li><Link to="/"><span></span>Home</Link></li>
                <li><Link to="/projects"><span></span>Projects</Link></li>
                <li><Link to="/achievements"><span></span>Achievements</Link></li>
                <li><Link to="/about-me"><span></span>About Me</Link></li>
                <li><Link to="/contact-me"><span></span>Contact Me</Link></li>
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