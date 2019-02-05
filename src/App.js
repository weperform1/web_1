import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Home from "./components/home.component";
import Performers from "./components/performers.component";
import Bookings from "./components/bookings.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">WePerform</Link>
            <div>
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/performers" className="nav-link">Performers</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/bookings" className="nav-link">Bookings</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/performers" component={Performers} />
          <Route path="/bookings" component={Bookings} />
        </div>
      </Router>
    );
  }
}

export default App;

/*
npm install react-router-dom, express
routes=/
routes=/performers
routes=/bookings
 */