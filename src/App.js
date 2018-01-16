import React, { Component } from 'react';
import NavBar from './components/NavBar'
import { Route } from "react-router-dom";
import Landing from './components/Landing.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Route exact path="/" render={props => <Landing {...props} />} />
      </div>
    );
  }
}

export default App;
