import React, { Component } from 'react';
import './App.css';
import HomeComponent from './components/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeComponent></HomeComponent>
      </div>
    );
  }
}

export default App;
