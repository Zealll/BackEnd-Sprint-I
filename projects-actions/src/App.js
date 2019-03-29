import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import ProjectsList from './components/ProjectsList.js'
import Nav from './components/Nav'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Elan's App!</h1>
          <Nav />
          <Route exact path='/projects' component={ProjectsList} />
        </header>
      </div>
    );
  }
}

export default App;
