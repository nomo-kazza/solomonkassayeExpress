import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';
import Achievements from './Achievements';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import FourOFour from './404Example'
import Home from './Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-content">
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
            <Route path="/projects" component={Projects} />
            <Route path="/achievements" component={Achievements} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/contact-me" component={ContactMe} />
            <Route component={FourOFour}/>
          </Switch>
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
