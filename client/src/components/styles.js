import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import backgroundImg from "./gym.jpg";

const Icon = ({ icon, className, onClick, name }) => (
  <FontAwesomeIcon
    icon={icon}
    className={className}
    onClick={onClick}
    name={name}
  />
);

export const PageWrapper = styled.div``;

export const BackgroundImageWrapper = styled.div`
  position: relative;
`;

export const BackgroundImage = styled.div`
  opacity: 0.2;
  height: 100vh;
  filter: alpha(opacity=20); /* msie */
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${backgroundImg});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  z-index: 1;
`;

export const LoginContainer = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
  top: 18%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  z-index: 1;
`;

export const LoginWrapper = styled.div`
  width: 400px;
  border-radius: 12px;
  overflow: hidden;
  padding: 55px 55px 37px 55px;
  height: 500px;

  background: #151318;
  background: -webkit-linear-gradient(to bottom, #28262b, #454546);
  background: -o-linear-gradient(to bottom, #28262b, #454546);
  background: -moz-linear-gradient(to bottom, #28262b, #454546);
  background: linear-gradient(to bottom, #28262b, #454546);
`;

export const LoginFormTitle = styled.span`
  font-size: 30px;
  color: #fff;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;

  display: block;
`;

export const UsernameInputWrapper = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 2px solid rgba(255, 255, 255, 0.25);
  margin-bottom: 30px;
  margin-top: 30px;
  width: 95%;

  ${props =>
    props.active
      ? `  
      border-bottom-color: white;
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
      transition: all 1s;
        `
      : `
     
      `}
`;

export const FormFieldInput = styled.input`
  font-family: Poppins-Regular;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  display: block;
  width: 100%;
  height: 45px;
  background: transparent;
  padding: 0 5px 0 38px;

  ::placeholder {
    color: rgb(223, 222, 222);
  }

  :focus {
    padding-left: 5px;
  }
`;

export const FormFieldIcon = styled(Icon)`
  position: absolute;
  left: 6px;
  top: 13px;
  color: white;
  ${props =>
    props.active
      ? `  top: -10px;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;`
      : ``}
`;

export const CheckboxLabelWrapper = styled.div`
  display: flex;
`;

export const UsernameIcon = styled(Icon)``;

export const RememberMeCheckedIcon = styled(Icon)`
  color: white;
  cursor: pointer;

  ${props => (props.invisible ? `display: none;` : ``)}
`;

export const RememberMeUnCheckedIcon = styled(Icon)`
  color: white;
  cursor: pointer;

  ${props => (props.invisible ? `display: none;` : ``)}
`;

export const CheckBoxLabel = styled.label`
  font-size: 13px;
  color: #fff;
  line-height: 1.4;

  display: block;
  position: relative;
  padding-left: 26px;
  cursor: pointer;
  margin-top: 2px;
`;

export const LoginButtonWrapper = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;
`;

export const ForgottenPasswordWrapper = styled.div`
  text-align: center;
  :hover {
    color: white;
  }
`;

export const ForgotPasswordHyperlink = styled.a`
  color: #cccccc;
`;

export const LoginFormButton = styled.button`
  font-family: Poppins-Medium;
  font-size: 16px;
  color: #555555;
  line-height: 1.2;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-width: 120px;
  height: 50px;
  border-radius: 25px;

  background: #9152f8;
  background: -webkit-linear-gradient(to top, #7579ff, #b224ef);
  background: -o-linear-gradient(to top, #7579ff, #b224ef);
  background: -moz-linear-gradient(to top, #7579ff, #b224ef);
  background: linear-gradient(to top, #7579ff, #b224ef);
  position: relative;
  z-index: 1;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  ::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-color: #fff;
    top: 0;
    left: 0;
    opacity: 1;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  :hover {
    color: #fff;
  }

  :hover:before {
    opacity: 0;
  }
`;

export const WorkoutMetricInput = styled.input`
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  width: 4rem;
  height: 4rem;
  text-align: center;
  border: 1.5px solid black; /* Add a grey border */
  margin-right: 0.5rem;
  margin-top: 0.2rem;
  :focus {
    border: 1.5px solid blue;
  }
`;

export const UpDownIcon = styled(Icon)`
  color: #003d99;
  font-weight: bold;
  font-size: 1.4rem;

  :hover {
    color: #0066ff;
  }
`;

export const SpinBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const CustomSpinBox = ({ onAdd, onMinus }) => (
  <SpinBoxDiv>
    <UpDownIcon icon="caret-square-up" onClick={onAdd} />
    <UpDownIcon icon="caret-square-down" onClick={onMinus} />
  </SpinBoxDiv>
);

const WeightUnitPickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const WeightUnit = styled.div`
  color: #003d99;
  font-weight: bold;
  font-size: 1.4rem;
  cursor: pointer;
  :hover {
    color: #0066ff;
  }
  ${props =>
    props.selectedWeightUnit
      ? `  
      color: #0066ff;
      cursor: default;
        `
      : `
      color: #003d99;
      `}
`;
export const WeightUnitPicker = ({ selectedWeightUnit, toggleWeightUnit }) => (
  <WeightUnitPickerWrapper>
    <WeightUnit
      selectedWeightUnit={selectedWeightUnit}
      onClick={toggleWeightUnit}
    >
      kg
    </WeightUnit>
    <WeightUnit
      selectedWeightUnit={!selectedWeightUnit}
      onClick={toggleWeightUnit}
    >
      lbs
    </WeightUnit>
  </WeightUnitPickerWrapper>
);

export const Option = styled.div`
  padding: 0.5rem;
  border: 1px solid #ddd;
  height: 4rem;
  width: 4rem;
  justify-content: center;
  align-items: center;
  display: flex;

  :hover {
    cursor: pointer;
    background-color: aliceblue;
  }
`;

export const SelectedOption = styled(Option)`
  color: white;
  background-color: #003d99;
  :hover {
    cursor: default;
    color: white;
    background-color: #003d99;
  }
`;
