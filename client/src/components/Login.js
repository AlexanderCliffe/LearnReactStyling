import React, { Component } from "react";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className="wrap-login">
          <form className="login-form validate-form" autoComplete="off">
            <span className="login-form-title p-b-34 p-t-27">Log in</span>

            <div
              className="wrap-input validate-input"
              data-validate="Enter username"
            >
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Username"
              />
            </div>

            <div
              className="wrap-input validate-input"
              data-validate="Enter password"
            >
              <input
                className="input"
                type="password"
                name="pass"
                placeholder="Password"
              />
              <div className="focus-input" />
              <span className=" spanIcon" />
              <FontAwesomeIcon className="focus-input fontIcon" icon="igloo" />
            </div>

            <div className="contact-form-checkbox">
              <input
                className="input-checkbox"
                id="ckb1"
                type="checkbox"
                name="remember-me"
              />
              <label className="label-checkbox" htmlFor="ckb1">
                Remember me
              </label>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center p-t-90">Forgot Password?</div>
          </form>
        </div>
      </div>
    );
  }
}
