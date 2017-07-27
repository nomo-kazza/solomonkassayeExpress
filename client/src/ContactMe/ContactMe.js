import React, { Component } from 'react';
import './ContactMe.css';

class ContactMe extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      email: '',
      name: '',
      message: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    if(this.state.email === "" || this.state.message === "") {
      this.setState({ isEmpty: true });
      setTimeout(() => { this.setState({isEmpty: false}) }, 5000)
      return;
    }
    fetch('/contact-me', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.name,
        message: this.state.message
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)

      if (responseJson.ok) {
        this.setState({
          email: '',
          name: '',
          message: ''
        })
        this.setState({formSent: true})
      }
      else this.setState({formSent: false})
    })
    .then(() => setTimeout(() => { this.setState({formSent: false}) }, 5000))
    .catch((error) => {
      console.log(error)
      console.error(error);
    });
  }

  onChange(e) {
    let newState = {};
    newState[e.target.name] =  e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div className="sk-contact-me">
        <div className={"message-sent-status " + (this.state.formSent ? "show" : '')} >
          Your message has been sent. Thank You, I will reply too soon.</div>
        <div className={"message-sent-status " + (this.state.isEmpty ? "show error" : '')} >
          Please enter your email and/or message</div>
        <div className="sk-contact-form">
          <h1>Contact Me</h1>
          <form name="skContactForm" onSubmit={this.handleSubmit}>
            <div className="form-input">
              <label htmlFor="your-name">Name</label>
              <input type="text" id="your-name" placeholder="Name" name="name" onChange={this.onChange}/>
            </div>
            <div className="form-input">
              <label htmlFor="your-name">Email</label>
              <input type="email" id="your-name" placeholder="Email" name="email" onChange={this.onChange}/>
            </div>
            <div className="form-input">
              <label htmlFor="your-name">Message</label>
              <textarea type="text" id="your-name" placeholder="Message" name="message" onChange={this.onChange}></textarea>
            </div>
            <div className="submit-link">
              <input type="submit" name="submit" className="submit-btn" value="Send"></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactMe;