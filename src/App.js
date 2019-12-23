import React, { Component } from 'react';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Exercise 1</h1>
        <UserInput />    
        <UserOutput />    
        <UserInput />    
        <UserOutput />    
        <UserInput />    
        <UserOutput />    
      </div>
    );
  }
}

export default App;
