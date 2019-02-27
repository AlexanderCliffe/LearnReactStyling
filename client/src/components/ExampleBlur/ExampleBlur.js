import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../ExampleBlur/css/style.css";
import logo from "./images/logo.png";
import { Link, Redirect } from "react-router-dom";
export default class ExampleBlur extends Component {
  state = {
    redirectLogin: false,
    redirectRegister: false
  };
  onClickLogin = () => {
    this.setState({ redirectLogin: true });
  };
  onClickRegister = () => {
    this.setState({ redirectRegister: true });
  };
  render() {
    if (this.state.redirectLogin) {
      return <Redirect to="/login" />;
    }
    if (this.state.redirectRegister) {
      return <Redirect to="/register" />;
    }
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        />
        <header className="showcase">
          <div className="homepage-wrapper">
            <div className="center-wrapper">
              <img src={logo} className="logo" alt="Pursuit" />
              <div className="homepage-description">
                A highly customized and simple to use workout tracker, planner
                and competition organizer.
              </div>
              <div className="options-wrapper">
                <button className="option option-discover">
                  <div className="option-description discover">Discover</div>
                  <FontAwesomeIcon
                    className="option-icon discover"
                    icon="info-circle"
                  />
                </button>
                <button
                  className="option option-login"
                  onClick={this.onClickLogin}
                >
                  <div className="option-description login">Continue</div>
                  <FontAwesomeIcon className="option-icon login" icon="user" />
                </button>
                <button
                  className="option option-register"
                  onClick={this.redirectRegister}
                >
                  <div className="option-description register">Start</div>
                  <FontAwesomeIcon
                    className="option-icon register"
                    icon="address-card"
                  />
                </button>
              </div>
            </div>
          </div>
        </header>

        <section className="services">
          <div className="container grid-3 center">
            <div>
              <i className="fab fa-youtube fa-3x" />
              <h3>Youtube</h3>
              <p> Lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <i className="fas fa-chalkboard-teacher fa-3x" />
              <h3>Courses</h3>
              <p> Lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <i className="fas fa-briefcase fa-3x" />
              <h3>FreeLancing Projects</h3>
              <p> Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </section>

        <section className="about bg-light center">
          <div className="container">
            <div className="grid-2">
              <div className="center">
                <i className="fas fa-laptop-code fa-10x" />
              </div>
              <div>
                <h3>About us</h3>
                <p> Bla bla bla</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
