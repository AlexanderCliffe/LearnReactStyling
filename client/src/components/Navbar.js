import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
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
