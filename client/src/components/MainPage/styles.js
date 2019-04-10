import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const DayWorkouts = styled.div`
  border: 1rem solid black;
  width: 200px;
  height: 200px;
`;

export const PageWrapper = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  background-color: rgb(225, 242, 243);
  height: 100vh;
`;

export const ContentWrapper = styled.div`
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

export const FormWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
  width: 1000px;
  border-radius: 12px;
  padding: 15px 15px 15px 15px;
  height: 1000px;

  background: #f5f5f5;
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
  display: grid;
  grid-template-columns: 2fr 2fr;
  min-width: 600px;
  height: 550px;
`;

export const LeftPanelWrapper = styled.div`
  padding-top: 1.5rem;
  border: 1px solid;
  min-width: 300px;
`;

export const DatepickerWrapper = styled.div`
  padding-top: 0.5rem;
`;

export const DateWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

export const DateLabel = styled.label`
  font-size: 1.3rem;
`;

export const DayWrapper = styled.div`
  ${props =>
    props.hide
      ? `display: none;`
      : `height: 13rem;
    border: 2px solid black;
    border-radius: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 1rem 1rem 1rem 1rem;
    overflow: hidden;
  `}
`;

export const DayLogTable = styled.table`
  table-layout: fixed;
  width: 100%;
`;

const Icon = ({ icon, className, onClick, name }) => (
  <FontAwesomeIcon
    icon={icon}
    className={className}
    onClick={onClick}
    name={name}
  />
);

export const TrashIcon = styled(Icon)`
  color: palevioletred;
  font-weight: bold;

  :hover {
    color: #ee1414;
  }
`;

export const ColumnWithoutOverflow = styled.td`
  overflow: hidden;
`;

export const ExerciseColumn = styled.td`
  width: 50%;
`;

export const ExerciseHeader = styled.th`
  width: 50%;
`;

export const EditHeader = styled.th`
  width: 5%;
`;

export const DeleteHeader = styled.th`
  width: 5%;
`;

export const ExerciseColumnInput = styled.input``;

export const SetsColumn = styled.td`
  width: 10%;
`;

export const WeightColumn = styled.td`
  width: 10%;
`;

export const RepsColumn = styled.td`
  width: 10%;
`;

export const EditColumn = styled.td`
  width: 10%;
`;

export const DeleteColumn = styled.td`
  width: 10%;
`;

export const EditIcon = styled(Icon)`
  ${props =>
    props.toggle
      ? `color: #81b6da;`
      : `display: none;
      
      
      `}

  :hover {
    color: #2457c4;
  }
`;

export const CheckedIcon = styled(Icon)`
  ${props =>
    props.toggle
      ? `display: none;`
      : `color: #91d182;
  `}

  :hover {
    color: #2df700;
  }
`;

export const ToggleEditIcon = ({ onClick, toggle }) => (
  <div onClick={onClick}>
    <EditIcon icon="edit" toggle={toggle} />
    <CheckedIcon icon="check-square" toggle={toggle} />
  </div>
);

export const RightPanelWrapper = styled.div`
  padding-top: 1.5rem;
  border: 1px solid;
  border-left: 0px;
  min-width: 300px;
`;

export const ExerciseWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
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

const WarningIcon = styled(Icon)`
  color: darkorange;
`;

const WarningIconMessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid darkorange;
  background-color: #ffdab3;
  color: darkorange;
`;

export const ExerciseNameWarning = ({ onClick, toggle }) => (
  <WarningIconMessageWrapper>
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
`;

export const WorkoutMetricsWrapper = styled.div`
  margin-left: 1.4rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
`;

export const WorkoutMetricInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WorkoutMetricWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
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
  padding-top: 3rem;
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
