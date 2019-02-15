import React, { Component } from "react";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component {
  state = {
    passwordInput: false,
    usernameInput: false,
    rememberMe: false
  };
  onFocus = e => {
    this.setState({ [e.target.name]: true });
  };
  onBlur = e => {
    this.setState({ [e.target.name]: false });
  };
  onClick = e => {
    this.setState({ rememberMe: !this.state.rememberMe });
  };
  render() {
    let passwordIcon = "icon";
    let usernameIcon = "icon";
    if (this.state.passwordInput) {
      passwordIcon += " input-active";
    }
    if (this.state.usernameInput) {
      usernameIcon += " input-active";
    }
    let rememberMeChecked = "rememberMe-check";
    let rememberMeUnchecked = "rememberMe-uncheck";
    if (this.state.rememberMe) {
      rememberMeUnchecked += " invisible";
    }
    if (!this.state.rememberMe) {
      rememberMeChecked += " invisible";
    }

    return (
      <div>
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form validate-form" autoComplete="off">
              <span className="login-form-title">Log in</span>

              <div className="wrap-input">
                <input
                  className="input inputIgloo"
                  type="text"
                  name="usernameInput"
                  placeholder="Username"
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                />
                <div className="">
                  <FontAwesomeIcon className={usernameIcon} icon="user" />
                </div>
              </div>

              <div className="wrap-input">
                <input
                  className="input inputIgloo"
                  type="password"
                  name="passwordInput"
                  placeholder="Password"
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                />
                <div className="">
                  <FontAwesomeIcon className={passwordIcon} icon="unlock" />
                </div>
              </div>
              <div
                className="checkbox-icons"
                id="checkbox-icons"
                onClick={this.onClick}
              >
                <FontAwesomeIcon
                  className={rememberMeUnchecked}
                  icon="square"
                />
                <FontAwesomeIcon
                  className={rememberMeChecked}
                  icon="check-square"
                />
              </div>
              <label className="label-checkbox" htmlFor="checkbox-icons">
                Remember me
              </label>

              <div className="container-login-form-btn">
                <button className="login-form-btn">Login</button>
              </div>

              <div className="text-center p-t-90">Forgot Password?</div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
