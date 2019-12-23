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
        <UserOutput 
          username="Filipe"/>    
        <UserInput />    
        <UserOutput 
          username="Max"/>    
        <UserInput /> 
        <UserOutput
          username="Jane"/>    
      </div>
    );
  }
}

export default App;
