import React, { Component } from 'react';
import { Route } from 'react-router-dom'


import Nav from './components/Nav'
import Home from './components/Home.js'
import ProjectsList from './components/ProjectsList.js'
import IndividualProject from './components/IndividualProject.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Nav />
          <Route exact path='/' component={Home}/>
          <Route exact path='/projects' component={ProjectsList} />
          <Route exact path='/projects/:id' component={IndividualProject} />
        </header>
      </div>
    );
  }
}

export default App;
