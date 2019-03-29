import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

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
  height: 800px;

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
  height: 500px;
`;

export const LeftPanelWrapper = styled.div`
  border: 1px solid;
  min-width: 300px;
`;

export const DateWrapper = styled.div`
  padding-top: 1rem;
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
  width: 100%;
`;

export const ExerciseColumn = styled.td`
  width: 30%;
`;

export const SetsColumn = styled.td`
  width: 15%;
`;

export const WeightColumn = styled.td`
  width: 15%;
`;

export const RepsColumn = styled.td`
  width: 20%;
`;

export const EditColumn = styled.td`
  width: 10%;
`;

export const DeleteColumn = styled.td`
  width: 10%;
`;

const Icon = ({ icon, className, onClick }) => (
  <FontAwesomeIcon icon={icon} className={className} onClick={onClick} />
);

export const TrashIcon = styled(Icon)`
  color: palevioletred;
  font-weight: bold;

  :hover {
    color: #ee1414;
  }
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

export const ExerciseInput = styled.input`
  background-position: 10px 12px; /* Position the search icon */
  background-repeat: no-repeat; /* Do not repeat the icon image */
  width: 100%; /* Full-width */
  font-size: 16px; /* Increase font-size */
  padding: 12px 20px 12px 40px; /* Add some padding */
  border: 1px solid #ddd; /* Add a grey border */
  margin-bottom: 12px; /* Add some space below the input */
`;

export const RightPanelWrapper = styled.div`
  border: 1px solid;
  border-left: 0px;
  min-width: 300px;
`;

export const ExerciseWrapper = styled.div``;

export const ExerciseNameLabel = styled.label`
  font-size: 1.3rem;
`;

export const ExerciseList = styled.ul`
  height: 200px;
  text-decoration: none;
  /* width: 18%; */
  /* overflow: hidden; */
  /* overflow-y: scroll; */
  overflow: auto;
  white-space: nowrap;
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

export const ExerciseColumnInput = styled.input``;
