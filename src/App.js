import React, { Component } from 'react';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

import './App.css';

class App extends Component {
  state = {
    usernames: [
      'Filipe',
      'Max',
      'Jane'
    ]
  }

  usernameChangedHandler = (event) => {
    this.setState({
      usernames: [
        'Filipe',
        event.target.value,
        'Jane'
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Exercise 1</h1>
        <UserInput
          username={this.state.usernames[0]}/>    
        <UserOutput 
          username={this.state.usernames[0]}/>    
        <UserInput 
          username={this.state.usernames[1]} 
          changed={this.usernameChangedHandler}/>    
        <UserOutput 
          username={this.state.usernames[1]}/>    
        <UserInput
          username={this.state.usernames[2]}/>
        <UserOutput
          username={this.state.usernames[2]}/>    
      </div>
    );
  }
}

export default App;
