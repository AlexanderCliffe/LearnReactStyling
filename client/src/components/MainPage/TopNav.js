import React, { Component } from "react";
import "./css/Navbar.css";
export default class TopNav extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <div className="navgroup-right">
          <a href="#contact" className="x">
            Log In
          </a>
          <a href="#about">Sign up</a>
        </div>
      </div>
    );
  }
}
