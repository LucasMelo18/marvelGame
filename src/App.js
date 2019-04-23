import React, { Component } from 'react';
import './App.css';
import Quiz from './quiz/Quiz';
import Nav from './common/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
        <Quiz/>
      </div>
    );
  }
}

export default App;
