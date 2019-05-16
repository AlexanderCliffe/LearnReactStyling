import React, { Component } from "react";
import * as Styled from "./styles";

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
    return (
      <Styled.PageWrapper>
        <Styled.BackgroundImageWrapper>
          <Styled.BackgroundImage />
        </Styled.BackgroundImageWrapper>
        <Styled.LoginContainer>
          <Styled.LoginWrapper>
            <form className="login-form validate-form" autoComplete="off">
              <Styled.LoginFormTitle>Log in</Styled.LoginFormTitle>

              <Styled.UsernameInputWrapper active={this.state.usernameInput}>
                <Styled.FormFieldInput
                  type="text"
                  name="usernameInput"
                  placeholder="Username"
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                />
                <div>
                  <Styled.FormFieldIcon
                    icon="user"
                    active={this.state.usernameInput}
                  />
                </div>
              </Styled.UsernameInputWrapper>

              <Styled.UsernameInputWrapper active={this.state.passwordInput}>
                <Styled.FormFieldInput
                  type="password"
                  name="passwordInput"
                  placeholder="Password"
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                />
                <div>
                  <Styled.FormFieldIcon
                    icon="unlock"
                    active={this.state.passwordInput}
                  />
                </div>
              </Styled.UsernameInputWrapper>

              <Styled.CheckboxLabelWrapper>
                <div
                  className="checkbox-icons"
                  id="checkbox-icons"
                  onClick={this.onClick}
                >
                  <Styled.RememberMeCheckedIcon
                    icon="square"
                    invisible={this.state.rememberMe}
                  />
                  <Styled.RememberMeUnCheckedIcon
                    icon="check-square"
                    invisible={!this.state.rememberMe}
                  />
                </div>
                <div onClick={this.onClick}>
                  <Styled.CheckBoxLabel htmlFor="checkbox-icons">
                    Remember me
                  </Styled.CheckBoxLabel>
                </div>
              </Styled.CheckboxLabelWrapper>

              <Styled.LoginButtonWrapper>
                <Styled.LoginFormButton>Login</Styled.LoginFormButton>
              </Styled.LoginButtonWrapper>

              <Styled.ForgottenPasswordWrapper>
                <Styled.ForgotPasswordHyperlink href="http://localhost:3000/">
                  Forgot Password?
                </Styled.ForgotPasswordHyperlink>
              </Styled.ForgottenPasswordWrapper>
            </form>
          </Styled.LoginWrapper>
        </Styled.LoginContainer>
      </Styled.PageWrapper>
    );
  }
}
