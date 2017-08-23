
import React, { Component } from 'react';

import SkypeIcon from '../icons/SkypeIcon';
import EmailIcon from '../icons/EmailIcon';
import GithubIcon from '../icons/GithubIcon';
import TwitterIcon from '../icons/TwitterIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import FacebookIcon from '../icons/FacebookIcon';

import './Footer.css';
/**
 * Footer component which display contact and social media links.
 */
class Footer extends Component {

  render() {
    return (
      <div className="sk-footer">
        <footer>
            <div className="copyright">
                <div className="contact-info">
                    <a href="tel:+15716352606" className="phone"><span className="f-label">Phone : </span><span>+15716352606</span></a>
                    <a href="mailto:solomonjobsearch@gmail.com" className="email"><span className="f-label">Email : </span><span>solomonjobsearch@gmail.com</span></a>
                </div>
                <p>Solomon Kassaye © 2017</p>
            </div>
            <div className="social-icons">
                <a href="mailto:solomonjobsearch@gmail.com" className="gmail-icon">
                    <EmailIcon></EmailIcon>
                </a>
                <a href="skype:+15716352606?call" className="skype-icon">
                    <SkypeIcon></SkypeIcon>
                </a>
                <a href="https://twitter.com/nomo_kazza" className="twitter-icon">
                    <TwitterIcon></TwitterIcon>
                </a>
                <a href="https://github.com/nomo-kazza" className="github-icon">
                   <GithubIcon></GithubIcon>
                </a>
                <a href="https://www.linkedin.com/in/solomon-kassaye-3b5b3586/" className="linkedin-icon">
                    <LinkedinIcon></LinkedinIcon>
                </a>
                <a href="https://www.facebook.com/nomolosk" className="facebook-icon">
                    <FacebookIcon></FacebookIcon>
                </a>
            </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

