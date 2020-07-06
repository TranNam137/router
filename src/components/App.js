import React, { Component } from 'react';
import './css/App.css';
import {  BrowserRouter as Router,  Route,  Link} from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';
import DieuHuongURL from'./../router/DieuHuongURL';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <DieuHuongURL />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
