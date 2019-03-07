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
    let wrapInputUsername = "wrap-input";
    let wrapInputPassword = "wrap-input";
    if (this.state.passwordInput) {
      passwordIcon += " input-active";
      wrapInputPassword += " wrap-input-active";
    }
    if (this.state.usernameInput) {
      usernameIcon += " input-active";
      wrapInputUsername += " wrap-input-active";
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
      <div className="wrapper-master">
        <div className="wrapper-background-image">
          <div className="background-image" />
        </div>
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form validate-form" autoComplete="off">
              <span className="login-form-title">Log in</span>

              <div className={wrapInputUsername}>
                <input
                  className="input"
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

              <div className={wrapInputPassword}>
                <input
                  className="input"
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
              <div className="wrap-checkbox-label">
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
                <div onClick={this.onClick}>
                  <label className="label-checkbox" htmlFor="checkbox-icons">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn">Login</button>
              </div>

              <div className="div-forgotPassword">
                <a href="http://localhost:3000/" className="a-forgotPassword">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
