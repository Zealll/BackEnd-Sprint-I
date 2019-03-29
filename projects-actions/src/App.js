import React, { Component } from 'react';

import ProjectsList from './components/ProjectsList.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ProjectsList />
        </header>
      </div>
    );
  }
}

export default App;
