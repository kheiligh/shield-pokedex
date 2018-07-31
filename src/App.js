import React, { Component } from 'react';
import './App.css';
import ModalSwitch from './components/modal.switch';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route component={ModalSwitch} />
      </Router>
    );
  }
}

export default App;
