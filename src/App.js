import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Homepage';
import Projects from './components/pages/Projectspage';
import About from './components/pages/Aboutpage';
import Contact from './components/pages/Contactpage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/employee-tracker' component={() => {
            window.location.href = 'https://github.com/heatherhern/react-employee-tracker';
            return null;
          }} />
          <Route path='/readme-generator' component={() => {
            window.location.href = 'https://github.com/heatherhern/Easy-README-Generator';
            return null;
          }} />
          <Route path='/note-taker' component={() => {
            window.location.href = 'https://github.com/heatherhern/Note-Taker';
            return null;
          }} />
          <Route path='/buger-logger' component={() => {
            window.location.href = 'https://github.com/heatherhern/Burger-Logger';
            return null;
          }} />
          <Route path='/space-quiz' component={() => {
            window.location.href = 'https://github.com/heatherhern/Space-Quiz';
            return null;
          }} />
          <Route path='/dev-team-generator' component={() => {
            window.location.href = 'https://github.com/heatherhern/Development-Team-Generator';
            return null;
          }} />
          <Route path='/password-gen' component={() => {
            window.location.href = 'https://github.com/heatherhern/Random-Password-Generator';
            return null;
          }} />
          <Route path='/weather-dash' component={() => {
            window.location.href = 'https://github.com/heatherhern/Weather-Dashboard';
            return null;
          }} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
