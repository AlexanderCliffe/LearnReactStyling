import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Icon = ({ icon, className, onClick, name }) => (
  <FontAwesomeIcon
    icon={icon}
    className={className}
    onClick={onClick}
    name={name}
  />
);

export const PageWrapper = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  background-color: rgb(225, 242, 243);
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  width: 100%;
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

export const FormWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;

  width: 1000px;
  border-radius: 12px;
  padding: 15px 15px 15px 15px;
  height: 900px;

  background: #f5f5f5;

  @media (max-width: 700px) {
    height: 1300px;
  }
`;

export const ExerciseForm = styled.form`
  text-align: center;
  position: relative;
`;

export const FormTitle = styled.span`
  font-size: 4em;
  display: inline-block;
`;

export const FormContentWrapper = styled.div`
  display: flex;
  height: 35rem;
  width: 100%;

  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
    height: 70rem;
    justify-content: center;
    align-items: center;
  }
`;

const PanelWrapper = styled.div`
  border: 1px solid;

  width: 50%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    width: 100%;
    height: 35rem;
  }
`;

export const LeftPanelWrapper = styled(PanelWrapper)``;

export const DatepickerWrapper = styled.div`
  padding-top: 1rem;
  width: 100%;
`;

export const DateLabel = styled.label`
  font-size: 1.3rem;
`;

export const test = styled.div``;

export const DayWrapper = styled.div`
  ${props =>
    props.hide
      ? `display: none;`
      : `height: 100%;
    border: 2px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    width: 100%;
  `}
`;

export const DayLogExercise = styled.div`
  width: 80%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const DayLogExerciseName = styled.div`
  font-size: 1.15rem;
  font-weight: bold;
`;

export const DayLogTable = styled.table`
  width: 100%;
  margin-top: 0.5rem;
`;

export const WeightColumn = styled.div``;

export const RepsColumn = styled.div``;

export const DeleteColumn = styled.div``;

export const TrashIcon = styled(Icon)`
  color: palevioletred;
  font-weight: bold;

  :hover {
    color: #ee1414;
  }
`;

export const RightPanelWrapper = styled(PanelWrapper)`
  border-left: 0;
  @media (max-width: 700px) {
    border-left: 1px solid;
  }
`;

export const ExerciseNameLabel = styled.label`
  font-size: 1.3rem;
`;

export const ExerciseListItem = styled.li`
  border: 1px solid #ddd; /* Add a border to all links */
  margin-top: -1px; /* Prevent double borders */
  background-color: #f6f6f6; /* Grey background color */
  padding: 12px; /* Add some padding */
  text-decoration: none; /* Remove default text underline */
  font-size: 18px; /* Increase the font-size */
  color: black; /* Add a black text color */
  display: block; /* Make it into a block element to fill the whole list */

  :hover {
    background-color: rgb(
      230,
      163,
      163
    ); /* Add a hover effect to all links, except for headers */
    cursor: pointer;
  }
`;

export const ExerciseNameInput = styled.input`
  background-position: 10px 12px; /* Position the search icon */
  width: 100%; /* Full-width */
  font-size: 16px; /* Increase font-size */
  padding: 12px 20px 12px 40px; /* Add some padding */
  border: 1.5px solid #ddd; /* Add a grey border */
  margin-bottom: 4px; /* Add some space below the input */
  margin-top: 0.8rem;

  :focus {
    border: 1.5px solid blue;
  }
`;

const InputWarningMessage = styled.div``;

// const WarningIcon = styled(Icon)`
//   color: darkorange;
// `;

const WarningIconMessageWrapper = styled.div`
  ${props =>
    props.warning
      ? `  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid darkorange;
  background-color: #ffdab3;
  color: darkorange;`
      : `display: none`}
`;

export const ExerciseNameWarning = ({ onClick, toggle, warning }) => (
  <WarningIconMessageWrapper warning={warning}>
    <InputWarningMessage>
      Please choose an exercise in the list
    </InputWarningMessage>
  </WarningIconMessageWrapper>
);

export const ExerciseList = styled.ul`
  ${props =>
    props.show
      ? `  
      position: absolute;
      
      height: 11.45rem;
        overflow: auto;
        z-index:5;
        width: 100%; /* Full-width */
        `
      : `
      display: none;
      `}
`;

export const ExerciseNameWrapper = styled.div`
  position: relative;
  width: 80%;
`;

export const WorkoutMetricsWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WorkoutMetricInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WorkoutMetricWrapper = styled.div`
  display: flex;
  margin: 0.5rem;
`;

export const WorkoutMetricLabel = styled.label`
  font-size: 1.3rem;
`;

export const WorkoutMetricInput = styled.input`
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  width: 4rem;
  height: 4rem;
  text-align: center;
  border: 1.5px solid #ddd; /* Add a grey border */
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

// Equipment

export const EquipmentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2.5rem;
  padding-bottom: 3rem;
`;

export const EquipmentOptionsWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  width: 15rem;
`;

export const EquipmentOptionLabel = styled.label`
  font-size: 1.3rem;
`;

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

export const AddExerciseButton = styled.button`
  font-size: 1.2rem;
  border: 2px solid black;
  border-radius: 5px;
  padding: 1rem 1rem 1rem 1rem;

  color: white;
  background-color: #003d99;
  font-weight: bold;

  :hover {
    color: #003d99;
    background-color: white;
  }
`;
